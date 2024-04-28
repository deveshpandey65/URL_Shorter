import React, { useState } from 'react';
import Header from './Header';
import './App.css';
import img1 from './img/gradient-dark-blue-futuristic-digital-grid-background(1).jpg';

export default function App() {
  let [active,uactive]=useState(false)

  let generate=()=>{
    
  }
  return (
    <>
      <div className='screen'>
        <Header />
        <div className='homeimg' onMouseEnter={() => uactive(true)} onMouseLeave={() => uactive(false)}>
          <div className='come'>
            <div className={(active ? 'name-come active' : 'name-come')}>
              <h1>Sort Your URL</h1>
            </div>
            
            <input type='text' placeholder='ENTER YOUR URL'/>
            <button onClick={()=>{
              generate()
            }}>GENEREATE</button>
          </div>
          
        </div>
        
       
       
        
       
      </div>
    </>
  )
}


