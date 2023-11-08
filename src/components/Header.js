import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { notify } from "../utils/HelperFunctions";
import productImg from "../assets/images/product.jpg";
const Header = (props) => {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  const [isOpenCart, setIsOpenCart] = useState(false);

  const info = () => {
    notify("Not required for our technical test 😜", toast, "info");
  };
  const openMobileMenu = () => {
    setIsOpenMobileMenu(!isOpenMobileMenu);
  };
  const openCart = () => {
    setIsOpenCart(true);
  };
  const closeCart = () => {
    setIsOpenCart(false);
  };
  return (
    <>
      <ToastContainer />
      <div
        className='wrap-header-cart js-panel-cart show-header-cart'
        style={{
          zIndex: 99999,
          visibility: !isOpenCart ? "hidden" : "visible",
        }}
      >
        <div className='s-full js-hide-cart' onClick={closeCart} />
        <div className='header-cart flex-col-l p-l-65 p-r-25'>
          <div className='header-cart-title flex-w flex-sb-m p-b-8'>
            <span className='mtext-103 cl2'>Your Cart</span>
            <div
              className='fs-35 lh-10 cl2 p-lr-5 pointer hov-cl1 trans-04 js-hide-cart'
              onClick={closeCart}
            >
              <i className='zmdi zmdi-close' />
            </div>
          </div>
          <div
            className='header-cart-content flex-w js-pscroll ps'
            style={{ position: "relative", overflow: "hidden" }}
          >
            <ul className='header-cart-wrapitem w-full'>
              <li className='header-cart-item flex-w flex-t m-b-12'>
                <div className='header-cart-item-img'>
                  <img src={productImg} alt='IMG' />
                </div>
                <div className='header-cart-item-txt p-t-8'>
                  <a
                    href='#'
                    className='header-cart-item-name m-b-18 hov-cl1 trans-04'
                  >
                    White Shirt Pleat
                  </a>
                  <span className='header-cart-item-info'>1 x $19.00</span>
                </div>
              </li>
            </ul>
            <div className='w-full'>
              <div className='header-cart-total w-full p-tb-40'>
                Total: $75.00
              </div>
              <div className='header-cart-buttons flex-w w-full'>
                <Link
                  to='/payment'
                  className='flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-r-8 m-b-10'
                >
                  View Cart
                </Link>
                <a
                  href='#'
                  className='flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-b-10'
                >
                  Check Out
                </a>
              </div>
            </div>
            <div className='ps__rail-x' style={{ left: "0px", bottom: "0px" }}>
              <div
                className='ps__thumb-x'
                tabIndex={0}
                style={{ left: "0px", width: "0px" }}
              />
            </div>
            <div
              className='ps__rail-y'
              style={{ top: "0px", right: "0px", height: "187px" }}
            >
              <div
                className='ps__thumb-y'
                tabIndex={0}
                style={{ top: "0px", height: "0px" }}
              />
            </div>
          </div>
        </div>
      </div>
      <header className='header-v4' style={{ height: 0 }}>
        <div className='container-menu-desktop'>
          <div className='wrap-menu-desktop how-shadow1' style={{ top: "0px" }}>
            <nav className='limiter-menu-desktop container'>
              <Link to='/' className='logo'>
                <img
                  src='https://cdn.shopify.com/s/files/1/0002/7600/4882/files/the-bradery-logo_v2.svg?v=1625224912'
                  alt='IMG-LOGO'
                  width={135}
                />
              </Link>
              <div className='menu-desktop'>
                <ul className='main-menu'>
                  <li className={props.active === "home" && "active-menu"}>
                    <Link to='/'>Home</Link>
                  </li>
                  <li className={props.active === "search" && "active-menu"}>
                    <Link to='/search'>Search</Link>
                  </li>

                  <li onClick={info}>
                    <a href='#'>Blog</a>
                  </li>
                  <li onClick={info}>
                    <a href='#'>About</a>
                  </li>
                  <li onClick={info}>
                    <a href='#'>Contact</a>
                  </li>
                </ul>
              </div>
              <div className='wrap-icon-header flex-w flex-r-m'>
                <div
                  className='icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart'
                  data-notify={2}
                  onClick={openCart}
                >
                  <i className='zmdi zmdi-shopping-cart' />
                </div>
                <a
                  href='#'
                  className='icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti'
                  data-notify={0}
                  onClick={info}
                >
                  <i className='zmdi zmdi-favorite-outline' />
                </a>
              </div>
            </nav>
          </div>
        </div>
        <div className='wrap-header-mobile'>
          <div className='logo-mobile'>
            <Link to='/'>
              <img
                src='https://cdn.shopify.com/s/files/1/0002/7600/4882/files/the-bradery-logo_v2.svg?v=1625224912'
                alt='IMG-LOGO'
                width={135}
              />
            </Link>
          </div>
          <div className='wrap-icon-header flex-w flex-r-m m-r-15'>
            <div
              className='icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti js-show-cart'
              data-notify={2}
            >
              <i className='zmdi zmdi-shopping-cart' />
            </div>
            <a
              href='#'
              className='dis-block icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti'
              data-notify={0}
              onClick={info}
            >
              <i className='zmdi zmdi-favorite-outline' />
            </a>
          </div>
          <div
            className='btn-show-menu-mobile hamburger hamburger--squeeze'
            onClick={openMobileMenu}
          >
            <span className='hamburger-box'>
              <span className='hamburger-inner' />
            </span>
          </div>
        </div>
        <div
          className='menu-mobile'
          style={{ display: !isOpenMobileMenu ? "none" : "block" }}
        >
          <ul className='main-menu-m'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/search'>Search</Link>
            </li>

            <li onClick={info}>
              <a href='#'>Blog</a>
            </li>
            <li onClick={info}>
              <a href='#'>About</a>
            </li>
            <li onClick={info}>
              <a href='#'>Contact</a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
