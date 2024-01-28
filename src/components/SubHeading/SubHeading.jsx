import React from "react";

import { images } from "../../constants";

import config from '../../config.json';

const SubHeading = ({ title }) => (
  <div style={{ marginBottom: "1rem" }}>
    <p className="p__cormorant" style={{ color: config.cores.secundaria}}>{title}</p>
    <img src={images.spoon} alt="spoon_image" className="spoon__img" />
  </div>
);

export default SubHeading;