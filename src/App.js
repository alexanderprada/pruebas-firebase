import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './pages/Home';
import ListCategories from './pages/ListCategories';
import ListCategoriesRealTime from './pages/ListCategoriesRealTime';
import NewCategory from './pages/NewCategory';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/user/signin'>
          <SignIn />
        </Route>
        <Route exact path='/user/signup'>
          <SignUp />
        </Route>
        <Route exact path='/category/new'>
          <NewCategory />
        </Route>
        <Route exact path='/category/list'>
          <ListCategories />
        </Route>
        <Route exact path='/category/list/realtime'>
          <ListCategoriesRealTime />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
