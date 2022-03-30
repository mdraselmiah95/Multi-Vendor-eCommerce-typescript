import React from "react";
import { Footer } from "./common/Footer";
import { Header } from "./common/Header";

export const TheLayout = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <main>Body</main>
      <div>
        <Footer />
      </div>
    </div>
  );
};
