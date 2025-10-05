import Image from "next/image";

export default function About() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative flex flex-col items-center justify-center min-h-[60vh] text-center p-8 bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900">
                <div className="absolute inset-0 bg-[url('/map.svg')] bg-no-repeat bg-center bg-cover opacity-5" />

                <div className="relative z-10 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                        About <span className="text-gradient bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">BAB Consultancy</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                        Empowering students to achieve their international education dreams since 2009
                    </p>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-20 px-8 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
                            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                Founded in 2009, BAB Consultancy has been at the forefront of international education consulting in Nepal. What started as a small initiative to help local students access global education has grown into a trusted partner for thousands of students worldwide.
                            </p>
                            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                Over the years, we have built strong relationships with universities across 25+ countries, helping over 1000 students achieve their academic goals and career aspirations through quality international education.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Our commitment to excellence, personalized service, and successful outcomes has made us one of the most trusted education consultancies in the region.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 rounded-2xl text-white">
                                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                                <p className="text-lg leading-relaxed mb-6">
                                    To bridge the gap between ambitious students and world-class educational opportunities, providing comprehensive support that transforms dreams into reality.
                                </p>
                                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                                <p className="text-lg leading-relaxed">
                                    To be the leading education consultancy that empowers students globally, creating pathways to success through international education and cultural exchange.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values Section */}
            <section className="py-20 px-8 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Core Values</h2>
                    <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
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
                                specialization: "University partnerships & strategic planning"
                            },
                            {
                                name: "Priya Patel",
                                position: "Head of Student Counseling",
                                experience: "12+ years in student guidance",
                                specialization: "Application processing & visa guidance"
                            },
                            {
                                name: "Michael Johnson",
                                position: "Language Training Director",
                                experience: "10+ years in language education",
                                specialization: "IELTS, TOEFL & academic English"
                            }
                        ].map((member, index) => (
                            <div key={index} className="bg-gradient-to-b from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
                                    {member.name.split(' ').map(n => n[0]).join('')}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                                <p className="text-blue-600 font-semibold mb-4">{member.position}</p>
                                <p className="text-gray-600 mb-2">{member.experience}</p>
                                <p className="text-sm text-gray-500 italic">{member.specialization}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-20 px-8 bg-gradient-to-br from-blue-50 to-indigo-100">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16">Why Students Choose BAB Consultancy</h2>

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
                        Join thousands of successful students who have achieved their dreams with BAB Consultancy
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