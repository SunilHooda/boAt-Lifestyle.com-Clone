import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home/Home";
import { Login } from "./Login-Register/Login";
import { Register } from "./Login-Register/Register";
import { OfferZone } from "./Pages/OfferZone";
import { SailWithboAt } from "./Pages/SailwithBoat2";
import { ViewAll } from "./Pages/ViewAll";
import Checkout from "./Payment/Checkout";
import Otp from "./Payment/otp";
import Payments from "./Payment/payments";
import { ProductDetails } from "./ProductDetail/ProductPage";

export function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account/register" element={<Register />} />
        <Route path="/offerZone" element={<OfferZone />} />
        <Route path="/sailwithboAt" element={<SailWithboAt />} />
        <Route path="/productDetails" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="allProducts" element={<ViewAll />} />
      </Routes>
    </div>
  );
}
