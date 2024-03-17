import React, { useState, useEffect } from 'react';
import '../Css/FrameFour.css'
import korobka from '../Photo/КОРОБКА ЗЕЛЕНАЯ 3.png'
import pravo from '../Photo/krugright.png'
import vector from '../Photo/Vector.png'
import zernyshko from '../Photo/klipartz 8.png'
import mutnik from '../Photo/klipartz 7 (2).png'

export const FrameFour = () => {
    const [offsetY, setOffsetY] = useState(0);

    const handleScroll = () => {
      const speed = 0.1; 
      setOffsetY(window.pageYOffset * speed);
    };

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);

      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  return (
    <div id='Coffee-beans' className='frame-four-container'>
        <img id='zernyshko' src={zernyshko} alt="" 
         style={{ 
            transform: `translateY(${offsetY}px)`,
            transition: 'transform 0.2s ease-out' // Добавляет плавность движения
          }}/>
        <img id='mutnoe' src={mutnik} alt="" 
        style={{ 
            transform: `translateY(${offsetY}px)`,
            transition: 'transform 0.2s ease-out' // Добавляет плавность движения
          }}/>
        <div className='text-first-content'>
            <h4>Coffee beans</h4>
            <p>We have several options for coffee beans - you will <br />
                definitely find something that suits you.</p>
        </div>
        <div className='two-containers-photo'>
            <div className='boxa-har'>
                <div className='one-container-content'>
                    <img src={korobka} alt="" />
                    <div className='one-container-text'>
                        <h5>Brazil/<br />
                        Guatemala</h5>
                        <p>100% Arabica</p>
                    </div>
                </div>
            </div>
            <div className='boxa-har'>
            <div className='one-container-content'>
                    <img src={korobka} alt="" />
                    <div className='one-container-text'>
                        <h5>Brazil/<br />
                        Columbia</h5>
                        <p>100% Arabica</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='sticks'>
          <button id='button-poyavitsya'>More Menu <img id='vector1' src={vector} alt="" /></button>
        </div>
    </div>
  )
}
