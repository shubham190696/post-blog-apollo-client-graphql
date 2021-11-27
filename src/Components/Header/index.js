import React from "react";
import { useMatch, useNavigate } from "react-router";
import { NavLink } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  let match = useMatch({ path: "/", end: true });
  return (
    <header className="h-12 flex flex-row items-center justify-between p-10 shadow-2xl ">
      <div>
        <img
          src="https://i.pinimg.com/474x/91/2c/90/912c90c39694bdaa6445548de93dffeb.jpg"
          width="100px"
          height="40px"
          alt="logo"
        />
      </div>
      <div>
        <nav className="text-gray-500">
          <NavLink to="/" className={match ? "underline text-indigo-500" : "no-underline"}>
            Home
          </NavLink>
        </nav>
      </div>
      <div>
        <button
          onClick={() => navigate("/new-post")}
          className="bg-indigo-500 hover:bg-indigo-400 active:bg-indigo-700 p-2 rounded text-white"
        >
          Create New Post
        </button>
      </div>
    </header>
  );
}

export default Header;
