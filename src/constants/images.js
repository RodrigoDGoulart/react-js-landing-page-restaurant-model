import bg from '../assets/bg.png';
import overlaybg from '../assets/overlaybg.png';

import config from '../config.json';

const obj = {
  bg,
  chef: require(`../assets/${config.imgs.chef_foto}`),
  G: require(`../assets/${config.imgs.fundo_secao_2}`),
  knife: require(`../assets/${config.imgs.divisao_secao_2}`),
  logo: require(`../assets/logo.png`),
  menu: require(`../assets/${config.imgs.meio_menu}`),
  overlaybg,
  spoon: require(`../assets/${config.imgs.detalhe_subtitulos}`),
  welcome: require(`../assets/${config.imgs.principal}`),
  findus: require(`../assets/${config.imgs.infos_img}`),
  sign: require(`../assets/${config.imgs.chef_assinatura}`),
  gericht: require(`../assets/${config.imgs.logo_nome_img}`),
};

export default obj;