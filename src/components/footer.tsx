const Footer = () => {
    return (
        <>
            <footer className="flex items-center justify-between p-4 bg-gray-800 text-white">
                <p className="text-sm">© 2025 B&B. All rights reserved.</p>
                <ul className="flex space-x-4">
                    <li>
                        <a href="/privacy" className="hover:underline">
                            Privacy Policy
                        </a>
                    </li>
                    <li>
                        <a href="/terms" className="hover:underline">
                            Terms of Service
                        </a>
                    </li>
                </ul>
            </footer>
        </>
    );
};

export default Footer;