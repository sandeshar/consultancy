import Image from "next/image";

const Navbar = () => {
    const items = [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Contact", href: "/contact" },
    ];

    return (
        <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm sticky top-0 w-full z-50 border-b border-slate-200">
            <div className="flex items-center">
                <Image src="/bab.png" alt="B&B Consultancy" width={40} height={40} className="rounded-lg" />
                <span className="ml-3 text-xl font-bold text-slate-900">B&B Consultancy</span>
            </div>

            <ul className="flex space-x-8">
                {items.map((item, index) => (
                    <li key={index}>
                        <a
                            href={item.href}
                            className="text-slate-700 hover:text-blue-600 font-medium transition-colors duration-200"
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;