import React from 'react';
import {Link } from 'react-router-dom';
import './css/home.css';

function Home() {
  return (
    <div id='home' className='center'>
      <Link to='/user/signin'>Ingresar</Link>
      <Link to='/user/signup'>Registrarse</Link>
      <Link to='/category/list'>Listado categorías</Link>
      <Link to='/category/list/realtime'>Listado categorías en tiempo real</Link>
      <Link to='/category/new'>Nueva categoría</Link>
    </div>
  );
}

export default Home;
