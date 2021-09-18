import db from './firebase';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

export function login(email, password) {
  const auth = getAuth();
  return signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
      return userCredential;
    });
}

export function saveUser(email, password) {
  const auth = getAuth();
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      return userCredential;
    });
}
