import React, {useState} from 'react';
import './App.css';
// Импорт компонентов
import {FrameOne} from './components/FrameOne'; // Убедитесь, что путь к компоненту правильный
import { FrameTwo } from './components/FrameTwo';
import { FrameThree } from './components/FrameThree';
import { FrameFour } from './components/FrameFour';
import { FrameFive } from './components/FrameFive';
import { FrameSix } from './components/FrameSix';
import { FrameSeven } from './components/FrameSeven';

function App() {
  return (
    <div className="app-container">
      {/* Здесь можно добавлять компоненты */}
      <FrameOne />
      <FrameTwo />
      <FrameThree />
       <FrameFour />
      <FrameFive />
      <FrameSix />
      <FrameSeven /> 
      {/* Добавьте другие компоненты по мере необходимости */}
    </div>
  );
}

export default App;
