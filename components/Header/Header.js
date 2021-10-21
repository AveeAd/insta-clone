import {
  FaHome,
  FaCompass,
  FaFacebookMessenger,
  FaHeart,
  FaUserCircle,
} from "react-icons/fa";

const iconStyles = {
  fontSize: "1.7rem",
};

const Header = () => {
  return (
    <header
      className="
        px-auto
        bg-white
        flex
        fixed
        justify-between
        items-center
        hmargin
        h-12
        w-full
        top-0
      "
    >
      <img
        className="h-7"
        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
        alt="instagram"
      />
      <input
        className="bg-gray-100 hidden md:block border-2 h-7 md:w-60 text-center"
        type="text"
        placeholder="Search"
      />
      <nav>
        <ul className="flex space-x-4 items-center">
          <li>
            <FaHome style={iconStyles} />
          </li>
          <li>
            <FaFacebookMessenger style={iconStyles} />
          </li>
          <li>
            <FaCompass style={iconStyles} />
          </li>
          <li>
            <FaHeart style={iconStyles} />
          </li>
          <li>
            <FaUserCircle style={iconStyles} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
