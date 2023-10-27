import { Link } from "react-router-dom";
import moment from "moment";

const Video = ({ video }) => {
  //Video upload qilingandan xozirgi kungaca qancha vaqt otganini ko'rsatiwchun
  const convertPublishTimeToAgo = (publishTime) => {
    return moment(publishTime).fromNow();
  };

  const getRandomViews = () => {
    return Math.floor(Math.random() * 999) + 1; // Prosmotrlani soni backendda kemagan ekan. shunichun sayt Dynamicga o'xwawichun random son bervoradi
  };

  return (
    <Link key={video?.id.videoId} to={`/video/${video?.id.videoId}`}>
      <img
        className="rounded-2xl h-auto w-full"
        src={video?.snippet.thumbnails.medium.url}
        alt={video?.snippet.title}
      />

      <p className="pt-[10px] text-base font-semibold line-clamp-1">
        {video?.snippet.title}
      </p>
      <div className="pt-2 xl:pt-2 sm:pt-1 flex items-center justify-between text-[#C2C2C2] text-xs md:text-[8px] xl:text-xs">
        <div className="flex gap-x-2 items-center">
          <p> {getRandomViews()} k views</p>
          <p>•</p>
          <p>{convertPublishTimeToAgo(video?.snippet.publishTime)}</p>
        </div>
        <div>
          <p>{video?.snippet.channelTitle}</p>
        </div>
      </div>
    </Link>
  );
};
export default Video;
