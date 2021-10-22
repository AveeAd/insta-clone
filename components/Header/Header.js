import {
  FaHome,
  FaCompass,
  FaFacebookMessenger,
  FaHeart,
  FaUserCircle,
} from "react-icons/fa";

import Link from "next/link";

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
      <Link href="/">
        <img
          className="h-7 cursor-pointer"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="instagram"
        />
      </Link>
      <input
        className="bg-gray-100 hidden md:block border-2 h-7 md:w-60 text-center"
        type="text"
        placeholder="Search"
      />
      <nav>
        <ul className="flex space-x-4 items-center">
          <li>
            <Link href="/">
              <FaHome className="cursor-pointer text-2xl" />
            </Link>
          </li>
          <li>
            <Link href="/message">
              <FaFacebookMessenger className="cursor-pointer text-2xl" />
            </Link>
          </li>
          <li>
            <Link href="/explore">
              <FaCompass className="cursor-pointer text-2xl" />
            </Link>
          </li>
          <li>
            <FaHeart className="cursor-pointer text-2xl" />
          </li>
          <li>
            <FaUserCircle className="cursor-pointer text-2xl" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
