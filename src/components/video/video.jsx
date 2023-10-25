import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";



import Like_icon from "../../assets/like.svg"
import Share_icon from "../../assets/share.svg"
import Moredots_icon from "../../assets/moredots.svg"

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
    <>

    <div className="container mx-auto px-[75px] pb-12">
        <div className="w-[70%] pt-[110px] pb-5 border-b-2 border-b-[#C2C2C2]">
          <img className="w-full h-auto rounded-2xl"
            src={videoData?.items[0].snippet.thumbnails.medium.url}
            alt={videoData?.items[0].snippet.title}
            />
          <h2 className="text-3xl font-semibold pt-5">{videoData?.items[0].snippet.title}</h2>
          <div className="pt-3 flex justify-between items-center">
           <p className="text-[#C2C2C2] text-sm">{videoData?.items[0].statistics.viewCount} views</p>
           <div className="flex items-center gap-x-[10px]">
            <div className="flex gap-x-2 items-center px-5 py-[8px] rounded-[20px] bg-[#EBEBEB]">
              <img src={Like_icon} alt="like" />
              <p>{videoData?.items[0].statistics.likeCount}</p>
            </div>
            <div className="flex gap-x-2 items-center px-5 py-[8px] rounded-[20px] bg-[#EBEBEB]">
              <img className="-scale-y-100" src={Like_icon} alt="dislike" />
              <p>Dislikes</p>
            </div>
            <div className="flex gap-x-2 items-center px-5 py-[8px] rounded-[20px] bg-[#EBEBEB]">
              <img src={Share_icon} alt="share" />
              <p>Share</p>
            </div>
            <div>
            <img className="pl-[30px]" src={Moredots_icon} alt="more" />
            </div>
           </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Video;
