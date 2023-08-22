import React, { useState } from "react";
import "./style.scss";
import { FiExternalLink } from "react-icons/fi";
import { GoThreeBars } from "react-icons/go";
import { GrClose } from "react-icons/gr";
import { Link, useLocation } from "react-router-dom";
export function Header() {
  const path = useLocation().pathname;
  const [isOpenNavbar, setIsOpenNavbar] = useState(false);
  console.log(isOpenNavbar);
  function _handleNavbar() {
    setIsOpenNavbar(!isOpenNavbar);
  }
  return (
    <div className="header_Container">
      <div className="header_Content">
        <div className="header_Logo">
          <img src="https://user-images.githubusercontent.com/59892368/211217236-86d5d9d0-8991-4a65-a29c-60bd65621ced.svg" />
        </div>
        <div className={isOpenNavbar ? "navBar active" : "navBar"}>
          <a className="close_Button" onClick={_handleNavbar}>
            {isOpenNavbar ? <GrClose size={50} /> : ""}
          </a>
          <div className="nav_Options ">
            <Link className={path === "/" ? "nav_Option_Active" : ""} to="/">
              Home
            </Link>
            <Link
              className={path !== "/" ? "nav_Option_Active" : ""}
              to="/documentation/gettingStarted"
            >
              Documentation
            </Link>
          </div>
          <div className="nav_Networks">
            <div className="github">
              <a
                href="https://github.com/DIGOARTHUR/github-automated-repos"
                target="_blank"
              >
                Github
                <FiExternalLink className="icon_Networks" />
              </a>
            </div>
            <div className="npm">
              <a
                href="https://www.npmjs.com/package/github-automated-repos"
                target="_blank"
              >
                NPM
                <FiExternalLink className="icon_Networks" />
              </a>
            </div>
          </div>
        </div>
        <div className="navBar_Icon_Mobile">
          <a onClick={_handleNavbar}>
            {isOpenNavbar ? "" : <GoThreeBars size={50} />}
          </a>
        </div>
      </div>
    </div>
  );
}
