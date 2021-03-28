import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/Logo.png';

function Footer() {
  return (
    <FooterBase>
      <img className="Logo" src={Logo} alt="Logo" />
      <p>Realizado para o PA do IGTI </p>
      2021 TODOS OS DIREITO RESERVADOS
      <address>e-mail teste@gmail.com</address>
    </FooterBase>
  );
}

export default Footer;
