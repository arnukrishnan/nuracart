import React, { useState } from 'react'
import { Search, Heart, User, ShoppingCart, Menu, X } from 'lucide-react';

const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className='flex px-4 py-4 justify-between items-center  md:px-18 md:py-4'>
            <div>
                <a href="/" className='text-3xl font-semibold tracking-wider'>nuracart</a>
            </div>
            <div  >
                {/* Desktop Menu */}
                <ul className='hidden md:flex  md:gap-16 md:text-lg '>
                    <li className=' text-gray-600  hover:text-black' >Shop</li>
                    <li className=' text-gray-600  hover:text-black'>Men</li>
                    <li className=' text-gray-600  hover:text-black'>Women</li>
                    <li className=' text-gray-600  hover:text-black'>Kids</li>
                </ul>
            </div>
            {/* Desktop Search */}
            <div className='hidden md:flex md:bg-gray-100 md:rounded-sm md:px-2 md:py-1 '>
                <Search className='text-black size-4 self-center mx-2 ' />
                <input type="text" className='focus:outline-none font-light text-gray-900 ml-2 w-38' placeholder='Search' />
            </div>
            {/* Desktop Icons */}
            <div>
                <ul className=' flex md:gap-10 gap-5 '>
                    <li><Heart className=' text-gray-600 hover:fill-black size-5' /></li>
                    <li><User className=' text-gray-600 hidden md:block hover:fill-black size-5' /></li>
                    <li><ShoppingCart className=' text-gray-600 hover:fill-black size-5' /></li>
                </ul>
            </div>

            <div className='md:hidden'><button onClick={() => { setMenuOpen(!menuOpen) }}>{menuOpen ? <X className='size-5 text-gray-600 ' /> : <Menu className='size-5 text-gray-600 ' />}
            </button></div>

            {menuOpen && <div className='md:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-lg p-6 transition-all duration-300'>


                <button onClick={() => setMenuOpen(false)}>
                    <X className="size-7 font-bold text-9xl mb-6" />
                </button>
                <ul className='flex flex-col gap-6 text-lg'>
                    <li className='py-2 text-gray-600 text-lg font-medium'>Login/Signup</li>
                    <li className='py-2 text-gray-600 text-lg font-medium'>Shop</li>
                    <li className='py-2 text-gray-600 text-lg font-medium'>Men</li>
                    <li className='py-2 text-gray-600 text-lg font-medium'>Women</li>
                    <li className='py-2 text-gray-600 text-lg font-medium'>Kids</li>
                </ul>
            </div>}

        </nav>
    )
}

export default Navigation