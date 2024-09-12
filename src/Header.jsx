import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between md:flex-row items-center my-10 px-12  bg-transparent z-10">
      <Link to="/">
        <div>
          <h3 className="cursor-pointer text-3xl  max-sm:text-[1rem] text-white">
            Nayi Disha
          </h3>
        </div>
      </Link>

      {/* Navigation Links */}
      <nav className="flex items-center font-Arial space-x-8 mr-10">
        <Link to="/profile" className="text-white hover:text-gray-300 text-lg">
          Account
        </Link>
        
      </nav>
    </header>
  );
};

export default Header;
