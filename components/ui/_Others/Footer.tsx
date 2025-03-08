import { FaSquareWhatsapp } from "react-icons/fa6";
import { MdEmail, MdFacebook } from "react-icons/md";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10 px-6 md:px-12">
            <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
                {/* About Section */}
                <div>
                    <h3 className="text-xl font-semibold">Wandiko</h3>
                    <p className="mt-3 text-gray-400">
                        We provide expert academic support, helping students and researchers develop strong, ethical, and publishable work.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-xl font-semibold">Quick Links</h3>
                    <ul className="mt-3 space-y-2">
                        <li>
                            <a href="/services" className="text-gray-400 hover:text-white transition">
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="/contact" className="text-gray-400 hover:text-white transition">
                                Contact Us
                            </a>
                        </li>
                        <li>
                            <a href="/faq" className="text-gray-400 hover:text-white transition">
                                FAQs
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-xl font-semibold">Contact Us</h3>
                    <p className="mt-3 text-gray-400">📍 Nairobi, Kenya</p>
                    <p className="text-gray-400">📧 info@wandiko.com</p>
                    <p className="text-gray-400">📞 +254 700 123 456</p>
                </div>
            </div>

            {/* Social Media & Copyright */}
            <div className="mt-10 text-center border-t border-gray-700 pt-6">
                <div className="flex justify-center gap-6">
                    <a href="#" className="text-gray-400 hover:text-white transition text-xl">
                        <MdFacebook />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition text-xl">
                        <FaSquareWhatsapp />

                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition text-xl">
                        <MdEmail />
                    </a>
                </div>
                <p className="mt-4 text-gray-500 text-sm">
                    © {new Date().getFullYear()} Wandiko. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
