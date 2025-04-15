import React from 'react';
import { useWindowSize } from './hook/CheckWindowSize';

import './App.css';

const srcFrame = 'https://i.pinimg.com/originals/31/8f/3e/318f3ecec27f30cf562880ba3e193117.jpg'

export const App = () => {
  const size = useWindowSize();

  return (
    <div className='main-wrapper'>
      <div className='position'>
        <div>Высота: { size.height }</div>
        <div>Ширина: { size.width }</div>
      </div>

      <div className='iframe-wrapper'>
        <div className='iframe-block'>
          <iframe
            frameBorder='no'
            srcDoc={`
              <html>
                <head>
                  <style>
                    body { margin: 0; padding: 0; overflow-y: hidden }
                    img { width: 100%; height: 100%; object-fit: contain; }
                  </style>
                </head>
                <body>
                  <img src=${srcFrame} alt='Изображение'/>
                </body>
              </html>
            `}
            className='iframe-style'
            title='Изображение'
          />
        </div>
      </div>
    </div>
  )
}