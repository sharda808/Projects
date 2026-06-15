import { Download } from "lucide-react";

const Navbar = () => {
  const navItems = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Achievements",
    "Education",
    "Contact",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#050816]/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-3xl font-bold text-purple-500">
          sharda<span className="text-white">.</span>
        </h1>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-8 text-white font-medium">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-purple-400 transition duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Resume Button */}
        <a
          href="/Sharda_Jha_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 border border-purple-500 text-purple-400 px-5 py-2 rounded-xl hover:bg-purple-600 hover:text-white transition duration-300"
        >
          <Download size={18} />
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;