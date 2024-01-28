import React from "react";

import { SubHeading, MenuItem } from "../../components";
import { images } from "../../constants";
import "./SpecialMenu.css";

import config from '../../config.json';

// Лучше перезагрузить локал хост для тяги данных

const SpecialMenu = () => (
  <div 
    className="app__specialMenu flex__center section__padding" 
    id="cardapio"
    style={{background: config.cores.fundo}}
  >
    <div className="app__specialMenu-title">
      <SubHeading title={config.subtitulo_cardapio} />
      <h1 className="headtext__cormorant" style={{color: config.cores.principal}}>
        {config.titulo_cardapio}
      </h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p 
          className="app__specialMenu-menu_heading"
          style={{color: config.cores.secundaria}}
        >
          {config.titulo_cardapio_items_1}
        </p>
        <div className="app__specialMenu_menu_items">
          {config.items_cardapio_1.map((item, index) => (
            <MenuItem
              key={item.titulo + index}
              title={item.titulo}
              price={item.preco}
              tags={item.subtitulo}
            />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu__img" />
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p 
          className="app__specialMenu-menu_heading"
          style={{color: config.cores.secundaria}}
        >
          {config.titulo_cardapio_items_2}
        </p>
        <div className="app__specialMenu_menu_items">
          {config.items_cardapio_2.map((item, index) => (
            <MenuItem
              key={item.titulo + index}
              title={item.titulo}
              price={item.preco}
              tags={item.subtitulo}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default SpecialMenu;
