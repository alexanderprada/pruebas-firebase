import React, {useState, useEffect} from 'react';
import {getCategories} from '../services/firestore';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';
import './css/listCategories.css';

export default function ListCategories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    getCategories()
      .then((resp) => {
        setCategories(resp);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div id='list-categories'>
      <Link to='/'>Inicio</Link>
      <h1>Listado categorías</h1>
      <div className='list-categories'>
        {categories.map((category) => <div key={category.id}>{category.name}</div>)}
      </div>
      <div className='center'>
        <p className='error'>{error}</p>
      </div>
    </div>
  );
}
