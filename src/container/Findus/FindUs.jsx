import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";

import config from '../../config.json';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="info">
    <div className="app__wrapper_info">
      <SubHeading title={config.infos_subtitulo} />
      <h1 className="headtext__cormorant" style={{ marginBottom: "3rem", color: config.cores.principal }}>
        {config.infos_titulo}
      </h1>
      <div className="app__wrapper-content">
        <p className="p__opensans" style={{color: config.cores.secundaria}}>
          {config.infos_endereco}
        </p>
        <p
          className="p__cormorant"
          style={{ color: config.cores.principal, margin: "2rem 0" }}
        >
          {config.infos_horas_titulo}
        </p>
        {config.infos_horas_infos.map((item, index) => (
          <p
            key={index}
            className="p__opensans"
            style={{color: config.cores.secundaria}}
          >
            {item}
          </p>
        ))}
      </div>
      {config.infos_btn.visivel ? (
        <a
          href={config.infos_btn.link}
          target="_blank"
          rel='noreferrer'
          className="custom__button"
          style={{ 
            marginTop: "2rem",
            background: config.cores.fundo_botao,
            color: config.cores.txt_botao,
          }}
        >
          {config.infos_btn.txt}
        </a>
      ) : <></>}
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;
