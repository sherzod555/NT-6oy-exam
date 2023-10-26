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
      <div className="container mx-auto px-[75px] pb-12">
        <div className="w-[70%] pt-[110px]">
          <div className="pb-5 border-b-2 border-b-[#C2C2C2]">
            <img
              className="w-full h-auto rounded-2xl"
              src={videoData?.items[0].snippet.thumbnails.maxres.url}
              alt={videoData?.items[0].snippet.title}
            />
            <h2 className="text-3xl font-semibold pt-5">
              {videoData?.items[0].snippet.title}
            </h2>
            <div className="pt-3 flex justify-between items-center">
              <p className="text-[#C2C2C2] text-sm">
                {formatViewCount(videoData?.items[0].statistics.viewCount)}{" "}
                views
              </p>
              <div className="flex items-center gap-x-[10px]">
                <div className="flex gap-x-2 items-center px-5 py-[8px] rounded-[20px] bg-[#EBEBEB] hover:bg-[#d5d5d5]">
                  <img src={Like_icon} alt="like" />
                  <p>
                    {formatViewCount(videoData?.items[0].statistics.likeCount)}{" "}
                    Likes
                  </p>
                </div>
                <div className="flex gap-x-2 items-center px-5 py-[8px] rounded-[20px] bg-[#EBEBEB] hover:bg-[#d5d5d5]">
                  <img className="-scale-y-100" src={Like_icon} alt="dislike" />
                  <p>Dislikes</p>
                </div>
                <div className="flex gap-x-2 items-center px-5 py-[8px] rounded-[20px] bg-[#EBEBEB] hover:bg-[#d5d5d5]">
                  <img src={Share_icon} alt="share" />
                  <p>Share</p>
                </div>
                <div>
                  <img className="ml-[30px]" src={Moredots_icon} alt="more" />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="pt-10">
              <img
                className="w-20 h-20 rounded-full"
                src={videoData?.items[0].snippet.thumbnails.default.url}
                alt="channel img"
              />
              <div>
                <h2>{videoData?.items[0].snippet.channelTitle}</h2>
                <p>
                  Published on{" "}
                  {formatDate(videoData?.items[0].snippet.publishedAt)}
                </p>
                <p>{videoData?.items[0].snippet.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Video;
