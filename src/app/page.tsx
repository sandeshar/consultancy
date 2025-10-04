import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[90vh] text-center p-8 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('/map.svg')] bg-no-repeat bg-center bg-cover opacity-10" />

        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in-up">
            <h1 className="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 leading-tight">
              Opening doors to
              <span className="block text-gradient bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                global success
              </span>
            </h1>
          </div>

          <p className="mt-8 text-xl md:text-2xl max-w-3xl mx-auto text-blue-100 leading-relaxed animate-fade-in-up animation-delay-500">
            At <span className="font-bold text-white">BAB Consultancy</span>, we specialize in connecting businesses with top-tier talent from around the world. Our mission is to help you find the perfect candidates who can drive your business forward.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up animation-delay-1000">
            <a href="/services" className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-full hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-2xl">
              <span className="flex items-center justify-center gap-2">
                Explore Services
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </a>
            <a href="/contact" className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-blue-900 transform hover:scale-105 transition-all duration-300">
              Get Started
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">BAB Consultancy</span>?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Feature Cards */}
            <div className="group p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Global Reach</h3>
              <p className="text-gray-600 leading-relaxed">Access to talent from every corner of the world, breaking geographical barriers for your business growth.</p>
            </div>

            <div className="group p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Screening</h3>
              <p className="text-gray-600 leading-relaxed">Rigorous vetting process ensures you get only the most qualified and reliable candidates.</p>
            </div>

            <div className="group p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">End-to-End Support</h3>
              <p className="text-gray-600 leading-relaxed">From initial sourcing to successful integration, we support you throughout the entire hiring journey.</p>
            </div>
          </div>

          <p className="max-w-3xl mx-auto text-xl text-gray-700 leading-relaxed">
            We understand the challenges of hiring in a global market. Our team of experts is dedicated to providing
            <span className="font-semibold text-blue-600"> personalized solutions</span> that meet your unique needs.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-8 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Comprehensive solutions for all your global hiring needs</p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                ),
                title: "Global Talent Sourcing",
                description: "Tap into our extensive network to find the perfect candidates worldwide"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                ),
                title: "Candidate Screening",
                description: "Rigorous evaluation process to ensure quality and cultural fit"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                ),
                title: "Onboarding Support",
                description: "Smooth integration process for new hires into your organization"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ),
                title: "Compliance Guidance",
                description: "Navigate complex legal requirements across different jurisdictions"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 109.75 9.75A9.75 9.75 0 0012 2.25z" />
                  </svg>
                ),
                title: "Ongoing HR Support",
                description: "Continuous support to ensure long-term success of your hires"
              }
            ].map((service, index) => (
              <div key={index} className="group p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-200">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Transform Your
            <span className="block text-gradient bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Hiring Strategy?
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Take your business to the next level with global talent. Contact us today to learn more about how we can help you achieve your hiring goals.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="/contact" className="group px-10 py-5 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold rounded-full hover:from-yellow-500 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-2xl text-lg">
              <span className="flex items-center justify-center gap-2">
                Start Your Journey
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </a>
            <a href="/about" className="px-10 py-5 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-blue-900 transform hover:scale-105 transition-all duration-300 text-lg">
              Learn More
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-blue-200">Successful Placements</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-blue-200">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">98%</div>
              <div className="text-blue-200">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-blue-200">Support</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
