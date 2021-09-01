import React from 'react';

import './styles/App.scss';

import Nav from './components/Nav';
import Accueil from './components/Accueil';
import Apropos from './components/A-propos';
import Work from './components/Mon-travail';
import Contact from './components/Contact';

const App=()=> {
  return (
    <div className="App">
      <Nav />
      <Accueil/>
      <Apropos />
      <Work />
      <Contact/>
    </div>
  );
}

export default App;
