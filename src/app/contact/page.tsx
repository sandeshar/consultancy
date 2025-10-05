import Image from "next/image";

export default function Contact() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative flex flex-col items-center justify-center min-h-[50vh] text-center p-8 bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900">
                <div className="absolute inset-0 bg-[url('/map.svg')] bg-no-repeat bg-center bg-cover opacity-5" />

                <div className="relative z-10 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                        Contact <span className="text-gradient bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Us</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                        Get in touch with our education experts for personalized guidance
                    </p>
                </div>
            </section>

            {/* Contact Information & Form Section */}
            <section className="py-20 px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16">

                        {/* Contact Information */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-4xl font-bold text-gray-900 mb-6">Let's Start Your Journey</h2>
                                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                                    Ready to take the first step towards your international education? Our expert counselors are here to guide you through every stage of your study abroad journey.
                                </p>
                            </div>

                            {/* Contact Details */}
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Visit Our Office</h3>
                                        <p className="text-gray-600">
                                            Putalisadak, Kathmandu, Nepal<br />
                                            Near Putali Sadak Chowk<br />
                                            Ground Floor, ABC Building
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
                                        <p className="text-gray-600">
                                            Phone: +977-1-4444444<br />
                                            Mobile: +977-9841234567<br />
                                            WhatsApp: +977-9841234567
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
                                        <p className="text-gray-600">
                                            General Inquiry: info@babconsultancy.com<br />
                                            Admissions: admissions@babconsultancy.com<br />
                                            Support: support@babconsultancy.com
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Office Hours</h3>
                                        <p className="text-gray-600">
                                            Sunday - Friday: 9:00 AM - 6:00 PM<br />
                                            Saturday: 9:00 AM - 4:00 PM<br />
                                            Emergency: 24/7 WhatsApp Support
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Social Media */}
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">Follow Us</h3>
                                <div className="flex space-x-4">
                                    {[
                                        { name: "Facebook", icon: "📘" },
                                        { name: "Instagram", icon: "📷" },
                                        { name: "LinkedIn", icon: "💼" },
                                        { name: "YouTube", icon: "📺" }
                                    ].map((social, index) => (
                                        <a key={index} href="#" className="w-12 h-12 bg-gray-100 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white rounded-full flex items-center justify-center text-2xl transition-all duration-300 transform hover:scale-110">
                                            {social.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl">
                            <h3 className="text-3xl font-bold text-gray-900 mb-6">Book Free Consultation</h3>
                            <p className="text-gray-600 mb-8">Fill out the form below and our counselors will get back to you within 24 hours.</p>

                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">First Name *</label>
                                        <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors" placeholder="Your first name" required />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name *</label>
                                        <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors" placeholder="Your last name" required />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                                    <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors" placeholder="your.email@example.com" required />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                                    <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors" placeholder="+977-9841234567" required />
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Country</label>
                                        <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors">
                                            <option>Select Country</option>
                                            <option>United States</option>
                                            <option>Canada</option>
                                            <option>United Kingdom</option>
                                            <option>Australia</option>
                                            <option>Germany</option>
                                            <option>New Zealand</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Study Level</label>
                                        <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors">
                                            <option>Select Level</option>
                                            <option>Bachelor's Degree</option>
                                            <option>Master's Degree</option>
                                            <option>PhD</option>
                                            <option>Diploma/Certificate</option>
                                            <option>Language Course</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Field of Study</label>
                                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors" placeholder="e.g., Computer Science, Business, Engineering" />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                                    <textarea rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors" placeholder="Tell us about your educational goals, questions, or any specific requirements..."></textarea>
                                </div>

                                <div className="flex items-center">
                                    <input type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" required />
                                    <label className="ml-2 text-sm text-gray-600">
                                        I agree to receive communication from BAB Consultancy regarding my inquiry *
                                    </label>
                                </div>

                                <button type="submit" className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-lg hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
                                    Send Message & Book Consultation
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Services Section */}
            <section className="py-20 px-8 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Quick Services</h2>
                    <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
                        Need immediate assistance? Choose from our quick service options
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: "📞",
                                title: "Emergency Consultation",
                                description: "Urgent visa or application queries",
                                action: "Call Now: +977-9841234567",
                                bgColor: "from-red-500 to-pink-600"
                            },
                            {
                                icon: "💬",
                                title: "WhatsApp Consultation",
                                description: "Quick questions and updates",
                                action: "WhatsApp: +977-9841234567",
                                bgColor: "from-green-500 to-emerald-600"
                            },
                            {
                                icon: "📧",
                                title: "Email Support",
                                description: "Detailed queries and document review",
                                action: "Email: support@babconsultancy.com",
                                bgColor: "from-blue-500 to-indigo-600"
                            }
                        ].map((service, index) => (
                            <div key={index} className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-200">
                                <div className="text-4xl mb-4">{service.icon}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                                <p className="text-gray-600 mb-6">{service.description}</p>
                                <a href="#" className={`inline-block px-6 py-3 bg-gradient-to-r ${service.bgColor} text-white font-semibold rounded-lg hover:opacity-90 transform hover:scale-105 transition-all duration-300`}>
                                    {service.action}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Map & Location Section */}
            <section className="py-20 px-8 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Visit Our Office</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Located in the heart of Kathmandu, easily accessible by public transport
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Office Location Details</h3>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <span className="text-2xl">📍</span>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Address</h4>
                                        <p className="text-gray-600">Putalisadak, Kathmandu, Nepal - Near Putali Sadak Chowk</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <span className="text-2xl">🚌</span>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Public Transport</h4>
                                        <p className="text-gray-600">All major bus routes pass through Putali Sadak</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <span className="text-2xl">🚗</span>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Parking</h4>
                                        <p className="text-gray-600">Limited parking available in front of building</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <span className="text-2xl">🏢</span>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Landmarks</h4>
                                        <p className="text-gray-600">Near Nepal Bank, opposite to ABC Shopping Center</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-8 rounded-2xl">
                            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                                <h4 className="text-2xl font-bold text-gray-900 mb-4">Schedule Your Visit</h4>
                                <p className="text-gray-600 mb-6">
                                    No appointment necessary during office hours. Walk-ins welcome!
                                </p>
                                <div className="space-y-2 text-sm text-gray-600">
                                    <div className="flex justify-between">
                                        <span>Sunday - Friday:</span>
                                        <span className="font-semibold">9:00 AM - 6:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Saturday:</span>
                                        <span className="font-semibold">9:00 AM - 4:00 PM</span>
                                    </div>
                                </div>
                                <button className="mt-6 w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-colors">
                                    Get Directions
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}