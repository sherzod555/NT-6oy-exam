import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Main = () => {
  const [videosData, setVideosData] = useState([]);

  async function getVideosData() {
    const url =
      "https://youtube-v31.p.rapidapi.com/search?part=id%2Csnippet&type=video&maxResults=50&regionCode=UZ";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "b40207ed57msh5b1111125dadd92p169be0jsn29e821f237fb",
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
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
      <main className="container mx-auto pl-60 pr-16 bg-gray-500">
        <div>
          <h1 className="text-4xl font-bold text-white">Videos</h1>
          <div className="grid grid-cols-3 gap-4">
            {videosData.map((video) => (
              <Link key={video.id.videoId} to={`/video/${video.id.videoId}`}>
                <img
                  src={video.snippet.thumbnails.medium.url}
                  alt={video.snippet.title}
                />
                <h2 className="text-white">{video.snippet.title}</h2>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};
export default Main;
