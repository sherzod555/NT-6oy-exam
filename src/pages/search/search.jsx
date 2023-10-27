import { useContext } from "react";
import { DataContext } from "../../context";
import Video from "../../components/video/video";

const Search = () => {
  const { searchVideos } = useContext(DataContext);

  return (
    <>
      <div className="pt-[110px]">
        <div className="grid gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3 sm:gap-x-8 sm:gap-y-10">
          {searchVideos.map((video) => (
            <Video key={video.id.videoId} video={video} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Search;
