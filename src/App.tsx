import React from 'react';
import style from './App.module.css';
import { LoginPage } from './pages/index';
import { Header } from './components';

function App() {
    return (
        <>
            <Header />
            <LoginPage />
        </>
    );
}

export default App;
