import React, {useState, useEffect} from 'react';
import {getCategoriesRealTime} from '../services/firestore';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';
import './css/listCategories.css';

export default function ListCategoriesRealTime() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const unsubscribe = getCategoriesRealTime(setCategories);
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div id='list-categories'>
      <Link to='/'>Inicio</Link>
      <h1>Listado categorías</h1>
      <div className='list-categories'>
        {categories.map((category, index) => <div key={index}>{category.name}</div>)}
      </div>
      <div className='center'>
        <p className='error'>{error}</p>
      </div>
    </div>
  );
}
