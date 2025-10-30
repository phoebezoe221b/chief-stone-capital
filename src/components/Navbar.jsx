import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaServicestack, FaEnvelope } from "react-icons/fa";

export default function Navbar() {
  const menu = [
    { name: "HOME", path: "/", icon: <FaHome /> },
    { name: "ABOUT", path: "/about", icon: <FaInfoCircle /> },
    { name: "SERVICES", path: "/services", icon: <FaServicestack /> },
    { name: "CONTACT", path: "/contact", icon: <FaEnvelope /> },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md text-white flex justify-end items-center px-16 py-5 z-50">
      <ul className="flex space-x-10">
        {menu.map((item) => (
          <li key={item.name}>
            <Link
              to={item.path}
              className="flex items-center space-x-2 text-gray-300 hover:text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 transition-all duration-500 font-semibold uppercase tracking-wide"
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
