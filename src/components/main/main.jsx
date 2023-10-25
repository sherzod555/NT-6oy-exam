import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Aside from "../aside/aside"

const Main = () => {
  const [videosData, setVideosData] = useState([]);

  async function getVideosData() {
    const url =
      "https://youtube-v31.p.rapidapi.com/search?part=id%2Csnippet&type=video&maxResults=50&regionCode=UZ";
    const options = {
      method: "GET",
      headers: {
        'X-RapidAPI-Key': 'b40207ed57msh5b1111125dadd92p169be0jsn29e821f237fb',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
      },
    };
    const res = await fetch(url, options);
    const data = await res.json();
    setVideosData(data.items);
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
    <Aside/>
      <main className="container mx-auto pl-60 pr-16">
        <div className="pt-[110px]">
          <div className="grid grid-cols-4 gap-x-8 gap-y-10">
            {videosData.map((video) => (
              <Link key={video.id.videoId} to={`/video/${video.id.videoId}`}>
                <img
                  className="rounded-2xl"
                  src={video.snippet.thumbnails.medium.url}
                  alt={video.snippet.title}
                />
                
                    <p className="pt-[10px] text-base font-semibold line-clamp-1">{video.snippet.title}</p>
                    <div className="pt-2 flex items-center justify-between text-[#C2C2C2] text-xs">
                        <div className="flex gap-x-2 items-center">
                            <p> 800 views</p>
                            <p>•</p>
                            <p>3 days ago</p>
                        </div>
                        <div>
                            <p>Abella Danger</p>
                        </div>
                    </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};
export default Main;
