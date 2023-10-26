import { useContext } from "react";
import moment from "moment";
import { DataContext } from "../../context";
import Aside from "../../components/aside/aside";
import Video from "../../components/video/video";

const Search = () => {
  const { searchVideos } = useContext(DataContext);

  console.log(searchVideos);

  return (
    <>
      <Aside />
      <main className="container mx-auto pl-64 pr-16">
        <div className="pt-[110px]">
          <div className="grid grid-cols-3 gap-x-8 gap-y-10">
            {searchVideos.map((video) => (
              <Video video={video} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};
export default Search;
