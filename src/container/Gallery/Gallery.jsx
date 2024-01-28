import React from "react";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";

import { SubHeading } from "../../components";
import "./Gallery.css";

import config from '../../config.json';

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="app__gallery flex__center" style={{background: config.cores.fundo}} id='galeria'>
      <div className="app__gallery-content">
        <SubHeading title={config.galeria_subtitulo} />
        <h1 className="headtext__cormorant" style={{color: config.cores.principal}}>
          {config.galeria_titulo}
        </h1>
        <p
          className="p__opensans"
          style={{ color: config.cores.terciaria, marginTop: "2rem" }}
        >
          {config.galeria_txt}
        </p>
        <a 
          href={config.galeria_link}
          rel="noreferrer" 
          target="_blank" 
          className="custom__button"
          style={{
            backgroundColor: config.cores.fundo_botao, 
            color: config.cores.txt_botao
          }}
        >
          {config.galeria_btn}
        </a>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {config.galeria_data.map((item, index) => (
            <a href={item.link_url} target="_blank" rel='noreferrer'>
              <div
                className="app__gallery-images_card flex__center"
                key={`gallery_image-${index + 1}`}
                >
                <img src={item.img_url} alt="gallery_image" />
                <BsInstagram className="gallery__image-icon" />
              </div>
            </a>
          ))}
        </div>
        {config.galeria_data.length > 3 ? (
          <div className="app__gallery-images_arrows">
            <BsArrowLeftShort
              className="gallery__arrow-icon"
              onClick={() => scroll("left")}
              style={{
                backgroundColor: config.cores.fundo_botao, 
                color: config.cores.txt_botao
              }}
            />
            <BsArrowRightShort
              className="gallery__arrow-icon"
              onClick={() => scroll("right")}
              style={{
                backgroundColor: config.cores.fundo_botao, 
                color: config.cores.txt_botao
              }}
            />
          </div>
        ) : <></>}
      </div>
    </div>
  );
};

export default Gallery;
