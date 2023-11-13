import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { notify } from "../utils/HelperFunctions";
import productImg from "../assets/images/product.jpg";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser, updateCart } from "../redux/userSlice";
import axios from "axios";
const Header = (props) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  console.log(user);

  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [isOpenLogout, setIsOpenLogout] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

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
  const toogleOpenLogout = () => {
    setIsOpenLogout(!isOpenLogout);
  };
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    delete axios.defaults.headers.common["Authorization"];
    dispatch(logout());
  };

  const handleRemoveProductFromCart = (product) => {
    axios
      .put(`/public/removeProductFromCart/${user.id}/${product.id}`)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          dispatch(updateCart(res.data));
          notify(
            "this product has been removed from your cart.",
            toast,
            "info"
          );
        }
      });
  };
  useEffect(() => {
    if (user?.cart) {
      let total = 0;
      user?.cart?.forEach((product) => {
        total += product.price;
      });
      setTotalPrice(total);
    }
  }, [user]);
  const clearCart = () => {
    if (user)
      axios.put(`/public/removeAllProductsFromCart/${user.id}`).then(() => {
        const updatedUser = { ...user, cart: [] };
        dispatch(updateCart(updatedUser));
      });
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
            {console.log(user?.cart)}
            <ul className='header-cart-wrapitem w-full'>
              {user &&
                user?.cart?.map((product, index) => {
                  return (
                    <li className='header-cart-item flex-w flex-t m-b-12'>
                      <div className='header-cart-item-img'>
                        <img src={productImg} alt='IMG' />
                      </div>
                      <div className='header-cart-item-txt p-t-8'>
                        <span
                          href='#'
                          className='header-cart-item-name m-b-18 hov-cl1 trans-04'
                        >
                          {product.name}
                          <span
                            className='fs-20 lh-10 cl2 p-lr-5 pointer hov-cl1 trans-04 js-hide-cart'
                            onClick={() => handleRemoveProductFromCart(product)}
                          >
                            <i className='zmdi zmdi-close' />
                          </span>
                        </span>
                        <span className='header-cart-item-info'>
                          {product.price}
                        </span>
                      </div>
                    </li>
                  );
                })}
            </ul>
            <div className='w-full'>
              <div className='header-cart-total w-full p-tb-40'>
                Total: ${totalPrice.toFixed(2)}
              </div>
              <div className='header-cart-buttons flex-w w-full'>
                <Link
                  to={user ? "/payment" : "/join-us"}
                  className='flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-r-8 m-b-10'
                >
                  View Cart
                </Link>
                <a
                  href='#'
                  className='flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-b-10'
                  onClick={clearCart}
                >
                  Clearn Cart
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
                  data-notify={user ? user?.cart?.length : 0}
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

                <div
                  className='icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11  js-show-cart'
                  onClick={toogleOpenLogout}
                >
                  <i
                    className={
                      user ? "zmdi zmdi-account" : "zmdi zmdi-account-add"
                    }
                  />
                </div>

                <ul
                  className='sub-menu'
                  style={{
                    visibility: isOpenLogout ? "visible" : "hidden",
                    opacity: isOpenLogout ? 1 : 0,
                    top: "100%",
                    left: "80%",
                  }}
                >
                  {user ? (
                    <>
                      <li>
                        <a href='#'>Hi, {user.username} 👋</a>
                      </li>
                      <li>
                        <a
                          href='#'
                          onClick={() => {
                            handleLogout(dispatch);
                            window.location.href = "/";
                          }}
                        >
                          Logout
                        </a>
                      </li>
                    </>
                  ) : (
                    <li>
                      <Link to='/join-us'>Login</Link>
                    </li>
                  )}
                </ul>
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
