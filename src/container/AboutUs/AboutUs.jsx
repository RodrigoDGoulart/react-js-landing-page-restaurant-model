import React from "react";

import { images } from "../../constants";
import "./AboutUs.css";

import config from '../../config.json';

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="sobre"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant" style={{color: config.cores.principal}}>
          {config.titulo_1_secao_2}
        </h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans" style={{color: config.cores.terciaria}}>
          {config.txt_1_secao_2}
        </p>
        {config.btn_1_secao_2.visivel ? (
          <button 
            type="button" 
            className="custom__button"
            style={{backgroundColor: config.cores.fundo_botao, color: config.cores.txt_botao}}
          >
            {config.btn_1_secao_2.txt}
          </button>
        ) : <></>}
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant" style={{color: config.cores.principal}}>{config.titulo_2_secao_2}</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans" style={{color: config.cores.terciaria}}>
          {config.txt_2_secao_2}
        </p>
        {config.btn_2_secao_2.visivel ? (
          <button 
            type="button" 
            className="custom__button"
            style={{backgroundColor: config.cores.fundo_botao, color: config.cores.txt_botao}}
          >
            {config.btn_2_secao_2.txt}
          </button>
        ) : <></>}
      </div>
    </div>
  </div>
);

export default AboutUs;
