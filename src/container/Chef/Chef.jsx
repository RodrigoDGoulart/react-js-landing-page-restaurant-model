import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";

import config from '../../config.json';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title={config.chef_subtitulo} />
      <h1 className="headtext__cormorant" style={{color: config.cores.principal}}>
        {config.chef_titulo}
      </h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <p className="p__opensans" style={{color: config.cores.secundaria}}>
            {config.chef_txt}
          </p>
        </div>
      </div>

      <div className="app__chef-sign">
        <p style={{color: config.cores.principal}}>
          {config.chef_nome}
        </p>
        <p className="p__opensans" style={{color: config.cores.secundaria}}> 
          {config.chef_cargo}
        </p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;
