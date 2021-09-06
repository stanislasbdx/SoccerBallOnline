import React from 'react';

import 'rsuite/dist/styles/rsuite-default.css';
import './assets/less/SBO.less';

import Accueil from './views/accueil';
import Contact from './views/contact';

import Navigation from './components/@base/Navigation';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Container } from 'rsuite';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        
        <Container style={{padding: '20px'}}>
          <Route path="/" exact component={Accueil}/>
          <Route path="/contact" exact component={Contact}/>
        </Container>
      </Router>
    </div>
  );
}

export default App;
