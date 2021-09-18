import React from 'react';
import './css/loader.css';

export default function Loader() {
  return (
    <div id='loader' className='center'>
      <div className='lds-roller'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
