import React from 'react';
import Footer from '../shared/Footer/Footer';
import Navbar from '../shared/Navbar/Navbar';

const Layouts = ({children}) => {
    
    return (
        <>
        <header>
            <Navbar/>
        </header>
        <main>
            {children}
        </main>
        <footer>
         
        </footer>
        </>
    );
};

export default Layouts;