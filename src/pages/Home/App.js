import React from 'react';
import './App.css';
import Menu from '../../components/Menu'; //'./components/Menu';
import dadosIniciais from '../../data/dados_iniciais.json'; //'./data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain'; //'./components/BannerMain';
import Carousel from '../../components/Carousel'; //'./components/Carousel';
import Footer from '../../components/Footer'; //'./components/Footer';

function Home() {
  //antes era App alterei para Home do exemplo
  return (
    <div style={{ background: '#141414' }}>
      <Menu />
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={'oque é?'}
      />

      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[0]} />

      <Footer />
    </div>
  );
}

export default Home;
