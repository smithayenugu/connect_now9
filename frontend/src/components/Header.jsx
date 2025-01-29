import React from "react";
// import { useNavigate } from "react-router-dom";

const Header = ({ setSelectedTab }) => {
  return (
    <header className="p-3 text-bg-dark" style={{ width: "100%" }}>
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            <svg
              className="bi me-2"
              width="40"
              height="32"
              role="img"
              aria-label="Bootstrap"
            >
              <use xlinkHref="#bootstrap"></use>
            </svg>
          </a>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li
              onClick={() => {
                setSelectedTab("Home");
              }}
            >
              <a href="#" className="nav-link px-2 text-white">
                Home
              </a>
            </li>
            <li
              onClick={() => {
                setSelectedTab("Posts");
              }}
            >
              <a href="#" className="nav-link px-2 text-white">
                Posts
              </a>
            </li>
            <li
              onClick={() => {
                setSelectedTab("Create Post");
              }}
            >
              <a href="#" className="nav-link px-2 text-white">
                Create Post
              </a>
            </li>
            <li
              onClick={() => {
                setSelectedTab("Chat");
              }}
            >
              <a href="#" className="nav-link px-2 text-white">
                Chat
              </a>
            </li>
          </ul>

          <div className="text-end">
            <button
              type="button"
              className="btn btn-outline-light me-2"
              onClick={() => {
                setSelectedTab("Login");
              }}
            >
              Login
            </button>
            <button
              type="button"
              className="btn btn-outline-light me-2"
              onClick={() => {
                setSelectedTab("SignUp");
              }}
            >
              Sign-up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
