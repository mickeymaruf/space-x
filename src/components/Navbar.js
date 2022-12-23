import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import spacex from '../assets/spacex.png';
import { AiFillGithub } from 'react-icons/ai';

const Navbar = () => {
    const location = useLocation();
    return (
        <nav className='w-11/12 mx-auto flex justify-between items-center py-6'>
            <Link to="/"><img className='w-52' src={spacex} alt="" /></Link>
            <ul className='flex items-center font-medium uppercase gap-8 text-sm'>
                <li className={`hover:opacity-50 ${location.pathname === "/" && 'opacity-50'}`}><Link to="/">Home</Link></li>
                <li className={`hover:opacity-50 ${location.pathname === "/history" && 'opacity-50'}`}><Link to="/history">History</Link></li>
                <li className={`hover:opacity-50 ${location.pathname === "/address" && 'opacity-50'}`}><Link to="/address">Address</Link></li>
                <li>
                    <a target="_blank" rel='noreferrer' href="https://github.com/mickeymaruf/space-x"><AiFillGithub className='w-8 h-8' /></a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;