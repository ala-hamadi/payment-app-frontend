import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import productImg from "../assets/images/product.jpg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, updateCart } from "../redux/userSlice";
import { notify } from "../utils/HelperFunctions";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const Payment = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [cart, setCart] = useState([]);
  const dispatch = useDispatch();

  const user = useSelector(selectUser);
  useEffect(() => {
    if (user?.cart) {
      let cart = [];

      user?.cart?.forEach((product) => {
        cart.push({ ...product, quantity: 1 });
      });
      setCart(cart);
    }
  }, [user]);
  useEffect(() => {
    if (cart) {
      let total = 0;

      cart?.forEach((product) => {
        total += product.price * product.quantity;
      });

      setTotalPrice(total);
    }
  }, [cart]);
  const addQuantity = (product) => {
    const productIndex = cart.findIndex(
      (productCart) => productCart.id === product.id
    );

    if (productIndex !== -1) {
      setCart((prevCart) => {
        const updatedCart = [...prevCart];
        if (
          updatedCart[productIndex].quantity + 1 >
          updatedCart[productIndex].inventory
        ) {
          notify(
            "It is not possible to add more quantity than inventory.",
            toast,
            "info"
          );
          return updatedCart;
        }
        updatedCart[productIndex].quantity += 1;
        return updatedCart;
      });
    }
  };
  const removeQuantity = (product) => {
    const productIndex = cart.findIndex(
      (productCart) => productCart.id === product.id
    );

    if (productIndex !== -1) {
      setCart((prevCart) => {
        const updatedCart = [...prevCart];
        if (updatedCart[productIndex].quantity - 1 === 0) {
          notify("It is not possible to do 0 quantity.", toast, "info");
          return updatedCart;
        }
        updatedCart[productIndex].quantity -= 1;
        return updatedCart;
      });
    }
  };
  const handlePayment = (e) => {
    e.preventDefault();
    const payment = {
      totalPrice: totalPrice,
      user: {
        id: user.id,
        email: user.email,
      },
    };
    console.log(payment);
    axios
      .post("/public/addPayment", payment)
      .then((res) => {
        if (res.data !== "FOUND" && res.data !== "BAD_REQUEST") {
          notify("Your payment has been registered.", toast, "success");
        }
        axios.put("/public/decreaseQuantityInProducts", cart).then(() => {
          console.log("Updated");
          axios.put(`/public/removeAllProductsFromCart/${user.id}`).then(() => {
            setCart([]);
            const updatedUser = { ...user, cart: [] };
            dispatch(updateCart(updatedUser));
          });
        });
      })
      .catch(() => {
        notify("error.", toast, "error");
      });
  };
  useEffect(() => {
    if (!user) window.location.href = "/";
  }, []);

  return (
    <>
      <ToastContainer />
      <Header />
      <div className='container' style={{ marginTop: "100px" }}>
        <div className='bread-crumb flex-w p-l-25 p-r-15 p-t-30 p-lr-0-lg'>
          <Link to='/' className='stext-109 cl8 hov-cl1 trans-04'>
            Home
            <i className='fa fa-angle-right m-l-9 m-r-10' aria-hidden='true' />
          </Link>
          <span className='stext-109 cl4'> Shoping Cart </span>
        </div>
      </div>
      <form className='bg0 p-t-75 p-b-85'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-10 col-xl-7 m-lr-auto m-b-50'>
              <div className='m-l-25 m-r--38 m-lr-0-xl'>
                <div className='wrap-table-shopping-cart'>
                  <table className='table-shopping-cart'>
                    <tbody>
                      <tr className='table_head'>
                        <th className='column-1'>Product</th>
                        <th className='column-2' />
                        <th className='column-3'>Price</th>
                        <th className='column-4'>Quantity</th>
                        <th className='column-5'>Total</th>
                      </tr>
                      {user &&
                        cart?.map((product, index) => {
                          return (
                            <tr className='table_row' key={index}>
                              <td className='column-1'>
                                <div className='how-itemcart1'>
                                  <img src={productImg} alt='IMG' />
                                </div>
                              </td>
                              <td className='column-2'>{product.name}</td>
                              <td className='column-3'>{product.price}</td>
                              <td className='column-4'>
                                <div className='wrap-num-product flex-w m-l-auto m-r-0'>
                                  <div
                                    className='btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m'
                                    onClick={() => removeQuantity(product)}
                                  >
                                    <i className='fs-16 zmdi zmdi-minus' />
                                  </div>
                                  <input
                                    className='mtext-104 cl3 txt-center num-product'
                                    type='number'
                                    name='num-product1'
                                    value={product.quantity}
                                  />
                                  <div
                                    className='btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m'
                                    onClick={() => addQuantity(product)}
                                  >
                                    <i className='fs-16 zmdi zmdi-plus' />
                                  </div>
                                </div>
                              </td>
                              <td className='column-5'>
                                ${" "}
                                {(product.price * product.quantity).toFixed(2)}
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className='col-sm-10 col-lg-7 col-xl-5 m-lr-auto m-b-50'>
              <div className='bor10 p-lr-40 p-t-30 p-b-40 m-l-63 m-r-40 m-lr-0-xl p-lr-15-sm'>
                <h4 className='mtext-109 cl2 p-b-30'>Cart Totals</h4>

                <div className='flex-w flex-t p-t-27 p-b-33'>
                  <div className='size-208'>
                    <span className='mtext-101 cl2'> Total: </span>
                  </div>
                  <div className='size-209 p-t-1'>
                    <span className='mtext-110 cl2'>
                      {" "}
                      ${totalPrice.toFixed(2)}{" "}
                    </span>
                  </div>
                </div>
                <button
                  className='flex-c-m stext-101 cl0 size-116 bg3 bor14 hov-btn3 p-lr-15 trans-04 pointer'
                  onClick={handlePayment}
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
      <Footer />
    </>
  );
};

export default Payment;
