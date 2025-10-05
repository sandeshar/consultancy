const Footer = () => {
    return (
        <>
            <footer className="bg-gray-900 text-white">
                {/* Main Footer Content */}
                <div className="max-w-6xl mx-auto px-8 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {/* Company Info */}
                        <div className="md:col-span-2">
                            <h3 className="text-2xl font-bold mb-4 text-gradient bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                                B&B Consultancy
                            </h3>
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                Your trusted partner for international education. We help students achieve their dreams of studying abroad at top universities worldwide.
                            </p>
                            <div className="space-y-2 text-gray-300">
                                <p>📧 info@bbconsultancy.com</p>
                                <p>📞 +977-1-4567890</p>
                                <p>📍 Kathmandu, Nepal</p>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                <li><a href="/about" className="text-gray-300 hover:text-blue-400 transition-colors">About Us</a></li>
                                <li><a href="/services" className="text-gray-300 hover:text-blue-400 transition-colors">Services</a></li>
                                <li><a href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</a></li>
                                <li><a href="/privacy" className="text-gray-300 hover:text-blue-400 transition-colors">Privacy Policy</a></li>
                                <li><a href="/terms" className="text-gray-300 hover:text-blue-400 transition-colors">Terms of Service</a></li>
                            </ul>
                        </div>

                        {/* Follow Us */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                            <div className="flex flex-col space-y-3">
                                <a href="https://facebook.com/bbconsultancy" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors group">
                                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                        </svg>
                                    </div>
                                    <span>Facebook</span>
                                </a>

                                <a href="https://instagram.com/bbconsultancy" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-300 hover:text-pink-400 transition-colors group">
                                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center group-hover:from-purple-400 group-hover:to-pink-400 transition-all">
                                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.611-3.197-1.559-.748-.948-.748-2.183 0-3.131.749-.948 1.9-1.559 3.197-1.559s2.448.611 3.197 1.559c.748.948.748 2.183 0 3.131-.749.948-1.9 1.559-3.197 1.559zm7.718 0c-1.297 0-2.448-.611-3.197-1.559-.748-.948-.748-2.183 0-3.131.749-.948 1.9-1.559 3.197-1.559s2.448.611 3.197 1.559c.748.948.748 2.183 0 3.131-.749.948-1.9 1.559-3.197 1.559z" />
                                        </svg>
                                    </div>
                                    <span>Instagram</span>
                                </a>

                                <a href="https://linkedin.com/company/bbconsultancy" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-300 hover:text-blue-500 transition-colors group">
                                    <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    </div>
                                    <span>LinkedIn</span>
                                </a>

                                <a href="https://youtube.com/@bbconsultancy" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-300 hover:text-red-500 transition-colors group">
                                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center group-hover:bg-red-500 transition-colors">
                                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                        </svg>
                                    </div>
                                    <span>YouTube</span>
                                </a>

                                <a href="https://tiktok.com/@bbconsultancy" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-300 hover:text-black transition-colors group">
                                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center group-hover:bg-gray-800 transition-colors">
                                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                                        </svg>
                                    </div>
                                    <span>TikTok</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="border-t border-gray-800 py-6">
                    <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
                        <p>© 2025 B&B Consultancy. All rights reserved.</p>
                        <p>Designed by <a href="https://www.aryalsandesh.com.np/" className="font-semibold text-blue-400 hover:text-blue-300 transition-colors">Sandesh Aryal</a></p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;