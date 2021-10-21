const index = () => {
  return (
    <div
      style={{ height: "100vh", width: "100vw" }}
      className="
    flex
    justify-center
    items-center
    "
    >
      <div
        className="
      bg-white
      h-96
      w-96
      border-2
      flex
      flex-col
      items-center
      justify-center
      space-y-8
      rounded-lg
      "
      >
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
        <input
          className="border-b-2 focus:border-red-400"
          type="text"
          placeholder="Email"
        />
        <input
          className="border-b-2 focus:border-red-400"
          type="password"
          placeholder="Password"
        />
        <button className="btn bg-red-500 hover:bg-red-400 py-2 px-4 text-white rounded-lg">
          Log In
        </button>
        <small>Forget Password?</small>
        <small>Don't have an account?</small>
      </div>
    </div>
  );
};

export default index;
