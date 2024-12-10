import Vintage from "../assets/vintage.jpg";
import { TbMichelinStarGreen } from "react-icons/tb";
import { BiSolidBadgeDollar } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

function AboutUs() {
    return (
        <div className="flex flex-col items-center min-h-screen bg-[#F5F5F5] py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl md:text-6xl text-black font-semibold font-mono text-center mb-12">About Us</h1>
                
                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    <div className="space-y-6">
                        <h2 className="text-2xl md:text-3xl font-mono font-semibold">Our Story</h2>
                        <p className="text-gray-700 font-mono leading-relaxed">
                            Founded in 2023, our ecommerce platform brings together vintage enthusiasts and modern fashion lovers. We curate unique pieces that tell stories and create lasting impressions.
                        </p>
                        <p className="text-gray-700 font-mono leading-relaxed">
                            Our mission is to provide high-quality, sustainable fashion while preserving the charm of vintage aesthetics.
                        </p>
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-xl">
                        <img src={Vintage} alt="Our Story" className="w-full h-full object-cover" />
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <BiSolidBadgeDollar className="text-4xl text-green-500 mb-4" />
                        <h3 className="text-xl font-mono font-semibold mb-4">Quality First</h3>
                        <p className="text-gray-700 font-mono">We ensure every item meets our high standards of quality and authenticity.</p>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <TbMichelinStarGreen className="text-4xl text-green-500 mb-4" />
                        <h3 className="text-xl font-mono font-semibold mb-4">Sustainability</h3>
                        <p className="text-gray-700 font-mono">Committed to eco-friendly practices and sustainable fashion choices.</p>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <FaRegHeart className="text-4xl text-green-500 mb-4" />
                        <h3 className="text-xl font-mono font-semibold mb-4">Customer Focus</h3>
                        <p className="text-gray-700 font-mono">Your satisfaction is our priority, with dedicated support and service.</p>
                    </div>
                </div>

                <div className="text-center">
                    <h2 className="text-2xl md:text-3xl font-mono font-semibold mb-6">Join Our Journey</h2>
                    <p className="text-gray-700 font-mono max-w-2xl mx-auto mb-8">
                        Be part of our growing community of fashion enthusiasts and vintage lovers. Together, we're redefining style with a sustainable approach.
                    </p>
                    <Link to="/contact" className="bg-[#91AC8F] text-white px-8 py-3 rounded-lg hover:bg-[#66785F] transition-colors font-mono inline-block">
                        Contact Us
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;