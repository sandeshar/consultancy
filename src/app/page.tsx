import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-4 py-20 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
        {/* Subtle Background */}
        <div className="absolute inset-0 bg-[url('/map.svg')] bg-no-repeat bg-center bg-cover opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tight">
              Your Gateway to{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                Global Education
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
              Transform your future with world-class international education. We guide ambitious students to their dream universities across the globe.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="/contact" className="group px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg rounded-2xl hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
              Start Your Journey
              <svg className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a href="/services" className="px-10 py-5 border-2 border-slate-300 text-slate-300 font-bold text-lg rounded-2xl hover:bg-white hover:text-slate-900 hover:border-white transform hover:scale-105 transition-all duration-300">
              Explore Services
            </a>
          </div>

          <div className="flex items-center justify-center space-x-8 text-slate-400 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">✓</span>
              </div>
              <span>1000+ Students Placed</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">25+</span>
              </div>
              <span>Countries</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">95%</span>
              </div>
              <span>Success Rate</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <svg className="w-6 h-6 text-white opacity-70 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
              Why Choose
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> B&B Consultancy</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
              We've helped over 1000 students achieve their dreams of international education with our proven approach
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="group relative p-10 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl border border-blue-100 hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Global Network</h3>
                <p className="text-slate-600 leading-relaxed text-lg">Access to 500+ partner universities across 25+ countries. We open doors to world-class institutions worldwide.</p>
              </div>
            </div>

            <div className="group relative p-10 bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl border border-purple-100 hover:shadow-2xl hover:shadow-purple-100/50 transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Expert Guidance</h3>
                <p className="text-slate-600 leading-relaxed text-lg">15+ years of experience with 95% success rate. Our counselors are your dedicated partners in success.</p>
              </div>
            </div>

            <div className="group relative p-10 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl border border-emerald-100 hover:shadow-2xl hover:shadow-emerald-100/50 transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/5 to-teal-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Complete Support</h3>
                <p className="text-slate-600 leading-relaxed text-lg">End-to-end assistance from university selection to visa approval and pre-departure orientation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
              Complete
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Education Solutions</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
              From initial consultation to successful placement, we provide comprehensive support for every step of your international education journey
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                ),
                title: "University Selection",
                description: "Expert guidance to choose the right universities and programs that match your career goals and academic background",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                ),
                title: "Application Support",
                description: "Complete assistance with applications, essays, and document preparation for admissions",
                color: "from-purple-500 to-purple-600"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ),
                title: "Visa & Language",
                description: "Complete visa guidance and IELTS/TOEFL preparation with expert instructors",
                color: "from-emerald-500 to-emerald-600"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Pre-Departure Support",
                description: "Orientation sessions, accommodation assistance, and cultural preparation for your study abroad journey"
              }
            ].map((service, index) => (
              <div key={index} className="group relative p-8 bg-white rounded-3xl border border-slate-100 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/map.svg')] bg-no-repeat bg-center bg-cover opacity-5" />
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
            Ready to Transform
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Your Future?
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-slate-300 mb-16 max-w-3xl mx-auto font-light">
            Join thousands of successful students who've transformed their lives through international education. Your journey to a world-class education starts with a single conversation.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <a href="/contact" className="group px-12 py-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-xl rounded-2xl hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-2xl">
              Book Free Consultation
              <svg className="inline-block ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a href="/services" className="px-12 py-6 border-2 border-slate-300 text-slate-300 font-bold text-xl rounded-2xl hover:bg-white hover:text-slate-900 hover:border-white transform hover:scale-105 transition-all duration-300">
              Explore Services
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-16 border-t border-slate-700">
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-3">1000+</div>
              <div className="text-slate-400 text-lg font-medium">Students Placed</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-3">25+</div>
              <div className="text-slate-400 text-lg font-medium">Countries</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-3">95%</div>
              <div className="text-slate-400 text-lg font-medium">Success Rate</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent mb-3">15+</div>
              <div className="text-slate-400 text-lg font-medium">Years Experience</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
