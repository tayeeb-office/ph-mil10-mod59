import React, { Suspense } from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import Loading from "../Pages/Loading"; 

const Root = () => {
    return (
        <div >
            <header className='md:w-6xl md:mx-auto'>
                <Navbar></Navbar>
            </header>
            <Suspense fallback={<Loading />}>
                <Outlet></Outlet>
            </Suspense>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Root;