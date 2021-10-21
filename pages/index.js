import Header from "../components/Header/Header";
import Main from "../components/HomePage/Main/Main";
import Content from "../components/HomePage/Main/Content";
import Stories from "../components/HomePage/Main/Stories";
import Posts from "../components/HomePage/Main/Posts";
import Sidebar from "../components/HomePage/Sidebar/Sidebar";

const HomePage = () => {
  return (
    <div className="bg-gray-100 text-gray-600">
      <Header />
      <Main>
        <Content>
          <Stories />
          <Posts />
        </Content>
        <Sidebar />
      </Main>
    </div>
  );
};

export default HomePage;
