import { FaInfoCircle } from "react-icons/fa";
import Chatbox from "./Chatbox";

const Chats = () => {
  return (
    <section className="col-span-2">
      <div className="flex items-center justify-between border-b-2 border-gray-300 p-4">
        <div className="flex items-center">
          <img
            className="mx-2"
            src="images/account_circle_black_24dp.svg"
            alt=""
          />
          <span className="text-black">username</span>
        </div>
        <FaInfoCircle className="text-lg" />
      </div>
      <Chatbox />
    </section>
  );
};

export default Chats;
