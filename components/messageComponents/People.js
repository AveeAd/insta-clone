import { FaEdit, FaChevronDown } from "react-icons/fa";
import Person from "./Person";

const People = () => {
  return (
    <section className="col-span-1 border-r-2 border-gray-400 h-full ">
      <div className="text-center text-black border-b-2  border-gray-300 p-4">
        <span>
          username <FaChevronDown className="inline" />
        </span>
        <FaEdit className=" inline-block float-right text-2xl text-right" />
      </div>
      <div className="p-4 h-full">
        <div className="flex justify-between ">
          <p className="font-medium">Messages</p>
          <p className="text-blue-500 font-medium text-sm">1 Request</p>
        </div>
        <div className="h-5/6 overflow-y-auto">
          <Person />
          <Person />
          <Person />
          <Person />
          <Person />
          <Person />
          <Person />
        </div>
      </div>
    </section>
  );
};

export default People;
