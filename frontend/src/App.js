import React, { useState } from 'react';
import Header from './Header';
import './App.css';


export default function App() {
  const [isActive, setIsActive] = useState(false);
  const generate = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const realUrl = formData.get('real_url');
    formData.append('real_url1', realUrl);

    fetch('http://192.168.85.1:8000/api/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(formData).toString(),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        console.log(data)
      })
      .catch((error) => {
        console.error('Error:', error);
      })
 
  };

  return (
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
            <button>GENERATE</button>
          </form>
        </div>
      </div>

    
      {/* {result && (
        <div className='result'>
          <table>
            <tbody>
              <tr>
                <th>ID</th>
                <th>Real_Url</th>
                <th>Sort_Url</th>
              </tr>
              <tr>
                <td>{result._id}</td>
                <td>{result.real_url}</td>
                <td>{result.sort_url}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )} */}
    </div>
  );
}
