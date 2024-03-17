import React, { useState} from 'react';
import '../Css/FrameOne.css'; // Подключаем стили
import Logo from '../Photo/Logo.png'; // Путь к изображению логотипа
import Coffee from '../Photo/CoffeCup.png'
import zernomal from '../Photo/klipartz 4.png'
import zernomal2 from '../Photo/klipartz 5.png'
import zernomal3 from '../Photo/klipartz 1.png'
import zernomal4 from '../Photo/klipartz 2.png'
import zernomal5 from '../Photo/klipartz 3.png'
import vector from '../Photo/Vector.png'
import togle from '../Photo/Component 15.png'
import MutnoeOdin from '../Photo/klipartz 6 (1).png'
import MutnoeDva from '../Photo/klipartz 7 (1).png'

export const FrameOne = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState); // Исправлено для корректного переключения состояния
  };

  const navigateToSection = (sectionId) => {
    // Ищем элемент по id
    const section = document.getElementById(sectionId);
    if (section) {
      // Перемещаемся к элементу
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="frame-one-container">
      <img id='zernomal1' src={zernomal} alt="" />
      <img id='zernomal2' src={zernomal2} alt="" />
      <img id='zernomal3' src={zernomal3} alt="" />
      <img id='zernomal4' src={zernomal4} alt="" />
      <img id='zernomal5' src={zernomal5} alt="" />
      {/* <img id='mutnoe1' src={MutnoeOdin} alt="Мутное1" />
      <img id='mutnoe2' src={MutnoeDva} alt="Мутное2" /> */}
      <div className="navbar">
  <button className="menu-button" onClick={toggleMenu}>
    <img src={togle} alt="" />
  </button>
  <img id='logo-desktop' src={Logo} alt="Логотип" className="logo"/>
  <div id='linki-linki' className={`links ${menuOpen ? 'open' : ''}`}>
    <a href="#About-us-frame">About Us</a>
    <a href="#Coffee-beans">Coffee beans</a>
    <a href="#reserve">Reserve</a>
    <a href="#contact-us-footer">Contact us</a>
  </div>
  
  <a href="" className="language-switch">EN</a>
</div>

      <div className='Content-one'>
        <div className='text-one'>
          <h1>Find comfort <br /> over a cup <br /> of our coffee</h1>
          <p>The taste of the coffee is wonderful, but <br /> 
          incomprehensible. You have to learn to <br /> 
          understand and love it, and only then <br /> 
          can you truly enjoy it to the fullest.</p>
          <button onClick={() => navigateToSection('Coffee-beans')}>
            Explore our coffee <img id='vector' src={vector} alt="" /></button>
        </div>
        <div className='Content-img'>
        <img id='coffeCup' src={Coffee} alt="КоффеБольшое" />
        </div>
      </div>
    </div>
  );
}
