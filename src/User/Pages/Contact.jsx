import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

function Contact() {
    return (
        <div className="flex flex-col items-center min-h-screen bg-[#F5F5F5] py-16 px-4">
            <div className="max-w-6xl mx-auto w-full">
                <h1 className="text-4xl md:text-6xl text-black font-semibold font-mono text-center mb-12">Contact Us</h1>

                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    <div className="space-y-8">
                        <h2 className="text-2xl md:text-3xl font-mono font-semibold">Get in Touch</h2>
                        <p className="text-gray-700 font-mono leading-relaxed">
                            Have questions about our products or services? We're here to help! Reach out to us using any of the following methods.
                        </p>
                        
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <FaLocationDot className="text-2xl text-[#4B5945]" />
                                <div>
                                    <h3 className="font-mono font-semibold">Address</h3>
                                    <p className="text-gray-700 font-mono">123 Fashion Street, Kathmandu, Nepal</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-4">
                                <FaPhone className="text-2xl text-[#4B5945]" />
                                <div>
                                    <h3 className="font-mono font-semibold">Phone</h3>
                                    <p className="text-gray-700 font-mono">(977) 1234567890</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-4">
                                <MdEmail className="text-2xl text-[#4B5945]" />
                                <div>
                                    <h3 className="font-mono font-semibold">Email</h3>
                                    <p className="text-gray-700 font-mono">example@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-mono font-semibold mb-6">Send us a Message</h2>
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
                            <button className="bg-[#4B5945] text-white px-6 py-3 rounded font-semibold hover:bg-[#3d4738] transition-colors w-full">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

                <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.31625949266!2d85.29111318850097!3d27.70895594444538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600%2C%20Nepal!5e0!3m2!1sen!2s!4v1696789008154!5m2!1sen!2s" 
                        width="100%" 
                        height="100%" 
                        style={{border: 0}}
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default Contact;
