import React from "react";

import config from '../../config.json';

import "./MenuItem.css";

// Лучше перезагрузить локал хост для тяги данных

const MenuItem = ({ title, price, tags }) => (
  <div className="app__menuitem">
    <div className="app__menuitem-head">
      <div className="app__menuitem-name">
        <p className="p__cormorant" style={{ color: config.cores.principal }}>
          {title}
        </p>
      </div>
      <div className="app__menuitem-dash" style={{background: config.cores.principal}} />
      <div className="app__menuitem-price">
        <p className="p__cormorant" style={{color: config.cores.secundaria}}>{`R$ ${price}`}</p>
      </div>
    </div>

    <div className="app__menuitem-sub">
      <p className="p__opensans" style={{ color: config.cores.terciaria }}>
        {tags}
      </p>
    </div>
  </div>
);

export default MenuItem;
