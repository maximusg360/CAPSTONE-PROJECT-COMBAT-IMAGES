import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import EditCardForm from "./EditCardForm";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header className=" bg-opacity-85 bg-black text-white">
        <nav className="relative flex items-center  p-4">
          <div className="container  justify-between items-center">
            <div className="text-white text-3xl font-extrabold h-14">Combat Images</div>
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={
                      isOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  ></path>
                </svg>
              </button>
            </div>
            <ul
              className={`nav-menu md:flex md:items-center  ${
                isOpen ? "block" : "hidden"
              }`}
            >
              <li className="nav-item space-x-48">
                <Link
                  to="/"
                  className="nav-link p-1 m-24 text-white hover:text-gray-600"
                  onClick={closeMenu}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/About"
                  className="nav-link p-1 m-24 text-white hover:text-gray-600"
                  onClick={closeMenu}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/Gallery"
                  className="nav-link p-1 m-24 text-white hover:text-gray-600"
                  onClick={closeMenu}
                >
                  Gallery
                  </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/Create"
                  className="nav-link p-1 m-24 text-white hover:text-gray-600"
                  onClick={closeMenu}
                >
                  Create
                  </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/SignUp"
                  className="nav-link p-1 m-24 text-white hover:text-gray-600"
                  onClick={closeMenu}
                >
                  SignUp
                  </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
