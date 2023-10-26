import { useContext } from "react";
import { DataContext } from "../../context";
import Video from "../../components/video/video";

const Search = () => {
  const { searchVideos } = useContext(DataContext);

  return (
    <>
      <div className="pt-[110px]">
        <div className="grid grid-cols-3 gap-x-8 gap-y-10">
          {searchVideos.map((video) => (
            <Video key={video.id.videoId} video={video} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Search;
