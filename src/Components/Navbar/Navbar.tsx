import { Button } from "../ui/button";
import reactLogo from "../../assets/react.svg";

const Navbar = () => {
  return (
    <div className=" border-b pb-3">
      <div className="mx-20 flex justify-between items-center mt-[20px]">
        <div className="logo">
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <div className="flex items-center">
          <nav>
            <ul className="flex gap-6 text-xs uppercase">
              <li>
                <a href="#" className="text-gray-400 hover:text-gray-600 ">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  Services
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="login flex gap-4">
          <Button variant="secondary" size="sm">
            Login In
          </Button>
          <Button size="sm" className="bg-blue-600">
            Sign In
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
