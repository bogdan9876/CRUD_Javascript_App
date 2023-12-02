import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Home from './components/Home/home';
import Catalog from './components/Catalog/catalog';
import LampDetail from './components/LampDetail/lampDetail';
import Cart from './components/Cart/cart';
import FormikPage from './components/FormikPage/formikPage';
import SuccessPage from './components/SuccessPage/successPage';
import ProtectedRoute from './utils/ProtectedRoute';
import Login from './components/Login/login';
import Register from './components/Register/register';

function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}

function AppContent() {
    const [searchTerm, setSearchTerm] = useState('');
    const location = useLocation();

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <>
            {location.pathname !== '/' && location.pathname !== '/register' && <Header searchTerm={searchTerm} onSearchChange={handleSearchChange} />}
            <Routes>
                <Route element={<ProtectedRoute />}>
                    <Route path="/home" element={<Home />} />
                    <Route path="/catalog" element={<Catalog />} searchTerm={searchTerm} />
                    <Route path="/lamp/:id" element={<LampDetail />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/formik" element={<FormikPage />} />
                    <Route path="/success" element={<SuccessPage />} />
                </Route>
                <Route element={<Login />} path="/" exact />
                <Route element={<Register />} path="/register" />
            </Routes>
            <Footer />
        </>
    );
}

export default App;