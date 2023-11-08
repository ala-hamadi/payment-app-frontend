import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { notify } from "../utils/HelperFunctions";

const Header = (props) => {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  const info = () => {
    notify("Not required for testing 😜", toast, "info");
  };
  const openMobileMenu = () => {
    setIsOpenMobileMenu(!isOpenMobileMenu);
  };
  return (
    <>
      <ToastContainer />

      <header className='header-v4'>
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
