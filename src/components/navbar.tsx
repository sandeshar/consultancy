import Image from "next/image";

const Navbar = () => {
    const items = {
        home: { label: "Home", href: "/" },
        about: { label: "About", href: "/about" },
        services: { label: "Services", href: "/services" },
        contact: { label: "Contact", href: "/contact" },
    };
    return (
        <>
            <nav className="flex items-center justify-between p-4 px-6 text-lg font-semibold bg-white shadow-md">
                <Image src="/bab.png" alt="Logo" width={50} height={50} />
                <ul className="flex space-x-6">
                    {Object.entries(items).map(([key, { label, href }]) => (
                        <li key={key} className="relative">
                            <a href={href} className="hover:text-blue-600 duration-200 relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-[-4px] after:left-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full">{label}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
};

export default Navbar;