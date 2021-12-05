import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Helmet from '../components/Helmet';

import Button from '../components/Button';

import productData from '../assets/fake-data/products';
import numberWithCommas from '../utils/numberWithCommas';
import CartItem from '../components/CartItem';
const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems.value);

  const [cartProducts, setCartProducts] = useState(
    productData.getCartItemsInfo(cartItems)
  );

  const [totalProducts, setTotalProducts] = useState(0);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setCartProducts(productData.getCartItemsInfo(cartItems));
    setTotalPrice(
      cartItems.reduce(
        (total, item) => total + Number(item.quantity) * Number(item.price),
        0
      )
    );
    setTotalProducts(
      cartItems.reduce((total, item) => total + Number(item.quantity), 0)
    );
  }, [cartItems]);
  return (
    <Helmet title="Giỏ hàng">
      <div className="cart">
        <div className="cart_info">
          <div className="cart_info_txt">
            <p>Giỏ hàng đang có {totalProducts} sản phẩm</p>
            <div className="cart_info_txt_price">
              <span>Tổng cộng:</span>
              <span>{numberWithCommas(Number(totalPrice))}</span>
            </div>
          </div>
          <div className="cart_info_btn">
            <Button>Đặt hàng</Button>

            <Button>
              <Link to="/catalog">Tiếp tục mua hàng</Link>
            </Button>
          </div>
        </div>

        <div className="cart_list">
          {cartProducts.map((item, index) => (
            <CartItem item={item} key={index} />
          ))}
        </div>
      </div>
    </Helmet>
  );
};

export default Cart;
