
import Vintage from "../assets/vintage.jpg";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import Nike from "../assets/nike.jpg";
import Polo from "../assets/polo.jpg";
import Harley from "../assets/harley.jpg";
import { FaRegHeart } from "react-icons/fa";


function Home() {
    return (
        <>
        <div className="flex flex-col min-h-screen">
       
        <div className="flex justify-center items-center h-[80vh] bg-cover bg-center" style={{ backgroundImage: `url(${Vintage})` }}>
            <div className="flex flex-col justify-center items-center px-4 text-center">
                <h1 className="text-2xl md:text-4xl text-white font-semibold font-mono">Welcome to our Ecommerce Store</h1>
                <p className="text-lg md:text-xl text-white font-mono mt-2">Discover a wide range of products for all your needs</p>
            </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-10 bg-[#4B5945] py-8 md:py-16 px-4 md:px-8 rounded-lg shadow-xl mx-4">
            <h1 className="text-4xl md:text-6xl text-white font-semibold font-mono">Explore</h1>
            <div className="flex gap-4 md:gap-8">
                <ul className="flex gap-4 md:gap-8 mt-4">
                    <li onClick={() => document.getElementById('bestSellers').scrollIntoView({ behavior: 'smooth' })} className="text-base md:text-lg text-white hover:text-black font-semibold font-mono cursor-pointer">BEST SELLERS</li>
                    <li className="text-base md:text-lg text-white hover:text-black font-semibold font-mono"><Link to="/new">NEW IN</Link></li>
                    <li className="text-base md:text-lg text-white hover:text-black font-semibold font-mono"><Link to="/bundles">BUNDLES</Link></li>
                </ul>
            </div>
            <div className="flex flex-wrap justify-center items-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-8">
                    <div className="w-full max-w-sm bg-white shadow-lg rounded-lg overflow-hidden relative">
                        <button className="absolute top-4 right-4 text-white hover:text-red-500 transition-colors">
                            <FaRegHeart size={24} />
                        </button>
                        <img className="w-full h-64 object-cover" src={Vintage} alt="Product 1" />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold font-mono">Vintage Camera</h2>
                            <p className="text-gray-600 font-mono mt-2">Classic analog camera with premium lens</p>
                            <div className="flex justify-between items-center mt-4">
                                <span className="text-xl font-bold font-mono">$299.99</span>
                                <div className="flex gap-4">
                                    <button className="bg-[#4B5945] text-white px-4 py-2 rounded hover:bg-[#3d4738]"><FaCartPlus /></button>
                                    <button className="bg-[#4B5945] text-white px-4 py-2 rounded hover:bg-[#3d4738]"><FaEye /></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full max-w-sm bg-white shadow-lg rounded-lg overflow-hidden relative">
                    <button className="absolute top-4 right-4 text-white hover:text-red-500 transition-colors">
                            <FaRegHeart size={24} />
                        </button>
                        <img className="w-full h-64 object-cover" src={Nike} alt="Product 2" />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold font-mono">Leather Bag</h2>
                            <p className="text-gray-600 font-mono mt-2">Handcrafted genuine leather messenger bag</p>
                            <div className="flex justify-between items-center mt-4">
                                <span className="text-xl font-bold font-mono">$199.99</span>
                                <div className="flex gap-4">
                                    <button className="bg-[#4B5945] text-white px-4 py-2 rounded hover:bg-[#3d4738]"><FaCartPlus /></button>
                                    <button className="bg-[#4B5945] text-white px-4 py-2 rounded hover:bg-[#3d4738]"><FaEye /></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full max-w-sm bg-white shadow-lg rounded-lg overflow-hidden relative">
                        <button className="absolute top-4 right-4 text-white hover:text-red-500 transition-colors">
                            <FaRegHeart size={24} />
                        </button>
                        <img className="w-full h-64 object-cover" src={Polo} alt="Product 3" />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold font-mono">Vintage Watch</h2>
                            <p className="text-gray-600 font-mono mt-2">Mechanical timepiece with leather strap</p>
                            <div className="flex justify-between items-center mt-4">
                                <span className="text-xl font-bold font-mono">$449.99</span>
                                <div className="flex gap-4">
                                    <button className="bg-[#4B5945] text-white px-4 py-2 rounded hover:bg-[#3d4738]"><FaCartPlus /></button>
                                    <button className="bg-[#4B5945] text-white px-4 py-2 rounded hover:bg-[#3d4738]"><FaEye /></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full max-w-sm bg-white shadow-lg rounded-lg overflow-hidden relative">
                        <button className="absolute top-4 right-4 text-white hover:text-red-500 transition-colors">
                            <FaRegHeart size={24} />
                        </button>
                        <img className="w-full h-64 object-cover" src={Harley} alt="Product 4" />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold font-mono">Retro Radio</h2>
                            <p className="text-gray-600 font-mono mt-2">Classic FM/AM radio with modern features</p>
                            <div className="flex justify-between items-center mt-4">
                                <span className="text-xl font-bold font-mono">$159.99</span>
                                <div className="flex gap-4">
                                    <button className="bg-[#4B5945] text-white px-4 py-2 rounded hover:bg-[#3d4738]"><FaCartPlus /></button>
                                    <button className="bg-[#4B5945] text-white px-4 py-2 rounded hover:bg-[#3d4738]"><FaEye /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* brands */}
        <div className="flex flex-col justify-center items-center mt-20 mb-20 px-4">
            <h1 className="text-4xl md:text-6xl font-semibold font-mono mb-8 md:mb-12 text-center">Featured Brands</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-4 md:mx-10">
                <Link to="/products" className="flex flex-col items-center relative">
                    <img src={Nike} alt="Brand 1" className="w-full h-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-105" />
                    <h2 className="text-2xl md:text-4xl font-bold font-mono absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black">Nike</h2>
                </Link>
                <Link to="/products" className="flex flex-col items-center relative">
                    <img src={Polo} alt="Brand 2" className="w-full h-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-105" />
                    <h2 className="text-2xl md:text-4xl font-bold font-mono absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black">Polo</h2>
                </Link>
                <Link to="/products" className="flex flex-col items-center relative">
                    <img src={Harley} alt="Brand 3" className="w-full h-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-105" />
                    <h2 className="text-2xl md:text-4xl font-bold font-mono absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black">Harley</h2>
                </Link>
                <Link to="/products" className="flex flex-col items-center relative">
                    <img src={Vintage} alt="Brand 4" className="w-full h-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-105" />
                    <h2 className="text-2xl md:text-4xl font-bold font-mono absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black">Vintage</h2>
                </Link>
            </div>
        </div>

        {/* About */}
        <div className="flex flex-col justify-center items-center mt-20 mb-20 bg-[#4B5945] py-8 md:py-16 px-4 md:px-8 rounded-lg shadow-xl mx-4">
            <h1 className="text-4xl md:text-6xl text-white font-semibold font-mono mb-8 md:mb-12">About</h1>
            <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-16">
                <div className="flex-1 w-full">
                    <img src={Vintage} alt="Vintage" className="w-full h-64 md:h-96 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="flex-1 flex flex-col items-start">
                    <h2 className="text-3xl md:text-4xl text-white font-semibold font-mono mb-4 md:mb-6">Our Story</h2>
                    <p className="text-lg md:text-xl text-gray-200 font-mono leading-relaxed">
                        We are a team of passionate individuals who 
                        are dedicated to providing you with the best products 
                        for all your needs.
                    </p>
                    <button className="bg-[#91AC8F] text-white px-4 py-2 rounded hover:bg-[#66785F] mt-4"><Link to="/about">Learn More</Link></button>
                </div>
            </div>
        </div>

        {/* contact us */}
        <div className="flex flex-col justify-center items-center py-8 md:py-16 px-4 md:px-8 rounded-lg shadow-xl">
            <h1 className="text-4xl md:text-6xl text-black font-semibold font-mono mb-8 md:mb-12">Contact Us</h1>
            <div className="w-full max-w-4xl flex flex-col lg:flex-row gap-8 md:gap-12">
                <div className="flex-1 text-black font-mono">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6">Get in Touch</h2>
                    <div className="space-y-4">
                        <p className="flex items-center gap-2">
                            <span className="text-xl">📍</span> 123 Fashion Street, Kathmandu, Nepal
                        </p>
                        <p className="flex items-center gap-2">
                            <span className="text-xl">📞</span> (977) 1234567890
                        </p>
                        <p className="flex items-center gap-2">
                            <span className="text-xl">✉️</span> example@gmail.com
                        </p>
                    </div>
                </div>
                <div className="flex-1">
                    <form className="space-y-4">
                        <input 
                            type="text" 
                            placeholder="Your Name"
                            className="w-full p-3 rounded bg-[#91AC8F] text-white placeholder-gray-200 focus:outline-none"
                        />
                        <input 
                            type="email" 
                            placeholder="Your Email"
                            className="w-full p-3 rounded bg-[#91AC8F] text-white placeholder-gray-200 focus:outline-none"
                        />
                        <textarea 
                            placeholder="Your Message"
                            rows="4"
                            className="w-full p-3 rounded bg-[#91AC8F] text-white placeholder-gray-200 focus:outline-none"
                        ></textarea>
                        <button className="bg-[#4B5945] text-white px-6 py-3 rounded font-semibold hover:bg-[#3d4738] transition-colors w-full md:w-auto">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>

       

        </div>
        </>
    )
}

export default Home;
