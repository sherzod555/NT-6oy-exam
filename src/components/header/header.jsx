import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { DataContext } from "../../context";
import fetchVideos from "../../fetch.js";
import hamburgerMenu from "../../assets/hamburger.svg";
import fullLogo from "../../assets/full-logo.svg";
import miniLogo from "../../assets/mini-logo.svg";
import searchIcon from "../../assets/search.svg";
import cameraIcon from "../../assets/camera.svg";
import dotsIcon from "../../assets/dots.svg";
import bellIcon from "../../assets/bell.svg";
import profileAva from "../../assets/miakh.jpg";

import { useState } from "react";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { setSearchVideos } = useContext(DataContext);
  const navigate = useNavigate();

  async function searchVideos() {
    const data = await fetchVideos(
      `https://youtube-v31.p.rapidapi.com/search?q=${searchQuery}&part=id%2Csnippet&type=video&maxResults=50`
    );

    setSearchVideos(data.items);
  }

  const handleEnter = async (e) => {
    if (e.key === "Enter") {
      await searchVideos();
      navigate("/search")
    }
  };

  return (
    <>
      <div className="container mx-auto  pb-3 fixed">
        <div className="sm:gap-x-5 flex w-screen  bg-white px-4 py-3 md:pr-16 md:pl-8 items-center justify-between sm:py-5">
          <div className="flex items-center justify-between">
            <img src={hamburgerMenu} alt="hamburger-menu" className="hidden sm:block mr-7" />
            <Link to="/">
              <img className="hidden sm:h-[25px] sm:w-auto sm:block" src={fullLogo} alt="logo" />
              <img src={miniLogo} alt="logo" className="block sm:hidden h-auto w-9" />
            </Link>
          </div>

          <div className="md:max-w-5xl sm:max-w-4xl w-6/12">
            <div className="flex items-center justify-between py-3 px-6 bg-[#ebebeb4d] rounded-3xl">
              <input
                className="bg-[#ffffff00] w-full outline-none"
                type="search"
                name="search"
                id="search"
                placeholder="Search"
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleEnter}
              />
              <img src={searchIcon} alt="search-icon" className="sm:ml-4 hidden sm:block" />
            </div>
          </div>

          <div className="nav_profile_side">
            <ul className="hidden sm:flex sm:items-center md:gap-x-[50px] sm:gap-x-5">
              <li>
                <Link to="/">
                  <img src={cameraIcon} alt="icon" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <img src={dotsIcon} alt="icon" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <img src={bellIcon} alt="icon" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={profileAva}
                    alt="icon"
                  />
                </Link>
              </li>
            </ul>
            <Link className="block sm:hidden" to="/">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={profileAva}
                    alt="icon"
                  />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
