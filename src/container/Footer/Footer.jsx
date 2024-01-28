import React from "react";
// import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import "./Footer.css";

import config from '../../config.json';

const Footer = () => (
  <div className="app__footer section__padding" id="login" style={{background: config.cores.rodape_fundo}}>
    <div className="app__footer-links">
      <div className="app__footer-links_logo">
        <img src={require(`../../assets/${config.imgs.rodape_logo}`)} alt="footer_logo" />
        <p className="p__opensans" style={{color: config.cores.rodape_txt}}>
          {config.slogan}
        </p>
        <img
          alt='Spoon'
          src={require(`../../assets/${config.imgs.rodape_detalhe}`)}
          className="spoon__img"
          style={{ marginTop: 15 }}
        />
        {/* <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div> */}
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans" style={{color: config.cores.rodape_txt}}>
        {config.direitos}
      </p>
    </div>
  </div>
);

export default Footer;
