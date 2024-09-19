import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-transparent z-10 w-full">
      <div className="flex justify-between md:flex-row items-center my-10 px-12 text-white">

        <Link to="/">
          <h3 className="cursor-pointer text-3xl w-max max-sm:text-[1rem] text-white">
            Nayi Disha
          </h3>

        </Link>

        <nav className="flex items-center font-Arial space-x-8 mr-10">
          <Link to="/profile" className="text-white hover:text-gray-300 text-lg">
            Account
          </Link>

        </nav>
      </div>
    </header>
  );
};

export default Header;
