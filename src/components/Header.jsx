import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between md:flex-row items-center py-3 px-6 mb-14 mt-2 bg-transparent absolute top-0 left-0 right-0 z-10">
      <Link to="/">
        <div>
          <h3 className="cursor-pointer text-3xl  max-sm:text-[1rem] text-white">
            Nayi Disha
          </h3>
        </div>
      </Link>

      {/* Navigation Links */}
      <nav className="flex items-center font-Arial space-x-8 mr-10">
        <Link to="/" className="text-white hover:text-gray-300 text-lg">
          Home
        </Link>
        <Link to="/about" className="text-white hover:text-gray-300 text-lg">
          About
        </Link>
        <Link to="/login" className="text-white hover:text-gray-300 text-lg">
          LOG IN
        </Link>
      </nav>
    </header>
  );
};

export default Header;
