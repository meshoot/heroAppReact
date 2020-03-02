import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import './App.css';

import Header from './components/Header';

import {Main as MainPage} from './pages/Main';
import {Favorites as FavoritesPage} from "./pages/Favorites";

function App() {
  return (
      <Router>
          <Header/>
          <Switch>
              <Route exact path="/" component={MainPage}/>
              <Route path="/favorites" component={FavoritesPage}/>
          </Switch>
      </Router>
  );
}

export default App;
