import { useEffect, useState, useContext } from "react";
import { DataContext } from "../../context";
import fetchVideos from "../../fetch.js";
import Video from "../../components/video/video";

const Main = () => {
  const { videos, setVideos } = useContext(DataContext);

  const [currentPage, setCurrentPage] = useState(1);
  const videosPerPage = 12;

  useEffect(() => {
    async function getVideosData() {
      const data = await fetchVideos(
        "https://youtube-v31.p.rapidapi.com/search?part=id%2Csnippet&type=video&maxResults=100"
      );

      setVideos(data.items);
    }

    try {
      getVideosData();
    } catch (err) {
      alert(err);
    }
  }, [setVideos]);



  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = videos.slice(indexOfFirstVideo, indexOfLastVideo);

  // Function to handle page navigation
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };





  return (
    <>
      <div className="pt-[110px]">
        <div className="grid gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3 sm:gap-x-8 sm:gap-y-10">
          {currentVideos.map((video) => (
            <Video key={video.id.videoId} video={video} />
          ))}
        </div>
      </div>
      

      <div className="pagination w-full flex items-center justify-between mt-6 pt-6 pb-24 sm:pb-5 border-t-2">
        <button
        className="hover:bg-[gray] bg-[#FF0000] text-white rounded-xl px-4 py-1 sm:px-5 sm:py-2"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <button
        className="hover:bg-[gray] bg-[#FF0000] text-white rounded-xl px-4 py-1 sm:px-5 sm:py-2"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={indexOfLastVideo >= videos.length}
        >
          Next
        </button>
      </div>
    </>
  );
};
export default Main;
