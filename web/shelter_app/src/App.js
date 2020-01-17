import React, { Fragment, useEffect } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Reptiles from './components/reptiles/Reptiles';
import Cats from './components/cats/Cats';
import Dogs from './components/dogs/Dogs';
import NavBar from './components/layout/NavBar';


function App() {
  useEffect(() =>{
    M.AutoInit()
  })
  return (
    <Fragment>
      <NavBar/>
      <Router>
        <Switch>
          <Route path="/dogs" component={Dogs} exact />
          <Route path="/cats" component={Cats} />
          <Route path="/reptiles" component={Reptiles} />
         
        </Switch>
      </Router>
      
      
    </Fragment>
   
  );
}

export default App;
