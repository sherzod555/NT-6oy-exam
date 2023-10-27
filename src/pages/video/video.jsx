import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import fetchVideos from "../../fetch.js";
import Like_icon from "../../assets/like.svg";
import Share_icon from "../../assets/share.svg";
import Moredots_icon from "../../assets/moredots.svg";

const Video = () => {
  const { videoId } = useParams();

  const [videoData, setVideoData] = useState();

  useEffect(() => {
    async function getVideosData() {
      const data = await fetchVideos(
        `https://youtube-v31.p.rapidapi.com/videos?part=contentDetails%2Csnippet%2Cstatistics&id=${videoId}`
      );
      setVideoData(data);
      console.log(data);
    }

    try {
      getVideosData();
    } catch (err) {
      alert(err);
    }
  }, [videoId]);

  const formatViewCount = (viewCount) => {
    if (viewCount !== undefined) {
      if (viewCount >= 1000000) {
        return (viewCount / 1000000).toFixed(1) + "M";
      } else if (viewCount >= 1000) {
        return (viewCount / 1000).toFixed(1) + "K";
      } else {
        return viewCount.toString();
      }
    } else {
      return "0";
    }
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <>
      <div className="container mx-auto px-4 sm:px-[75px] pb-12">
        <div className="sm:w-full md:w-[70%] pt-[110px]">
          <div className="pb-5 border-b-2 border-b-[#C2C2C2]">
            <img
              className="w-full h-auto rounded-2xl"
              src={videoData?.items[0].snippet.thumbnails.maxres.url}
              alt={videoData?.items[0].snippet.title}
            />
            <h2 className="md:text-3xl sm:text-2xl text-xl font-semibold pt-3 sm:pt-5">
              {videoData?.items[0].snippet.title}
            </h2>
            <div className="sm:pt-3 pt-1 grid  lg:flex justify-between items-center">
              <p className="text-[#C2C2C2] text-xs sm:text-sm">
                {formatViewCount(videoData?.items[0].statistics.viewCount)}{" "}
                views
              </p>
              <div className="mt-5 lg:mt-0 md:text-base text-xs flex items-center gap-x-[10px]">
                <button className="flex gap-x-2 items-center px-5 py-[8px] rounded-[20px] bg-[#EBEBEB] hover:bg-[#d5d5d5]">
                  <img src={Like_icon} alt="like" />
                  <p>
                    {formatViewCount(videoData?.items[0].statistics.likeCount)}{" "}
                    Likes
                  </p>
                </button>
                <button className="flex gap-x-2 items-center px-5 py-[8px] rounded-[20px] bg-[#EBEBEB] hover:bg-[#d5d5d5]">
                  <img className="-scale-y-100" src={Like_icon} alt="dislike" />
                  <p>Dislikes</p>
                </button>
                <button className="flex gap-x-2 items-center px-5 py-[8px] rounded-[20px] bg-[#EBEBEB] hover:bg-[#d5d5d5]">
                  <img src={Share_icon} alt="share" />
                  <p>Share</p>
                </button>
                <button>
                  <img className="ml-[30px]" src={Moredots_icon} alt="more" />
                </button>
              </div>
            </div>
          </div>

          <div className="sm:flex pt-6 sm:pt-10 sm:items-start">
            <div className="sm:flex sm:gap-x-3">
              <img
                className="w-20 h-20 rounded-full"
                src={videoData?.items[0].snippet.thumbnails.default.url}
                alt="channel img"
              />
              <div className="flex flex-col justify-center">
                <h2>{videoData?.items[0].snippet.channelTitle}</h2>
                <p className="sm:pt-1 text-[#C2C2C2] text-[13px]">
                  Published on{" "}
                  {formatDate(videoData?.items[0].snippet.publishedAt)}
                </p>
                <p className="sm:pt-[14px] text-black opacity-60 md:w-3/4 line-clamp-6">{videoData?.items[0].snippet.description}</p>
              </div>
            </div>
            <button className="hover:bg-[gray] bg-[#FF0000] text-white rounded-[20px] sm:px-5 sm:py-2">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Video;
