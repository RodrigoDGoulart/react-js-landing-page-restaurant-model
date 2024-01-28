import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";

import config from '../../config.json';

import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home" style={{backgroundColor: config.cores.fundo}}>
    <div className="app__wrapper_info">
      <SubHeading title={config.subtitulo} />
      <h1 className="app__header-h1" style={{color: config.cores.principal}}>{config.titulo}</h1>
      <p className="p__opensans" style={{ margin: "2rem 0", color: config.cores.secundaria }}>
        {config.descricao_titulo}{" "}
      </p>
      <a href={config.link_btn} className="custom__button" style={{backgroundColor: config.cores.fundo_botao, color: config.cores.txt_botao}}>
        {config.txt_btn}
      </a>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
