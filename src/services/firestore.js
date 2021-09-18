import db from './firebase';
import {
  addDoc,
  collection,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  where,
} from 'firebase/firestore';

export function getCategories() {
  return getDocs(collection(db, 'categories'))
    .then((resp) => {
      const data = resp.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return data;
    });
}

export function getCategory() {
  return doc(db, 'categories', )
}

export function saveCategory(data) {
  return addDoc(collection(db, 'categories'), data);
}

export function getCategoriesRealTime(setCategories) {
  const q = query(collection(db, 'categories'), where('name', '!=', 'null'), orderBy('name'));
  return onSnapshot(q, (docs) => {
    const categories = [];
    docs.forEach((doc) => {
      if (doc && doc.data) {
        categories.push(doc.data());
      }
    });
    setCategories(categories);
  });
}
