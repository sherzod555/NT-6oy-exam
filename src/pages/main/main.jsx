import { useEffect, useState, useContext } from "react";
import { DataContext } from "../../context";
import fetchVideos from "../../fetch.js";
import Aside from "../../components/aside/aside";
import Video from "../../components/video/video";

const Main = () => {
  const { videos, setVideos } = useContext(DataContext);

  async function getVideosData() {
    const data = await fetchVideos(
      "https://youtube-v31.p.rapidapi.com/search?part=id%2Csnippet&type=video&maxResults=50"
    );

    setVideos(data.items);
  }

  useEffect(() => {
    try {
      getVideosData();
    } catch (err) {
      alert(err);
    }
  }, []);

  return (
    <>
      <Aside />
      <main className="container mx-auto pl-64 pr-16">
        <div className="pt-[110px]">
          <div className="grid grid-cols-3 gap-x-8 gap-y-10">
            {videos.map((video) => (
              <Video video={video} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};
export default Main;
