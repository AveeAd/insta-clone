import Header from "../../components/Header/Header";
import Thumbnail from "../../components/ExploreComponents/Thumbnail";

const ExplorePage = () => {
  return (
    <div>
      <Header />
      <main className=" mt-16 grid grid-cols-3 gap-4 auto-rows-min">
        <Thumbnail imglink="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWF8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" />
        <Thumbnail imglink="https://www.shaadidukaan.com/vogue/wp-content/uploads/2019/08/hug-kiss-images.jpg" />

        <Thumbnail imglink="https://www.whatsappimages.in/wp-content/uploads/2021/01/Boys-Feeling-Very-Sad-Images-Pics-Downlaod.jpg" />
        <Thumbnail
          imglink="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg"
          colspan="2"
        />
        <Thumbnail imglink="https://www.bhaktiphotos.com/wp-content/uploads/2019/01/Mahadev-Shivling-Shiva-Lingam-Images-Free-Download.jpg" />
      </main>
    </div>
  );
};

export default ExplorePage;
