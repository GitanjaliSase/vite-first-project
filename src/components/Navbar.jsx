import React from 'react';
import { Link } from 'react-router-dom';

export function Navbar() {
    return (
        <>
        <div className='flex flex-row-reverse items-center justify-between p-6 bg-green-400 text-white'>
            <div className='flex space-x-5'>
                <Link className="no-underline text-lg text-white hover:text-pink-500" to="/">Home</Link>
                <Link className="no-underline text-lg text-white hover:text-pink-500" to="/location">Location</Link>
                <Link className="no-underline text-lg text-white hover:text-pink-500" to="/places">Places of interest</Link>
                <Link className="no-underline text-lg text-white hover:text-pink-500" to="/images">Gallery</Link>
                <Link className="no-underline text-lg text-white hover:text-pink-500" to="/video">Video</Link>
            </div>
        </div>
        <div className='text-8xl  text-center p-5 bg-green-200 font-serif '>
                Vambori
            </div>
        </>
    );
}
