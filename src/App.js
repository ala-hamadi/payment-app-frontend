import React, { Suspense } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
