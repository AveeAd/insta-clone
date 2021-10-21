import { FaEllipsisH } from "react-icons/fa";

const Post = () => {
  return (
    <section className="bg-white my-4 p-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-1">
          <img
            className="h-10"
            src="/images/account_circle_black_24dp.svg"
            alt=""
          />
          <p className="text-sm text-black font-medium">username</p>
        </div>
        <FaEllipsisH style={{ fontSize: "1.2rem" }} />
      </div>
      <div className="w-full h-96 bg-gray-600"></div>
    </section>
  );
};

export default Post;
