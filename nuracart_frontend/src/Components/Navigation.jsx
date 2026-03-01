import React from 'react'
import { Search, Heart, User, ShoppingCart } from 'lucide-react';

const Navigation = () => {
    return (
        <nav className=' flex justify-between items-center md:px-18 md:py-4'>
            <div>
                <a href="/" className='text-3xl font-semibold tracking-wider'>nuracart</a>
            </div>
            <div  >
                {/* Menu */}
                <ul className='hidden md:flex  md:gap-16 md:text-lg '>
                    <li className=' text-gray-600  hover:text-black' >Shop</li>
                    <li className=' text-gray-600  hover:text-black'>Men</li>
                    <li className=' text-gray-600  hover:text-black'>Women</li>
                    <li className=' text-gray-600  hover:text-black'>Kids</li>
                </ul>
            </div>
            {/* Search*/}
            <div className='hidden md:flex md:bg-gray-100 md:rounded-sm md:px-2 md:py-1 '>
                <Search className='text-black size-4 self-center mx-2 ' />
                <input type="text" className='focus:outline-none font-light text-gray-900 ml-2 w-38' placeholder='Search' />
            </div>
            <div> 
                <ul className='hidden md:flex md:gap-10 '>
                    <li><Heart className=' text-gray-600 hover:fill-black size-5' /></li>
                    <li><User className=' text-gray-600 hover:fill-black size-5' /></li>
                    <li><ShoppingCart className=' text-gray-600 hover:fill-black size-5' /></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation