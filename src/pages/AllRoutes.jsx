import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./Cart";
import AdminPage from "./AdminPage";
import CompanyOneC from "./CompanyOneC";
import ServicesOneC from "./ServicesOneC";
import Homepage from "./Homepage";
import ProcessingOneC from "./ProcessingOneC";
import Singleproduct from "./Singleproduct";
import SignIn from "./SignIn";
import Signup from "./Signup";
import Address from "./AddressPage";
import PaymentPage from "./Payment";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/adminPage" element={<AdminPage />} />

      <Route path="/" element={<Homepage />} />
      <Route path="/company" element={<CompanyOneC />} />
      <Route path="/services" element={<ServicesOneC />} />
      <Route path="/processing" element={<ProcessingOneC />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/company/singleproduct" element={<Singleproduct />} />
      <Route path="/services/singleproduct" element={<Singleproduct />} />
      <Route path="/processing/singleproduct" element={<Singleproduct />} />

      <Route path="/cart" element={<Cart />} />
      <Route path="/address" element={<Address />} />
      <Route path="/payment" element={<PaymentPage />} />
    </Routes>
  );
};
export default AllRoutes;
// <Route path="/singleproduct/:id"  element={<SingleProduct />} />
//check
