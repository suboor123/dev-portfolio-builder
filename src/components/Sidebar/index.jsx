import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({user}) => {
  return (
    <header className="site-header bg-primary">
      <div className="header-inner">
        <div className="header-brand">
          {/* Logo */}
          <a href="home-1-light-background.html#" className="logo">
            <span>{user.username}</span>
            <span className="title-letter">{user.username[0]}</span>
          </a>
        </div>
        <div className="nav-divider mb-8" />
        <nav className="site-nav">
          <ul id="navigation">
            <li>
              <Link to={"/"} className="scrollto">
                Home
              </Link>
            </li>
            <li>
              <Link to={"/portfolio"} className="scrollto">
                Portfolio
              </Link>
            </li>
            <li>
              <Link to={"/blog"} className="scrollto">
                Blog
              </Link>
            </li>
            <li>
              <Link to={"/contact"} className="scrollto">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="nav-divider my-8" />
        <nav>
          <ul className="list-inline text-center">
            <li className="list-inline-item">
              <a
                className="btn btn-sm btn-icon btn-outline-white border-0 rounded-circle"
                href="home-1-light-background.html#"
              >
                <span className="btn-icon-inner fab fa-facebook-f" />
              </a>
            </li>
            <li className="list-inline-item">
              <a
                className="btn btn-sm btn-icon btn-outline-white border-0 rounded-circle"
                href="home-1-light-background.html#"
              >
                <span className="btn-icon-inner fab fa-instagram" />
              </a>
            </li>
            <li className="list-inline-item">
              <a
                className="btn btn-sm btn-icon btn-outline-white border-0 rounded-circle"
                href="home-1-light-background.html#"
              >
                <span className="btn-icon-inner fab fa-twitter" />
              </a>
            </li>
            <li className="list-inline-item">
              <a
                className="btn btn-sm btn-icon btn-outline-white border-0 rounded-circle"
                href="home-1-light-background.html#"
              >
                <span className="btn-icon-inner fab fa-pinterest" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Sidebar;
