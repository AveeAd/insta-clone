import React from "react";

const Suggestion = () => {
  return (
    <div className="flex items-center justify-between my-4">
      <div className="flex items-center">
        <img
          className="h-10"
          src="/images/account_circle_black_24dp.svg"
          alt=""
        />
        <div>
          <p className="text-xs text-black font-bold">Username</p>
          <p className="text-sm">Followed By Falano</p>
        </div>
      </div>
      <p className="text-xs text-blue-600 font-medium">Follow</p>
    </div>
  );
};

export default Suggestion;
