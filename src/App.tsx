import React from 'react';
import { Route, Routes } from 'react-router';
import { HashRouter } from 'react-router-dom';
import { Header } from './Header';
import { HeaderSearch } from './HeaderSearch';
import { Home } from './Home';
import { SelectedProduct } from './SelectedProduct';
import { SpecificProduct } from './SpecificProduct';
import { Cart } from './Cart';
import { Footer } from './Footer';

function App() {
  return (
    <HashRouter>
      <HeaderSearch />
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/products' element={<SelectedProduct/>}/>
        <Route path='/description' element={<SpecificProduct />}/>
        <Route path='/cart' element={<Cart />}/>
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
