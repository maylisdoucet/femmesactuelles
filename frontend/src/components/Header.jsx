import React from 'react';
import './Header.css';


const Header = () => {
  return (
    <div className="Header">
      <ul>
        <li className="Titre"><a href="/">femmes actuelles</a></li>
        <li><a href="/films">films</a></li>
        <li><a href="/finds">finds</a></li>
        <li><a href="/critics">critics</a></li>
        <li><a href="/cities">sees</a></li>
        <li><a href="/asks">asks</a></li>
      </ul>
    </div>
  )
}
 
export default Header;