import React from 'react';
import { HiOutlineBell } from 'react-icons/hi'; // Import notification icon
import ellipse from '../images/Subtract (3).png';
import profilepicture from '../images/Profile.png';

const Navbar = () => {
    const logout = () => {
        localStorage.clear();
        window.location.assign("https://main--rococo-biscuit-09af1e.netlify.app/");
    };

    return (
        <div className="bg-white-800 flex items-center justify-between px-6 py-4">
            {/* Left side: Logo and Title */}
            <div className="flex items-center">
                <img src={ellipse} alt="Company Logo" className="h-8 mr-2" />
                <p className='text-black font-bold mr-4'>Base</p>
                <p className="text-black-500 item-center">Upload CSV</p>
            </div>

            {/* Right side: Notification and Profile */}
            <div className="flex items-center">
                <div className="mr-4 relative">
                    <HiOutlineBell className="h-6 w-6 text-black" />
                    {/* Notification badge */}
                    <span className="absolute -top-2 -right-2 bg-red-500 text-black text-xs rounded-full px-2 py-1">3</span>
                </div>
                <button onClick={logout} className="text-black mr-4">Logout</button>
                <img src={profilepicture} alt="Profile" className="h-8 w-8 rounded-full" />
            </div>
        </div>
    );
};

export default Navbar;
