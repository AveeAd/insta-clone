import People from "./People";
import Chats from "./Chats";

const Main = () => {
  return (
    <main className="mt-16 bg-white border-2 grid grid-cols-3">
      <People />
      <Chats />
    </main>
  );
};

export default Main;
