import React from 'react'
import '../Css/FrameSeven.css'
import logotipik from '../Photo/Group 27355.png'
import wpp from '../Photo/WPP.png'
import telega from '../Photo/Telega.png'
import insta from '../Photo/Insta.png'
import background from '../Photo/Clip path group.png'

export const FrameSeven = () => {
  return (
    <div id='contact-us-footer' className='frame-seven-container'>
      <img id='background-volna' src={background} alt="" />
        <div className='content-frame-seven'>
            <h5>Contact us</h5>
            <div className='content-seven-info'>
                <div className='seven-info-first'>
                    <p>+420 725-137-231</p>
                    <p>Coffee21group@outlook.com</p>
                    <p>Na Maninách 1041/16,<br className='desktop-hidden'/> 170 00 Praha 7-Holešovice</p>
                    <div className='ikonki-rovno'>
                    <a href="https://www.tiktok.com/@21_coffee?_t=8kHcfbbWWhi&_r=1"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20 40C31.0457 40 40 31.0459 40 20C40 8.9541 31.0457 0 20 0C8.95435 0 0 8.9541 0 20C0 31.0459 8.95435 40 20 40ZM23.6116 17.6812C24.8486 18.5044 26.3647 18.9888 28 18.9888L27.9993 16.0669C27.1184 16.0669 26.2974 15.8237 25.6094 15.4077C24.6208 14.8105 23.9075 13.855 23.6851 12.7417C23.6377 12.501 23.6108 12.2534 23.6108 12H20.4565L20.4541 23.7129C20.4006 25.0249 19.2356 26.0771 17.8074 26.0771C17.363 26.0771 16.9451 25.9746 16.5771 25.7954C15.7332 25.3838 15.1553 24.5645 15.1553 23.6206C15.1553 22.2656 16.3447 21.1636 17.8066 21.1636C18.0796 21.1636 18.3411 21.2051 18.5886 21.2769V18.9854V18.293C18.3325 18.2612 18.0725 18.2407 17.8066 18.2407C14.6047 18.2407 12 20.6543 12 23.6206C12 25.4404 12.9817 27.0513 14.4785 28.0254C15.4211 28.6387 16.5688 29 17.8059 29C21.0068 29 23.6116 26.5874 23.6116 23.6206V17.6812Z" fill="white"/>
</svg></a>
                      <a href="https://www.instagram.com/21coffeecz?igsh=czAzYzBzY2x1NXlx"><img src={insta} alt="" /></a>
                    </div>
                </div>
                <div><img id='pos-logo' src={logotipik} alt="Logo" /></div>
            </div>
        </div>
        <div className='linki-footer'>
          <a href="#About-us-frame"><p>About us</p></a>
          <a href="#Coffee-beans"><p>Coffee beans</p></a>
          <a href="#reserve"><p>Reserve</p></a>
          <a href="#contact-us-footer"><p>Contact us</p></a>
        </div>
        <p id='theLast'>21 coffee © 2024 All rights reserved.</p>
    </div>
  )
}
