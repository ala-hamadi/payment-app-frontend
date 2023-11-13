import React, { Suspense, useEffect } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Payment from "./pages/Payment";
import Search from "./pages/Search";
import "react-toastify/dist/ReactToastify.css";
import Authentication from "./pages/Authentication";
import axios from "axios";
import { useDispatch } from "react-redux";
import jwtDecode from "jwt-decode";
import { login, logout } from "./redux/userSlice";
import Order from "./pages/Order";

axios.defaults.baseURL = "http://localhost:8080";

function App() {
  const dispatch = useDispatch();
  //if we still have the token, we should dispatch the login again to get the user's information in case the user refreshes the page.
  //if we don't have the token, we just logout and remove the token from local storage
  useEffect(() => {
    const token = localStorage.authToken;
    if (token) {
      const decodeToken = jwtDecode(token);
      if (decodeToken.exp * 1000 > Date.now()) {
        axios.get(`/public/getUserByEmail/${decodeToken.sub}`).then((res) => {
          dispatch(
            login({
              id: res.data.id,
              username: res.data.username,
              email: res.data.email,
              cart: res.data.cart,
            })
          );
        });
      } else {
        localStorage.removeItem("authToken");
        delete axios.defaults.headers.common["Authorization"];
        dispatch(logout());
      }
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path='/'
          element={
            <Suspense>
              <Home />
            </Suspense>
          }
        />
        <Route
          exact
          path='/search'
          element={
            <Suspense>
              <Search />
            </Suspense>
          }
        />
        <Route
          exact
          path='/payment'
          element={
            <Suspense>
              <Payment />
            </Suspense>
          }
        />
        <Route
          exact
          path='/join-us'
          element={
            <Suspense>
              <Authentication />
            </Suspense>
          }
        />
        <Route
          exact
          path='/my-orders'
          element={
            <Suspense>
              <Order />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
