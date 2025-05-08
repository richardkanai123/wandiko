'use client'
import { SocialLinks } from '@/components/ui/_Others/SocialLinks'

const ContactPage = () => {
    return (
        <section className="w-full relative bg-blue-50 min-h-screen flex flex-col mx-auto items-center justify-center text-center px-4">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-blue-900 opacity-40"></div>
            
            <div className="z-10 w-full max-w-md mx-auto">
                <h1 className="text-3xl font-bold mb-8 text-center text-gray-900">Contact Us</h1>

                {/* Contact Form */}
                <form className="space-y-4 bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md">
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">Message</label>
                        <textarea
                            id="message"
                            rows={4}
                            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 bg-[#176bf2] text-white rounded-md hover:bg-[#176bf2]/90 transition-colors"
                    >
                        Send Message
                    </button>
                </form>

                {/* Social Links */}
                <SocialLinks />
            </div>
        </section>
    )
}

export default ContactPage