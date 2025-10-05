import Image from "next/image";

export default function Services() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative flex flex-col items-center justify-center min-h-[60vh] text-center p-8 bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900">
                <div className="absolute inset-0 bg-[url('/map.svg')] bg-no-repeat bg-center bg-cover opacity-5" />

                <div className="relative z-10 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                        Our <span className="text-gradient bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Services</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                        Comprehensive support for your international education journey
                    </p>
                </div>
            </section>

            {/* Main Services Section */}
            <section className="py-20 px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Complete Education Solutions</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            From initial counseling to successful placement, we provide end-to-end support for your study abroad dreams
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: (
                                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                    </svg>
                                ),
                                title: "University & Course Selection",
                                description: "Expert guidance to choose the right universities and programs that align with your career goals, academic background, and budget.",
                                features: ["Country & university research", "Course matching", "Admission requirements analysis", "Career pathway planning"]
                            },
                            {
                                icon: (
                                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                    </svg>
                                ),
                                title: "Application Processing",
                                description: "Complete assistance with application forms, essays, recommendations, and document preparation to maximize your chances of admission.",
                                features: ["Application form completion", "Statement of Purpose writing", "Letter of Recommendation guidance", "Document verification"]
                            },
                            {
                                icon: (
                                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                    </svg>
                                ),
                                title: "Language Training",
                                description: "Comprehensive IELTS, TOEFL, PTE, and Duolingo preparation courses with experienced instructors and proven methodologies.",
                                features: ["IELTS preparation classes", "TOEFL coaching", "PTE training", "Academic English courses"]
                            },
                            {
                                icon: (
                                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                ),
                                title: "Visa Assistance",
                                description: "Expert support for visa applications, documentation preparation, and interview coaching to ensure successful visa approval.",
                                features: ["Visa application guidance", "Document checklist", "Interview preparation", "Embassy liaison"]
                            },
                            {
                                icon: (
                                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                ),
                                title: "Financial Planning & Scholarships",
                                description: "Guidance on education costs, scholarship opportunities, education loans, and budget planning for your studies abroad.",
                                features: ["Scholarship search & application", "Education loan assistance", "Budget planning", "Financial documentation"]
                            },
                            {
                                icon: (
                                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                ),
                                title: "Pre-Departure Services",
                                description: "Complete preparation for your journey including accommodation, travel arrangements, and cultural orientation sessions.",
                                features: ["Pre-departure orientation", "Accommodation assistance", "Travel booking support", "Cultural preparation"]
                            }
                        ].map((service, index) => (
                            <div key={index} className="group p-8 bg-gradient-to-b from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-200">
                                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{service.title}</h3>
                                <p className="text-gray-600 leading-relaxed mb-6 text-center">{service.description}</p>
                                <ul className="space-y-2">
                                    {service.features.map((feature, fIndex) => (
                                        <li key={fIndex} className="flex items-center text-sm text-gray-600">
                                            <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Language Courses Section */}
            <section className="py-20 px-8 bg-gradient-to-br from-blue-50 to-indigo-100">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Language Preparation Courses</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Achieve your target scores with our comprehensive language training programs
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                title: "IELTS Preparation",
                                description: "Complete IELTS training for all four modules",
                                duration: "2-3 months",
                                features: ["Speaking practice sessions", "Writing task coaching", "Reading comprehension", "Listening exercises", "Mock tests"]
                            },
                            {
                                title: "TOEFL Coaching",
                                description: "Comprehensive TOEFL iBT preparation program",
                                duration: "2-3 months",
                                features: ["Computer-based training", "Integrated tasks practice", "Academic vocabulary", "Note-taking strategies", "Practice tests"]
                            },
                            {
                                title: "PTE Training",
                                description: "Pearson Test of English preparation course",
                                duration: "1-2 months",
                                features: ["Computer-delivered format", "Speaking & writing integration", "AI-based scoring practice", "Time management", "Regular assessments"]
                            },
                            {
                                title: "Academic English",
                                description: "General academic English enhancement",
                                duration: "3-6 months",
                                features: ["Grammar improvement", "Academic writing skills", "Presentation techniques", "Research methodology", "Critical thinking"]
                            }
                        ].map((course, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{course.title}</h3>
                                <p className="text-gray-600 mb-4">{course.description}</p>
                                <div className="text-sm text-blue-600 font-semibold mb-4">Duration: {course.duration}</div>
                                <ul className="space-y-2">
                                    {course.features.map((feature, fIndex) => (
                                        <li key={fIndex} className="flex items-center text-sm text-gray-600">
                                            <svg className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Country-Specific Services */}
            <section className="py-20 px-8 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Study Destinations</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We help students get admitted to top universities in these popular study destinations
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                country: "🇺🇸 United States",
                                universities: "500+ Partner Universities",
                                programs: "All major fields of study",
                                highlights: ["Top-ranked universities", "Research opportunities", "OPT work authorization", "Diverse campus life"]
                            },
                            {
                                country: "🇨🇦 Canada",
                                universities: "200+ Partner Universities",
                                programs: "Undergraduate & Graduate",
                                highlights: ["Post-graduation work permit", "Immigration pathways", "Quality education", "Multicultural environment"]
                            },
                            {
                                country: "🇬🇧 United Kingdom",
                                universities: "150+ Partner Universities",
                                programs: "All disciplines available",
                                highlights: ["World-class education", "1-year master's programs", "Rich cultural heritage", "Research excellence"]
                            },
                            {
                                country: "🇦🇺 Australia",
                                universities: "100+ Partner Universities",
                                programs: "Vocational & Higher Education",
                                highlights: ["Work while study", "Post-study work visa", "High quality of life", "Innovation focus"]
                            },
                            {
                                country: "🇩🇪 Germany",
                                universities: "80+ Partner Universities",
                                programs: "Engineering & Technology focus",
                                highlights: ["Low tuition fees", "Strong economy", "Industry connections", "Research opportunities"]
                            },
                            {
                                country: "🇳🇿 New Zealand",
                                universities: "50+ Partner Universities",
                                programs: "All major disciplines",
                                highlights: ["Safe environment", "Work opportunities", "Natural beauty", "Quality education system"]
                            }
                        ].map((destination, index) => (
                            <div key={index} className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow duration-300">
                                <h3 className="text-2xl font-bold mb-3">{destination.country}</h3>
                                <p className="text-blue-600 font-semibold mb-2">{destination.universities}</p>
                                <p className="text-gray-600 mb-4">{destination.programs}</p>
                                <ul className="space-y-1">
                                    {destination.highlights.map((highlight, hIndex) => (
                                        <li key={hIndex} className="flex items-center text-sm text-gray-600">
                                            <svg className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                            {highlight}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 px-8 bg-gradient-to-br from-gray-50 to-blue-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Process</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            A systematic approach to ensure your success in international education
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                step: "01",
                                title: "Initial Consultation",
                                description: "Free counseling session to understand your goals, preferences, and academic background"
                            },
                            {
                                step: "02",
                                title: "University Selection",
                                description: "Shortlist universities and courses based on your profile, preferences, and career goals"
                            },
                            {
                                step: "03",
                                title: "Application & Preparation",
                                description: "Complete application process, document preparation, and language test preparation if needed"
                            },
                            {
                                step: "04",
                                title: "Visa & Departure",
                                description: "Visa assistance, pre-departure orientation, and support until you reach your destination"
                            }
                        ].map((process, index) => (
                            <div key={index} className="text-center group">
                                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                    <span className="text-white text-xl font-bold">{process.step}</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{process.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{process.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-8 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Ready to Begin Your Journey?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Book a free consultation with our expert counselors and take the first step towards your international education
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <a href="/contact" className="px-10 py-5 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold rounded-full hover:from-yellow-500 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-2xl text-lg">
                            Book Free Consultation
                        </a>
                        <a href="/about" className="px-10 py-5 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-blue-900 transform hover:scale-105 transition-all duration-300 text-lg">
                            Learn About Us
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}