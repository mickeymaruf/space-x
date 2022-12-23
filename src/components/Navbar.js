import React from 'react';
import spacex from '../assets/spacex.png';

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center w-11/12 mx-auto py-6'>
            <img className='w-52' src={spacex} alt="" />
            <ul className='flex font-medium uppercase gap-8 text-sm'>
                <li>Home</li>
                <li>History</li>
                <li>Address</li>
            </ul>
        </nav>
    );
};

export default Navbar;