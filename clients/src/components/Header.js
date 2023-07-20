import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="m-0 p-0 bg-gray-800 h-20 rounded-lg">
        <ul className="p-5 flex justify-center">
          <Link to="/">
            <li className="font-bold text-lg ml-20 cursor-pointer">Home</li>
          </Link>
          <Link to="/showuser">
            <li className="font-bold text-lg ml-20 cursor-pointer">Add User</li>
          </Link>
        </ul>
      </div>
    </>
  );
};
export default Header;
