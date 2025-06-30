import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { store } from "./lib/store";
import { Provider } from "react-redux";

import "./index.css";

import HomePage from "./pages/home.page.jsx";
import SignInPage from "./pages/sign-in.page.jsx";
import SignUpPage from "./pages/sign-up.page.jsx";
import ShopPage from "./pages/shop.page.jsx";
import RootLayout from "./layouts/root.layout.jsx";
import CartPage from "./pages/cart.page";
import CheckoutPage from "./pages/checkout.page";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop">
              <Route path=":category" element={<ShopPage />} />
              <Route path="cart" element={<CartPage />} />
              <Route path="checkout" element={<CheckoutPage />} />
            </Route>
          </Route>
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
