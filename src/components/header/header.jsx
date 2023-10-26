import hamburgerMenu from "../../assets/hamburger.svg";
import fullLogo from "../../assets/full-logo.svg";
import miniLogo from "../../assets/mini-logo.svg";
import searchIcon from "../../assets/search.svg";
import cameraIcon from "../../assets/camera.svg";
import dotsIcon from "../../assets/dots.svg";
import bellIcon from "../../assets/bell.svg";
import profileAva from "../../assets/miakh.jpg";

import {useState } from "react";



const Header =() =>{

    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchInputChange = (e) => {
      setSearchQuery(e.target.value);
    };
  
    const handleSearchSubmit = () => {
    };

    return(
        <>
            <div className="container mx-auto  pb-3 fixed">
                <div className="flex w-screen  bg-white pr-16 pl-8 items-center justify-between py-5">

                    <div className="nav_logo_side flex items-center justify-between">
                        <img src={hamburgerMenu} alt="hamburger-menu" className="mr-7" />
                        <a href="/">

                        <img src={fullLogo} alt="logo" />
                        <img src={miniLogo} alt="logo" className="hidden" />
                        </a>
                    </div>

                    <div className="nav_search_side max-w-5xl w-6/12">
                        <div className="flex items-center justify-between py-3 px-6 bg-[#ebebeb4d] rounded-3xl">
                            <input className="bg-[#ffffff00] w-full outline-none" 
                            type="search" 
                            name="search" 
                            id="search" 
                            placeholder="Search"  
                            onChange={handleSearchInputChange}/>
                            <img src={searchIcon} alt="search-icon" className="ml-4" />
                        </div>
                    </div>

                    <div className="nav_profile_side">
                        <ul className="flex items-center gap-x-[50px]">
                            <li><a href='/'><img src={cameraIcon} alt="icon" /></a></li>
                            <li><a href='/'><img src={dotsIcon} alt="icon" /></a></li>
                            <li><a href='/'><img src={bellIcon} alt="icon" /></a></li>
                            <li><a href='/'><img className="h-10 w-10 rounded-full" src={profileAva} alt="icon" /></a></li>
                            
                        </ul>
                    </div>

                </div>
            </div>
        </>
    )

}

export default Header;