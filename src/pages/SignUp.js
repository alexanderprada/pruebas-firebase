import React, { useState, useEffect } from 'react';
import './css/signUp.css';
import {saveUser} from '../services/auth';
import { useHistory, Link } from 'react-router-dom';
import Loader from '../components/Loader';

export default function SignUp() {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const sendDataUser = () => {
    setLoading(true);
    return saveUser(user.email, user.password)
      .then(() => {
        setLoading(false);
        return history.push('/');
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });
  }

  const setValue = (event) => {
    setUser({...user, [event.target.name]: event.target.value});
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Link to='/'>Inicio</Link>
      <div id='sign-up' className='center'>
        <div className='container center'>
          <label htmlFor='email'>
            E-Mail
            <input type='text' id='email' name='email' onChange={(e) => setValue(e)} />
          </label>
          <label htmlFor='password'>
            Contraseña
            <input type='password' id='password' name='password' onChange={(e) => setValue(e)} />
          </label>
          <button onClick={sendDataUser}>Guardar</button>
          <div className='center'>
            <p className='error'>{error}</p>
          </div>
        </div>
      </div>
    </>
  );
}
