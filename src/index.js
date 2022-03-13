import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";

import App from "./app/App";
import store from "./app/store";
import Cart from "./components/cart/cart";

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline>
      <Provider store={store}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes >
            <Route path="/" element={<App />} />
            <Route path="cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </CssBaseline>
  </React.StrictMode>,
  document.getElementById("root")
);
