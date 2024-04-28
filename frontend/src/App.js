import React, { useState } from 'react';
import Header from './Header';
import './App.css';

export default function App() {
  const [isActive, setIsActive] = useState(false);
  const [requestResult, setRequestResult] = useState('');

  const generate = (event) => {
    event.preventDefault(); // Prevent the default form submission

    fetch('http://192.168.85.1:8000/data')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        setRequestResult(data);
        console.log(data)
      })
      .catch((error) => {
        console.error('Ereror:', error);
      });
  };



  return (
    <>
      <div className='screen'>
        <Header />
        <div
          className='homeimg'
          onMouseEnter={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
        >
          <div className='come'>
            <div className={isActive ? 'name-come active' : 'name-come'}>
              <h1>Sort Your URL</h1>
            </div>
            <form onSubmit={generate}>
              <input type='text' placeholder='ENTER YOUR URL' name='real_url' />
              <button >GENERATE</button>
            </form>
           
            
          </div>
        </div>
        
            {requestResult ?
          <div className='result'>
            <table>
              <tr>
                <th>ID</th>
                <th>Real_Url</th>
                <th>Sort_Url</th>
              </tr>
              {requestResult.map((res) => {

                return (<tr>
                  <td>{res._id}</td>
                  <td>{res.real_url}</td>
                  <td>{res.sort_url}</td>
                </tr>)             
                console.log(res)
              })
              }
            
          </table> 
        
      
          </div> : ''}

      </div>
    </>
  );
}
