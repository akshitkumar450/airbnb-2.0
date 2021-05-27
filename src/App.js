import React from 'react'
import './App.css';
import Header from './Header';
import Home from './Home';
import Footer from './Footer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SearchPage from './SearchPage';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />

        <Switch>
          <Route path='/' exact={true}>
            <Home />
          </Route>
          <Route path='/search' exact={true}>
            <SearchPage />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
