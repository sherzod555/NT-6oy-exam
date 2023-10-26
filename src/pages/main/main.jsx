import { useEffect, useContext } from "react";
import { DataContext } from "../../context";
import fetchVideos from "../../fetch.js";
import Video from "../../components/video/video";

const Main = () => {
  const { videos, setVideos } = useContext(DataContext);

  useEffect(() => {
    async function getVideosData() {
      const data = await fetchVideos(
        "https://youtube-v31.p.rapidapi.com/search?part=id%2Csnippet&type=video&maxResults=50"
      );

      setVideos(data.items);
    }

    try {
      getVideosData();
    } catch (err) {
      alert(err);
    }
  }, [setVideos]);

  return (
    <>
      <div className="pt-[110px]">
        <div className="grid grid-cols-3 gap-x-8 gap-y-10">
          {videos.map((video) => (
            <Video key={video.id.videoId} video={video} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Main;
