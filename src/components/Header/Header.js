import React from "react";
import "./Header.scss";

// rafce
const Header = () => {
  return (
    <div className="topnav">
      <a href="/" className="active">
        Home
      </a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <a href="/about">About</a>
    </div>
  );
};

export default Header;
