import React from "react";
import logo from "../../../assets/icons/daraz-logo.png";
import logoOne from "../../../assets/images/logoOne.png";

export const Header = () => {
  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-between py-5">
        <div>
          <img
            src={logo}
            alt="logo"
            style={{
              width: "135px",
              height: "41px",
            }}
          />
        </div>
        <div className="flex items-center">
          <input
            type="text"
            name=""
            id=""
            className="py-3 rounded-l px-52 bg-colorOne"
            placeholder="Search Product"
          />
          <span className="p-3 rounded-r cursor-pointer bg-colorTwo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </span>
        </div>
        <div>
          <img
            src={logoOne}
            alt=""
            style={{
              width: "188px",
              height: "45px",
            }}
          />
        </div>
      </div>
    </div>
  );
};
