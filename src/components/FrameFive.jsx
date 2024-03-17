import React from 'react'
import '../Css/FrameFive.css'
import vectorR from '../Photo/Vector (1).png'
import meshok from '../Photo/image 3 1.png'

export const FrameFive = () => {
  return (
    <div className='frame-five-container'>
        <img id='mesho4ek' src={meshok} alt="" />
        <div className='box-solid-ban'>
            <div className='box-solid-text'>
                <h5>Order coffee beans <br />
                    <span>right now</span></h5>
            </div>
        </div>
    </div>
  )
}
