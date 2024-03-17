import React, { useState, useEffect } from 'react';
import '../Css/FrameSix.css'
import kruje4ka from '../Photo/cans_ina_air 1 (1).png'
import { ToastContainer, toast } from 'react-toastify';

export const FrameSix = () => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    const speed = 0.1; 
    setOffsetY(window.pageYOffset * speed);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const handleSubmit = async (event) => {
    event.preventDefault(); // Предотвращаем стандартное поведение формы
  
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
  
    try {
      await fetch('https://script.google.com/macros/s/AKfycbzi3OVF-7540wvqZK49qgLaSXXUWuxPkFTQAG1XKUfS3dGR9bmxl82a_PxdXPQr4gJBIw/exec', {
        method: 'POST',
        mode: 'no-cors', // Важно для обхода CORS политики
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // Преобразуем данные формы в JSON
      });
      // Обработка успешной отправки данных
      alert('Form data successfully sent to the Google Sheet');
      form.reset(); // Очищаем форму после отправки
    } catch (error) {
      console.error('Error during form submission:', error);
      alert('Failed to send data. Please try again.'); // Уведомление об ошибке
    }
  };
  
  
  return (
    <div id='reserve' className='frame-six-container'>
        <img id='mutkrujka' src={kruje4ka} alt="" 
        style={{ 
          transform: `translateY(${offsetY}px)`,
          transition: 'transform 0.1s ease-out' // Добавляет плавность движения
        }}/>
        <div className='six-contain'>
            <h5>Reserve</h5>
            <p>We are pleased to offer you a wide<br className='desktop-hidden' />range of coffee drinks and desserts.<br className='desktop-hidden' /> <br className='mobile-hidden'/>
                You can order them directly on our<br className='desktop-hidden' /> website. To do this, you need to fill <br className='mobile-hidden' />
                in<br className='desktop-hidden' /> the order form, indicating your contact<br className='desktop-hidden' /> details and delivery address. <br className='mobile-hidden' />
                After that<br className='desktop-hidden' /> our manager will contact you to<br className='desktop-hidden' /> confirm the order. </p>
        </div>
        <div className='forma-p'>
            <p>You can get a free consultation</p>
            <form className='contact-form' onSubmit={handleSubmit}>
        
                <input type="text" id="name" name="name" required placeholder='Name'/>

                
                <input type="tel" id="phone" name="phone" required pattern="\+?[0-9]{1,}" placeholder='Phone Number'  />

                
                <textarea id="comment" name="comment" rows="4" placeholder='Comment'></textarea>

                <button type="submit">Order It right now</button>
            </form>
        </div>
    </div>
  )
}
