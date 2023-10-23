import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Video = () => {
  const { videoId } = useParams();

  const [videoData, setVideoData] = useState();

  async function getVideosData() {
    const url = `https://youtube-v31.p.rapidapi.com/videos?part=contentDetails%2Csnippet%2Cstatistics&id=${videoId}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "b40207ed57msh5b1111125dadd92p169be0jsn29e821f237fb",
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
      },
    };
    const res = await fetch(url, options);
    const data = await res.json();
    console.log(data);
    setVideoData(data);
  }

  useEffect(() => {
    try {
      getVideosData();
    } catch (err) {
      alert(err);
    }
  }, []);

  return (
    <div className="container mx-auto pl-60 pr-16 bg-gray-500">
      <div className="grid grid-cols-3 gap-4">
        <div>
          <img
            src={videoData?.items[0].snippet.thumbnails.medium.url}
            alt={videoData?.items[0].snippet.title}
          />
          <h2 className="text-white">{videoData?.items[0].snippet.title}</h2>
        </div>
      </div>
    </div>
  );
};

export default Video;
