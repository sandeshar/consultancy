
export default function Contact() {
    const handleForm = async (formData: FormData) => {
        "use server";
        const firstName = formData.get("firstName")?.toString() || "";
        const lastName = formData.get("lastName")?.toString() || "";
        const email = formData.get("email")?.toString() || "";
        const country = formData.get("country")?.toString() || "";
        const studyLevel = formData.get("studyLevel")?.toString() || "";
        const fieldOfStudy = formData.get("fieldOfStudy")?.toString() || "";
        const message = formData.get("message")?.toString() || "";

        console.log({ firstName, lastName, email, country, studyLevel, fieldOfStudy, message });
    };
    return (
        <>
            {/* Hero Section */}
            <section className="relative flex flex-col items-center justify-center min-h-[70vh] text-center px-4 py-32 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
                <div className="absolute inset-0 bg-[url('/map.svg')] bg-no-repeat bg-center bg-cover opacity-5" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />

                <div className="relative z-10 max-w-5xl mx-auto space-y-8">
                    <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
                        Contact <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">Us</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto font-light">
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
                                            General Inquiry: info@bbconsultancy.com<br />
                                            Admissions: admissions@bbconsultancy.com<br />
                                            Support: support@bbconsultancy.com
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
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">Follow Us & Stay Connected</h3>
                                <p className="text-gray-600 mb-6">Connect with us on social media for the latest updates, success stories, and education tips.</p>

                                <div className="grid grid-cols-2 gap-4">
                                    <a href="https://facebook.com/bbconsultancy" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 p-3 bg-blue-50 hover:bg-blue-600 text-gray-700 hover:text-white rounded-lg transition-all duration-300 group">
                                        <div className="w-8 h-8 bg-blue-600 group-hover:bg-white rounded-full flex items-center justify-center transition-colors">
                                            <svg className="w-4 h-4 text-white group-hover:text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                            </svg>
                                        </div>
                                        <span className="font-medium">Facebook</span>
                                    </a>

                                    <a href="https://instagram.com/bbconsultancy" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 p-3 bg-pink-50 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 text-gray-700 hover:text-white rounded-lg transition-all duration-300 group">
                                        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:bg-white rounded-full flex items-center justify-center transition-all">
                                            <svg className="w-4 h-4 text-white group-hover:text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.611-3.197-1.559-.748-.948-.748-2.183 0-3.131.749-.948 1.9-1.559 3.197-1.559s2.448.611 3.197 1.559c.748.948.748 2.183 0 3.131-.749.948-1.9 1.559-3.197 1.559zm7.718 0c-1.297 0-2.448-.611-3.197-1.559-.748-.948-.748-2.183 0-3.131.749-.948 1.9-1.559 3.197-1.559s2.448.611 3.197 1.559c.748.948.748 2.183 0 3.131-.749.948-1.9 1.559-3.197 1.559z" />
                                            </svg>
                                        </div>
                                        <span className="font-medium">Instagram</span>
                                    </a>

                                    <a href="https://linkedin.com/company/bbconsultancy" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 p-3 bg-blue-50 hover:bg-blue-700 text-gray-700 hover:text-white rounded-lg transition-all duration-300 group">
                                        <div className="w-8 h-8 bg-blue-700 group-hover:bg-white rounded-full flex items-center justify-center transition-colors">
                                            <svg className="w-4 h-4 text-white group-hover:text-blue-700" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                            </svg>
                                        </div>
                                        <span className="font-medium">LinkedIn</span>
                                    </a>

                                    <a href="https://youtube.com/@bbconsultancy" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 p-3 bg-red-50 hover:bg-red-600 text-gray-700 hover:text-white rounded-lg transition-all duration-300 group">
                                        <div className="w-8 h-8 bg-red-600 group-hover:bg-white rounded-full flex items-center justify-center transition-colors">
                                            <svg className="w-4 h-4 text-white group-hover:text-red-600" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                            </svg>
                                        </div>
                                        <span className="font-medium">YouTube</span>
                                    </a>

                                    <a href="https://tiktok.com/@bbconsultancy" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 p-3 bg-gray-50 hover:bg-black text-gray-700 hover:text-white rounded-lg transition-all duration-300 group">
                                        <div className="w-8 h-8 bg-black group-hover:bg-white rounded-full flex items-center justify-center transition-colors">
                                            <svg className="w-4 h-4 text-white group-hover:text-black" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                                            </svg>
                                        </div>
                                        <span className="font-medium">TikTok</span>
                                    </a>

                                    <a href="https://wa.me/9779841234567" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 p-3 bg-green-50 hover:bg-green-500 text-gray-700 hover:text-white rounded-lg transition-all duration-300 group">
                                        <div className="w-8 h-8 bg-green-500 group-hover:bg-white rounded-full flex items-center justify-center transition-colors">
                                            <svg className="w-4 h-4 text-white group-hover:text-green-500" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" />
                                            </svg>
                                        </div>
                                        <span className="font-medium">WhatsApp</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-10 rounded-2xl shadow-xl border border-gray-200 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
                            <div className="relative z-10">
                                <h3 className="text-4xl font-bold text-gray-900 mb-3">🎯 Book Free Consultation</h3>
                                <p className="text-gray-600 mb-8 text-lg">Fill out the form below and our counselors will get back to you within 24 hours.</p>

                                <form action={handleForm} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">First Name *</label>
                                            <input name="firstName" type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors" placeholder="Your first name" required />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name *</label>
                                            <input name="lastName" type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors" placeholder="Your last name" required />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                                        <input name="email" type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors" placeholder="your.email@example.com" required />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                                        <input name="phone" type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors" placeholder="+977-9841234567" required />
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Country</label>
                                            <select name="country" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors">
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
                                            <select name="studyLevel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors">
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
                                        <input name="fieldOfStudy" type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors" placeholder="e.g., Computer Science, Business, Engineering" />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                                        <textarea name="message" rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors" placeholder="Tell us about your educational goals, questions, or any specific requirements..."></textarea>
                                    </div>

                                    <div className="flex items-center">
                                        <input type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" required />
                                        <label className="ml-2 text-sm text-gray-600">
                                            I agree to receive communication from B&B Consultancy regarding my inquiry *
                                        </label>
                                    </div>

                                    <button type="submit" className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-lg hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg glow-effect btn-pulse">
                                        🚀 Send Message & Book Consultation
                                    </button>
                                </form>
                            </div>
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
                                action: "Email: support@bbconsultancy.com",
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