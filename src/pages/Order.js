import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/userSlice";
import { timestampToStringDate } from "../utils/HelperFunctions";
import axios from "axios";

const Order = () => {
  const [allOrdersByUser, setAllOrdersByUser] = useState([]);

  const user = useSelector(selectUser);

  useEffect(() => {
    if (user)
      axios.get(`/public/getAllPaymentsByUser/${user.id}`).then((res) => {
        setAllOrdersByUser(res.data);
      });
  }, [user]);

  return (
    <>
      <Header />
      <div className='container' style={{ marginTop: "100px" }}>
        <div className='bread-crumb flex-w p-l-25 p-r-15 p-t-30 p-lr-0-lg'>
          <Link to='/' className='stext-109 cl8 hov-cl1 trans-04'>
            Home
            <i className='fa fa-angle-right m-l-9 m-r-10' aria-hidden='true' />
          </Link>
          <span className='stext-109 cl4'> my orders </span>
        </div>
      </div>
      <form className='bg0 p-t-75 p-b-85'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 col-xl-12 m-lr-auto m-b-50'>
              <div className='m-l-25 m-r--38 m-lr-0-xl'>
                <div className='wrap-table-shopping-cart'>
                  <table className='table-shopping-cart'>
                    <tbody>
                      <tr className='table_head'>
                        <th className='column-1'>Order</th>
                        <th className='column-2'>Created At</th>
                        <th className='column-5'>Total</th>
                      </tr>
                      {user &&
                        allOrdersByUser?.map((order, index) => {
                          return (
                            <tr className='table_row' key={index}>
                              <td className='column-1'>
                                <div className='how-itemcart1'>
                                  TheBY_{order.id}
                                </div>
                              </td>
                              <td className='column-2'>
                                {timestampToStringDate(order.createdAt)}
                              </td>

                              <td className='column-5'>${order.totalPrice}</td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <Footer />
    </>
  );
};

export default Order;
