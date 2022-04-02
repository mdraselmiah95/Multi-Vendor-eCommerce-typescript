import axios from "axios";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../home/Home";

// const Home = React.lazy(() => import("../home/Home"));
//code-splitting

// axios.get("https//api.google.com/products")

export const Main = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={{}} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
