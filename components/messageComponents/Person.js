const Person = () => {
  return (
    <div className="flex items-center my-2">
      <img
        className="h-16"
        src="/images/account_circle_black_24dp.svg"
        alt=""
      />
      <div>
        <p className="text-sm text-black">username</p>
        <p className="text-xs">message.&nbsp;1w</p>
      </div>
    </div>
  );
};

export default Person;
