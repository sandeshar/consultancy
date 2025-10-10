import Image from "next/image";

export default function About() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative flex flex-col items-center justify-center min-h-[70vh] text-center px-4 py-32 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
                <div className="absolute inset-0 bg-[url('/map.svg')] bg-no-repeat bg-center bg-cover opacity-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />

                <div className="relative z-10 max-w-5xl mx-auto space-y-8">
                    <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
                        About <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">B&B Consultancy</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto font-light">
                        Empowering ambitious students to achieve their international education dreams since 2009
                    </p>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-32 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-8">
                            <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-tight">
                                Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Story</span>
                            </h2>
                            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                                <p>
                                    Founded in 2009, B&B Consultancy began as a vision to bridge the gap between ambitious Nepalese students and world-class international education. What started as a small initiative has evolved into a trusted partner for thousands of students across the globe.
                                </p>
                                <p>
                                    Over 15 years, we've cultivated strong partnerships with 500+ universities across 25+ countries, helping over 1000 students transform their lives through quality international education. Our success stories span from undergraduate programs to PhD research opportunities.
                                </p>
                                <p>
                                    Our unwavering commitment to excellence, personalized service, and proven results has established us as the most trusted education consultancy in the region.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-10 rounded-3xl text-white shadow-2xl">
                                <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
                                <p className="text-lg leading-relaxed mb-8 font-light">
                                    To bridge the gap between ambitious students and world-class educational opportunities, providing comprehensive support that transforms dreams into reality.
                                </p>
                                <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
                                <p className="text-lg leading-relaxed font-light">
                                    To be the leading education consultancy that empowers students globally, creating pathways to success through international education and cultural exchange.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values Section */}
            <section className="py-32 px-4 bg-gradient-to-b from-slate-50 to-white">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
                        Our Core <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Values</span>
                    </h2>
                    <p className="text-xl text-slate-600 mb-20 max-w-3xl mx-auto font-light">
                        The principles that guide everything we do
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: (
                                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                ),
                                title: "Integrity",
                                description: "We maintain the highest standards of honesty and transparency in all our interactions."
                            },
                            {
                                icon: (
                                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                ),
                                title: "Excellence",
                                description: "We strive for perfection in every aspect of our service delivery and student support."
                            },
                            {
                                icon: (
                                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                ),
                                title: "Personalized Care",
                                description: "Every student receives individual attention tailored to their unique needs and goals."
                            },
                            {
                                icon: (
                                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                                    </svg>
                                ),
                                title: "Global Perspective",
                                description: "We provide comprehensive insights into international education and cultural diversity."
                            }
                        ].map((value, index) => (
                            <div key={index} className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white mx-auto mb-6">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 px-8 bg-white">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Meet Our Expert Team</h2>
                    <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
                        Experienced professionals dedicated to your success
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Rajesh Sharma",
                                position: "Founder & CEO",
                                experience: "15+ years in education consulting",
                                specialization: "University partnerships & strategic planning",
                                emoji: "👨‍💼"
                            },
                            {
                                name: "Priya Patel",
                                position: "Head of Student Counseling",
                                experience: "12+ years in student guidance",
                                specialization: "Application processing & visa guidance",
                                emoji: "👩‍🎓"
                            },
                            {
                                name: "Michael Johnson",
                                position: "Language Training Director",
                                experience: "10+ years in language education",
                                specialization: "IELTS, TOEFL & academic English",
                                emoji: "👨‍🏫"
                            }
                        ].map((member, index) => (
                            <div key={index} className="bg-gradient-to-b from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 card-hover relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="relative z-10">
                                    <div className="w-28 h-28 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl">
                                        {member.emoji}
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{member.name}</h3>
                                    <p className="text-blue-600 font-semibold mb-4 text-lg">{member.position}</p>
                                    <p className="text-gray-600 mb-3 font-medium">⏱️ {member.experience}</p>
                                    <p className="text-sm text-gray-500 italic bg-gray-100 p-3 rounded-lg">🎯 {member.specialization}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-20 px-8 bg-gradient-to-br from-blue-50 to-indigo-100">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16">Why Students Choose B&B Consultancy</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: "🏆",
                                title: "Proven Track Record",
                                description: "95% visa success rate with over 1000 successful student placements"
                            },
                            {
                                icon: "🌍",
                                title: "Global Network",
                                description: "Partnerships with top universities across 25+ countries worldwide"
                            },
                            {
                                icon: "👨‍🎓",
                                title: "Expert Counselors",
                                description: "Experienced team with deep knowledge of international education systems"
                            },
                            {
                                icon: "💡",
                                title: "Personalized Approach",
                                description: "Customized guidance based on individual student profiles and career goals"
                            },
                            {
                                icon: "📚",
                                title: "Comprehensive Services",
                                description: "End-to-end support from university selection to pre-departure orientation"
                            },
                            {
                                icon: "⚡",
                                title: "Quick Processing",
                                description: "Streamlined application processes with faster turnaround times"
                            }
                        ].map((feature, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                                <div className="text-4xl mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-8 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Ready to Start Your Journey?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Join thousands of successful students who have achieved their dreams with B&B Consultancy
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold rounded-full hover:from-yellow-500 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-2xl">
                            Book Free Consultation
                        </a>
                        <a href="/services" className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-blue-900 transform hover:scale-105 transition-all duration-300">
                            Explore Services
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}