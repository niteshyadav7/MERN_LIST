import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="box bg-gray-700 font-sans">
      <ul className="flex justify-center p-4">
        <div className="rounded-xl">
        <Link to="/">
          <li className="ml-20  hover:text-red-400 text-2xl font-bold rounded-lg ">
            Add User
          </li>
        </Link>
        </div>
        <div className="rounded-xl">
        <Link to="/show">
          <li className="ml-20  hover:text-red-400 text-2xl font-bold rounded-lg">
            Show User
          </li>
        </Link>
        </div>
      </ul>
    </div>
  );
};
export default Header;
