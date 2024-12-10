import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { RiLoginCircleFill } from "react-icons/ri";
import { RiMenu3Line } from "react-icons/ri";
import { useState } from "react";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
        <div className="bg-[#4B5945] p-4 px-4 md:px-20">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl md:text-4xl text-white font-semibold font-mono">Ecommerce</h1>
                
                {/* Mobile menu button */}
                <button 
                    className="text-white text-2xl md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <RiMenu3Line />
                </button>

                {/* Desktop Navigation */}
                <div className="hidden md:block">
                    <ul className="flex gap-8">
                        <li className="text-xl text-white hover:text-gray-300 font-mono transition-colors duration-300"><Link to="/">Home</Link></li>
                        <li className="text-xl text-white hover:text-gray-300 font-mono transition-colors duration-300"><Link to="/products">Products</Link></li>
                        <li className="text-xl text-white hover:text-gray-300 font-mono transition-colors duration-300"><Link to="/about">About</Link></li>
                        <li className="text-xl text-white hover:text-gray-300 font-mono transition-colors duration-300"><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>

                <div className="hidden md:block">
                    <ul className="flex gap-6">
                        <li className="text-2xl text-white hover:text-gray-300 transition-colors duration-300"><Link to="/wishlist"><FaRegHeart /></Link></li>
                        <li className="text-2xl text-white hover:text-gray-300 transition-colors duration-300"><Link to="/cart"><FaCartShopping /></Link></li>
                        <li className="text-2xl text-white hover:text-gray-300 transition-colors duration-300"><Link to="/login"><RiLoginCircleFill /></Link></li>
                    </ul>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden mt-4">
                    <ul className="flex flex-col gap-4">
                        <li className="text-xl text-white hover:text-gray-300 font-mono transition-colors duration-300"><Link to="/">Home</Link></li>
                        <li className="text-xl text-white hover:text-gray-300 font-mono transition-colors duration-300"><Link to="/products">Products</Link></li>
                        <li className="text-xl text-white hover:text-gray-300 font-mono transition-colors duration-300"><Link to="/about">About</Link></li>
                        <li className="text-xl text-white hover:text-gray-300 font-mono transition-colors duration-300"><Link to="/contact">Contact Us</Link></li>
                    </ul>
                    <ul className="flex gap-6 mt-4">
                        <li className="text-2xl text-white hover:text-gray-300 transition-colors duration-300"><Link to="/wishlist"><FaRegHeart /></Link></li>
                        <li className="text-2xl text-white hover:text-gray-300 transition-colors duration-300"><Link to="/cart"><FaCartShopping /></Link></li>
                        <li className="text-2xl text-white hover:text-gray-300 transition-colors duration-300"><Link to="/login"><RiLoginCircleFill /></Link></li>
                    </ul>
                </div>
            )}
        </div>
        </>
    )
}

export default Navbar;