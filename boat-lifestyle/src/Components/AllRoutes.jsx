import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home/Home";
import { Login } from "./Login-Register/Login";
import { Register } from "./Login-Register/Register";
import { OfferZone } from "./Pages/OfferZone";
import { SailWithboAt } from "./Pages/SailwithBoat2";

export function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account/register" element={<Register />} />
        <Route path="/offerZone" element={<OfferZone />} />
        <Route path="/sailwithboAt" element={<SailWithboAt />} />
      </Routes>
    </div>
  );
}
