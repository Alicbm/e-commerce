import React from 'react';
import { Route, Routes } from 'react-router';
import { HashRouter } from 'react-router-dom';
import { Header } from './Header';
import { Home } from './Home';
import { SelectedProduct } from './SelectedProduct';
import { SpecificProduct } from './SpecificProduct';
import { Footer } from './Footer';
import './App.css';

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/products' element={<SelectedProduct/>}/>
        <Route path='/description' element={<SpecificProduct />}/>
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
