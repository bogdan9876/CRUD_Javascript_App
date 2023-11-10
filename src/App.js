import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Home from './components/Home/home';
import Catalog from './components/Catalog/catalog';
import LampDetail from './components/Catalog/LampDetail';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} /> 
        <Route path="/lamp/:id" element={<LampDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
