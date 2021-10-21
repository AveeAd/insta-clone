import Suggestion from "./Suggestion";

const Sidebar = () => {
  return (
    <section className="md:col-span-1 p-4 hidden md:block">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img
            className="h-16"
            src="/images/account_circle_black_24dp.svg"
            alt=""
          />
          <div>
            <p className="text-xs font-bold text-black">Username</p>
            <p className="text-sm font-medium">Full Name</p>
          </div>
        </div>
        <p className="text-blue-600 text-xs font-medium">switch</p>
      </div>
      <div>
        <div className="flex items-center justify-between my-4">
          <p className="font-medium">Suggestions For You</p>
          <p className="text-xs text-black font-medium">See All</p>
        </div>

        <Suggestion />
        <Suggestion />
        <Suggestion />
      </div>
    </section>
  );
};

export default Sidebar;
