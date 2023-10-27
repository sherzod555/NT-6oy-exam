import { useContext, useState } from "react";
import { DataContext } from "../../context";
import Video from "../../components/video/video";

const Search = () => {
  const { searchVideos } = useContext(DataContext);



  const [currentPage, setCurrentPage] = useState(1);
  const videosPerPage = 12;


  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = searchVideos.slice(indexOfFirstVideo, indexOfLastVideo);

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
          disabled={indexOfLastVideo >= searchVideos.length}
        >
          Next
        </button>
      </div>
    </>
  );
};
export default Search;
