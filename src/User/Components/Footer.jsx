import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-[#4B5945] text-white py-8">
            <div className="container mx-auto px-4 md:px-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="text-center sm:text-left">
                        <h3 className="text-2xl font-mono font-semibold mb-4">Ecommerce</h3>
                        <p className="font-mono">Your one-stop shop for vintage and modern classics.</p>
                    </div>

                    {/* Quick Links */}
                    <div className="text-center sm:text-left">
                        <h3 className="text-xl font-mono font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 font-mono">
                            <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
                            <li><Link to="/products" className="hover:text-gray-300">Products</Link></li>
                            <li><Link to="/about" className="hover:text-gray-300">About</Link></li>
                            <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div className="text-center sm:text-left">
                        <h3 className="text-xl font-mono font-semibold mb-4">Customer Service</h3>
                        <ul className="space-y-2 font-mono">
                            <li><Link to="/shipping" className="hover:text-gray-300">Shipping Info</Link></li>
                            <li><Link to="/returns" className="hover:text-gray-300">Returns</Link></li>
                            <li><Link to="/faq" className="hover:text-gray-300">FAQ</Link></li>
                            <li><Link to="/privacy" className="hover:text-gray-300">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Contact & Social */}
                    <div className="text-center sm:text-left">
                        <h3 className="text-xl font-mono font-semibold mb-4">Connect With Us</h3>
                        <div className="flex justify-center sm:justify-start space-x-4 mb-4">
                            <a href="#" className="text-2xl hover:text-gray-300"><FaFacebook /></a>
                            <a href="#" className="text-2xl hover:text-gray-300"><FaTwitter /></a>
                            <a href="#" className="text-2xl hover:text-gray-300"><FaInstagram /></a>
                        </div>
                        <p className="font-mono">Email: example@gmail.com</p>
                        <p className="font-mono">Phone: (977) 1234567890</p>
                    </div>
                </div>

                <div className="border-t border-gray-600 mt-8 pt-8 text-center font-mono">
                    <p>&copy; 2024 Ecommerce. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
