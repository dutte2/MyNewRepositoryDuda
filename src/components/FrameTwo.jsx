import React, { useState, useEffect } from 'react';
import '../Css/FrameTwo.css';
import moneykrona from '../Photo/kronamoney.png'
import pravo from '../Photo/krugright.png';
import vector from '../Photo/Vector.png';
import krujkaOne from '../Photo/krujka1.png';
import kofe from '../Photo/cans_ina_air 1.png';
import kofe2 from '../Photo/double espresso.png'
import kofe3 from '../Photo/Americano.png'
import kofe4 from '../Photo/Lungo 1.png'
import kofe5 from '../Photo/Espresso Macchiatto 1.png'
import kofe6 from '../Photo/Flat white 1.png'
import kofe7 from '../Photo/Cappucino 1.png'
import kofe8 from '../Photo/Latte 1.png'
import kofe9 from '../Photo/sssss.png'
import kofe10 from '../Photo/Raf 1.png'
import kofe11 from '../Photo/Irish Coffee 1.png'
import kofe12 from '../Photo/Batch brew 1.png'

export const FrameTwo = () => {
  const [offsetY, setOffsetY] = useState(0);
    const isDesktop = window.innerWidth >= 768; // Пороговое значение для мобильных устройств

    const handleScroll = () => {
      if (isDesktop) {
        const speed = 0.1; 
        setOffsetY(window.pageYOffset * speed);
      }
    };

    useEffect(() => {
      if (isDesktop) {
        window.addEventListener('scroll', handleScroll);
      }

      return () => {
        if (isDesktop) {
          window.removeEventListener('scroll', handleScroll);
        }
      };
    }, [isDesktop]);
  const [showMore, setShowMore] = useState(false);
  const handleCardClick = () => {
    const reserveSection = document.getElementById('reserve');
    if (reserveSection) {
      // Плавная прокрутка к элементу с id 'reserve'
      reserveSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const products = [
    {
      name: 'Espresso',
      description: 'Jetnorazova extracke cerstve mlete kavy 60',
      price: '60 CZK',
      image: krujkaOne,
    },
    {
      name: 'Double Espresso',
      description: 'Jetnorazova extracke cerstve mlete kavy 60',
      price: '70 CZK',
      image: kofe2,
    },
    {
      name: 'Americano',
      description: 'Jetnorazova extracke cerstve mlete kavy 60',
      price: '65 CZK',
      image: kofe3,
    },
    {
      name: 'Lungo',
      description: 'Jetnorazova extracke cerstve mlete kavy 60',
      price: '70 CZK',
      image: kofe4,
    },
    {
      name: 'Espresso Macchiatto',
      description: 'Jetnorazova extracke cerstve mlete kavy 60',
      price: '65 CZK',
      image: kofe5,
    },
    {
      name: 'Flat white',
      description: 'Jetnorazova extracke cerstve mlete kavy 60',
      price: '80 CZK',
      image: kofe6,
    },
    {
      name: 'Cappucino',
      description: 'Jetnorazova extracke cerstve mlete kavy 60',
      price: '75 CZK',
      image: kofe7,
    },
    {
      name: 'Latte',
      description: 'Jetnorazova extracke cerstve mlete kavy 60',
      price: '80 CZK',
      image: kofe8,
    },
    {
      name: 'Mochaccino',
      description: 'Jetnorazova extracke cerstve mlete kavy 60',
      price: '80 CZK',
      image: kofe9,
    },
    {
      name: 'Raf',
      description: 'Jetnorazova extracke cerstve mlete kavy 60',
      price: '99 CZK',
      image: kofe10,
    },
    {
      name: 'Irish Coffee',
      description: 'Jetnorazova extracke cerstve mlete kavy 60',
      price: '130 CZK',
      image: kofe11,
    },
    {
      name: 'Batch brew',
      description: 'Jetnorazova extracke cerstve mlete kavy 60',
      price: '80 CZK',
      image: kofe12,
    },
    // Дополните список продуктов по аналогии
  ];

  return (
    <div className='frame-two-container'>
      <img id='krujka-main' 
        src={kofe} 
        alt="" 
        style={{ 
          transform: `translateY(${offsetY}px)`,
          transition: 'transform 0.1s ease-out' // Добавляет плавность движения
        }} 
        />
      <div className='text-start'>
        <h2>Coffee on our menu</h2>
        <p>We have unique American coffee <br className='desktop-hide'/> recipes on our menu</p>
      </div>
      <div className='blocks-kart'>
        {products.slice(0, 3).map((product, index) => (
          <div key={index} className='content-kart' onClick={handleCardClick}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <span><b>{product.price}</b></span>
          </div>
        ))}
      </div>
      {showMore && (
        <div className={`blocks-kart ${showMore ? 'expanded' : 'collapsed'}`}>
          {products.slice(3).map((product, index) => (
            <div key={index} className='content-kart'onClick={handleCardClick}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <span><b>{product.price}</b></span>
            </div>
          ))}
        </div>
      )}
      <div className='sticks'>
        <button onClick={() => setShowMore(!showMore)}>More Menu <img id='vector1' src={vector} alt="" /></button>
      </div>
    </div>
  );
};
