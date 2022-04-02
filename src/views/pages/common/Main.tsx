import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../home/Home";

//code-splitting
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
