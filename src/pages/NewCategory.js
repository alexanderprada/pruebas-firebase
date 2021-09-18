import React, { useState } from 'react';
import {saveCategory} from '../services/firestore';
import { useHistory, Link } from 'react-router-dom';
import Loader from '../components/Loader';
import './css/newCategory.css';

export default function NewCategory() {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [category, setCategory] = useState({
    name: '',
    featured: false
  });

  const saveNewCategory = () => {
    setLoading(true);
    return saveCategory(category)
      .then(() => {
        setLoading(false);
        return history.push('/category/list');
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });
  }

  const setValue = (event) => {
    if (event.target.name === 'name') {
      setCategory({...category, name: event.target.value});
    } else {
      setCategory({...category, featured: event.target.value === 'on'});
    }
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Link to='/'>Inicio</Link>
      <div id='new-category' className='center'>
        <div className='container center'>
          <label htmlFor='name'>
            Nombre
            <input type='text' id='name' name='name' value={category.name} onChange={(e) => setValue(e)} />
          </label>
          <label htmlFor='featured'>
            Destacada
            <input type='checkbox' id='featured' name='featured'  value={category.featured}  onChange={(e) => setValue(e)} />
          </label>
          <button onClick={saveNewCategory}>Guardar</button>
          <div className='center'>
            <p className='error'>{error}</p>
          </div>
        </div>
      </div>
    </>
  );
}
