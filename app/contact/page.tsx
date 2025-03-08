'use client'
const ContactPage = () => {
    return (
        <div className="min-h-screen p-8 mx-auto w-full">
            <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>

            {/* Social Links */}
            <div className="mb-8 space-y-4 flex w-full justify-center align-middle items-center gap-4">
                <a href="https://facebook.com" className="flex items-center gap-2 text-blue-600 hover:underline">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                    Facebook
                </a>
                <a href="mailto:example@gmail.com" className="flex items-center gap-2 text-red-600 hover:underline">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
                    Email Us
                </a>
                <a href="https://wa.me/1234567890" className="flex items-center gap-2 text-green-600 hover:underline">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                    WhatsApp
                </a>
            </div>

            {/* Contact Form */}
            <form className="max-w-md mx-auto space-y-4">
                <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium">Name</label>
                    <input
                        type="text"
                        id="name"
                        className="w-full px-3 py-2 border rounded-md"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="w-full px-3 py-2 border rounded-md"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium">Message</label>
                    <textarea
                        id="message"
                        rows={4}
                        className="w-full px-3 py-2 border rounded-md"
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                    Send Message
                </button>
            </form>
        </div >
    )
}

export default ContactPage