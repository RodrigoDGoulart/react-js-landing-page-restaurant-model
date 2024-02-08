import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";

import config from "../../config.json";

import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <>
      <div
        style={{
          color: "white",
          backgroundColor: "#3bb100",
          textAlign: "center",
          fontSize: "1em",
          paddingBlock: "8px",
          fontFamily: 'sans-serif'
        }}
      >
        Gostou do modelo? Entre em contato conosco para fazer o seu! Contato:{" "}
        {`(12) 98810-7549`}
      </div>
      <nav
        className="app__navbar"
        style={{ background: config.cores.fundo_menu }}
      >
        <div className="app__navbar-logo">
          <img src={images.gericht} alt="app__logo" />
        </div>
        <ul className="app__navbar-links">
          {config.links_menu.map((item) => (
            <li
              className="p__opensans"
              key={item.url}
              style={{ color: config.cores.txt_menu }}
            >
              <a href={item.link}>{item.label}</a>
            </li>
          ))}
        </ul>
        <div className="app__navbar-smallscreen">
          <GiHamburgerMenu
            color={config.cores.txt_menu}
            fontSize={27}
            onClick={() => setToggleMenu(true)}
          />
          {toggleMenu && (
            <div
              className="app__navbar-smallscreen_overlay flex__center slide-bottom"
              style={{ background: config.cores.fundo_menu }}
            >
              <MdOutlineRestaurantMenu
                fontSize={27}
                className="overlay__close"
                onClick={() => setToggleMenu(false)}
              />
              <ul className="app__navbar-smallscreen_links">
                {config.links_menu.map((item) => (
                  <li>
                    <a
                      href={item.link}
                      onClick={() => setToggleMenu(false)}
                      style={{ color: config.cores.txt_menu }}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
