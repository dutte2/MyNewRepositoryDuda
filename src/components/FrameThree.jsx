import React, { useState, useEffect } from 'react';
import '../Css/FrameThree.css'
import Logo from '../Photo/Logo.png';
import tovarZer from '../Photo/pngwing 2.png'
import tovarZerDva from '../Photo/Group 27346.png'
import ponchik from '../Photo/пончик 1.png'
import coffeebig2 from '../Photo/cans_ina_air1 2.png'
import mutnik from '../Photo/klipartz 7 (2).png'
import mobilelogo from '../Photo/Group.png'

export const FrameThree = () => {
    
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

  return (
    <div id='About-us-frame' className='frame-three-container'>
        <img id='mobile-logo' src={mobilelogo} alt="" />
        <img id='coffecontrol' src={coffeebig2} alt="" 
        style={{ 
            transform: `translateY(${offsetY}px)`,
            transition: 'transform 0.2s ease-out' // Добавляет плавность движения
          }} />
        <img id='mutnik3' src={mutnik} alt="" 
        style={{ 
            transform: `translateY(${offsetY}px)`,
            transition: 'transform 0.2s ease-out' // Добавляет плавность движения
          }} />
        <div className='text-content'>
            <h3>About us</h3>
            
            <p><img id='logotut' src={Logo} alt="" /> <span className='mobile-hidden'>-</span> Your best choice!</p>
            <span>In the coffee shop you will be immersed <br className='desktop-hidden' /> in a friendly atmosphere <br className='mobile-hidden' />
                with high- <br className='desktop-hidden' />quality and fast service. Our baristas are <br className='desktop-hidden' /> true professionals <br className='mobile-hidden'/>
                 who will help you <br className='desktop-hidden' /> select and prepare the perfect drink.</span>
        </div>
        <div className='main-block-three'>
            <div className='content-text-block'>
                <div className='content-osn'>
                    <img src={tovarZer} alt="" />
                    <div className='content-osn-text'>
                        <h4>Freshly Roasted <br />
                            Coffee:</h4>
                            <p>We exclusively provide freshly roasted coffee beans, ensuring 
                              an unparalleled richness in taste and aroma. Here, you can explore a diverse 
                              range of varieties and blends to discover your ideal coffee</p>
                    </div>
                </div>
            </div>
            <div className='content-text-block'>
            <div className='content-osn'>
                    <img src={tovarZerDva} alt="" />
                    <div className='content-osn-text'>
                        <h4>Different coffee <br />
                            varieties:</h4>
                            <p>We exclusively source high-quality Arabica beans with 
                              superior ratings from an array of countries such as Brazil, 
                              Guatemala, Ethiopia, Colombia, Kenya, and Costa Rica. This diverse 
                              selection ensures that each cup offers a distinct and exceptional taste 
                              experience, celebrating the rich coffee cultures from around the globe</p>
                    </div>
                </div>
            </div>
            <div className='content-text-block'>
            <div className='content-osn'>
                    <img src={ponchik} alt="" />
                    <div className='content-osn-text'>
                        <h4>Wide <br className='desktop-hidden' /> selection <br className='mobile-hidden' />
                            of <br className='desktop-hidden' /> desserts:</h4>
                            <p>Our menu highlights include the blueberry kalach, a 
                              delightful Eastern European bread with a luscious blueberry filling, and 
                              gourmet raspberry and chocolate croissants. These treats, with their perfect 
                              balance of flavors and textures, complement our premium coffee beautifully</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
