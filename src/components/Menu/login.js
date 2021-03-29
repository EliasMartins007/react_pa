import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import '../Menu/Menu.css'; //'./Menu.css';
//import ButtonLink from '../ButtonLink';
///import Button from '../Button'; 28/03/2021

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Logo" />
      </Link>
    </nav>
  );
}
export default Menu;
