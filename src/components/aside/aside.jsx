import Home_Icon from "../../assets/home-icon.svg"
import Trending_Icon from "../../assets/fire.svg"
import Subs_Icon from "../../assets/subs.svg"
import Library_Icon from "../../assets/library.svg"
import History_Icon from "../../assets/history.svg"
import Watch_Icon from "../../assets/watch.svg"
import Favs_Icon from "../../assets/star.svg"
import Liked_Icon from "../../assets/liked.svg"
import Music_Icon from "../../assets/music.svg"
import Game_Icon from "../../assets/games.svg"
import More_Icon from "../../assets/array-down.svg"
import Sub_ava from "../../assets/miakh.jpg"
import Setting_Icon from "../../assets/setting-icon.svg"
import { Link } from "react-router-dom"



import "./aside.css"

const Aside =()=>{

    const mock_data_home = [
        { icon: Home_Icon, name: 'Home' },
        { icon: Trending_Icon, name: 'Trending' },
        { icon: Subs_Icon, name: 'Subscriptions' },
      ];
    const mock_data_category = [
        { icon: Library_Icon, name: 'Library' },
        { icon: History_Icon, name: 'History' },
        { icon: Watch_Icon, name: 'Watch later' },
        { icon: Favs_Icon, name: 'Favourites' },
        { icon: Liked_Icon, name: 'Liked videos' },
        { icon: Music_Icon, name: 'Music' },
        { icon: Game_Icon, name: 'Games' },
        { icon: More_Icon, name: 'Show more' },
      ];
    const mock_data_subs =[
        { icon: Sub_ava, name: 'Kulinov ► Play' },
        { icon: Sub_ava, name: 'SHER_555' },
        { icon: Sub_ava, name: 'Lana Rhoades' },
        { icon: Sub_ava, name: 'Marmok' },
        { icon: Sub_ava, name: 'Sherzod Yodgorov' },
        { icon: Sub_ava, name: 'Mia Khalifa' },
    ];


    

    return(
        <>
        


        
        <aside className="hidden sm:block sm:h-[84vh] md:w-56 sm:w-48 sm:fixed">
            <div className="sm:pl-8 mt-[110px] sm:h-full custom_scroll overflow-y-auto sm:text-xs md:text-base text-[#898989]">
                <div>
                    <ul>

                        {mock_data_home.map((item, index) => (
                            <li key={index}>
                                <Link className="sm:flex items-center sm:gap-x-2 md:gap-x-4 sm:pb-5 md:pb-7" to='/'>
                                <img src={item.icon} alt={`Icon for ${item.name}`} />
                                {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <ul className="md:pt-10 sm:pt-8">
                        {mock_data_category.map((item, index) => (
                            <li className="sm:flex items-center sm:gap-x-2 md:gap-x-4 sm:pb-5 md:pb-7" key={index}>
                                <img src={item.icon} alt={`Icon for ${item.name}`} />
                                {item.name}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="md:pt-10 sm:pt-8">
                    <p className="md:text-lg sm:text-base sm:font-bold text-black">
                        Subscriptions
                    </p>
                    <ul className="md:pt-7 sm:pt-5">
                        {mock_data_subs.map((item, index) => (
                            <li className="sm:flex items-center sm:gap-x-2 md:gap-x-4 sm:pb-5 md:pb-7" key={index}>
                                <img className="sm:h-[26px] sm:w-[26px] rounded-full" src={item.icon} alt={`Icon for ${item.name}`} />
                                {item.name}
                            </li>
                        ))}
                    </ul>
                </div>

                <button className="sm:mt-14 sm:mb-10 sm:flex items-center sm:gap-x-2 md:gap-x-4 hover:text-red-600 hover:font-medium">
                    <img src={Setting_Icon} alt="setting" />
                    <p>
                        Setting
                    </p>
                </button>
            </div>



        </aside>

        <div className="sm:hidden block fixed bottom-0 w-screen py-3 bg-white">
        <ul className="flex items-center justify-around text-xs font-medium">

                        {mock_data_home.map((item, index) => (
                            <li key={index}>
                                <Link className="flex flex-col gap-y-1 items-center" to='/'>
                                <img src={item.icon} alt={`Icon for ${item.name}`} />
                                <p>{item.name}</p>
                                </Link>
                            </li>
                        ))}
                        <li>
                        <button className="flex flex-col gap-y-1 items-center">
                    <img src={Setting_Icon} alt="setting" />
                    <p>
                        Setting
                    </p>
                </button>
                        </li>
                    </ul>
                    
        </div>
        
        </>
    )
}
export default Aside;