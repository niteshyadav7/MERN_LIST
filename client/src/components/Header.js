import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <ul>
        <Link to="/">
          <li>Add User</li>
        </Link>
        <Link to="/show">
          <li>Show User</li>
        </Link>
      </ul>
    </>
  );
};
export default Header;
