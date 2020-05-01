import  React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import Header from "./Header";
import MainPage from "./../pages/Main/";
import FavoritesPage from "./../pages/Favorites";

const Layout = props => {
    return (
        <Router>
            <Header/>
            <Switch>
                <Route path="/favorites" component={FavoritesPage}/>
                <Route exact path="/" component={MainPage}/>
            </Switch>
        </Router>
    )
}

export default Layout