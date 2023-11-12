import React, { Suspense } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Payment from "./pages/Payment";
import Search from "./pages/Search";
import "react-toastify/dist/ReactToastify.css";
import Authentication from "./pages/Authentication";

function App() {
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
