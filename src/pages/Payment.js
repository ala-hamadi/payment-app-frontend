import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import productImg from "../assets/images/product.jpg";
import { Link } from "react-router-dom";
const Payment = () => {
  return (
    <>
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
                      <tr className='table_row'>
                        <td className='column-1'>
                          <div className='how-itemcart1'>
                            <img src={productImg} alt='IMG' />
                          </div>
                        </td>
                        <td className='column-2'>Fresh Strawberries</td>
                        <td className='column-3'>$ 36.00</td>
                        <td className='column-4'>
                          <div className='wrap-num-product flex-w m-l-auto m-r-0'>
                            <div className='btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m'>
                              <i className='fs-16 zmdi zmdi-minus' />
                            </div>
                            <input
                              className='mtext-104 cl3 txt-center num-product'
                              type='number'
                              name='num-product1'
                              defaultValue={1}
                            />
                            <div className='btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m'>
                              <i className='fs-16 zmdi zmdi-plus' />
                            </div>
                          </div>
                        </td>
                        <td className='column-5'>$ 36.00</td>
                      </tr>
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
                    <span className='mtext-110 cl2'> $79.65 </span>
                  </div>
                </div>
                <button className='flex-c-m stext-101 cl0 size-116 bg3 bor14 hov-btn3 p-lr-15 trans-04 pointer'>
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
