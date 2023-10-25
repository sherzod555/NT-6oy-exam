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

import { useLocation } from 'react-router-dom';



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
        { icon: Sub_ava, name: 'Mia Khalifa' },
        { icon: Sub_ava, name: 'Connie Carter' },
        { icon: Sub_ava, name: 'Lana Rhoades' },
        { icon: Sub_ava, name: 'Alexis Fawn' },
        { icon: Sub_ava, name: 'Elsa Jean' },
        { icon: Sub_ava, name: 'Joslyn James' },
    ];


    // const location = useLocation();

    // const isHomePage = location.pathname === '/';

    return(
        <>
        {/* {isHomePage && ( */}


        
        <aside className="h-[84vh] w-52 fixed">
            <div className="pl-8 mt-[110px] h-full custom_scroll overflow-y-auto custom_scroll text-base text-[#898989]">
                <div>
                    <ul>
                        {mock_data_home.map((item, index) => (
                            <li className="flex items-center gap-x-4 pb-7" key={index}>
                                <img src={item.icon} alt={`Icon for ${item.name}`} />
                                {item.name}
                            </li>
                        ))}
                    </ul>
                    <ul className="pt-10">
                        {mock_data_category.map((item, index) => (
                            <li className="flex items-center gap-x-4 pb-7" key={index}>
                                <img src={item.icon} alt={`Icon for ${item.name}`} />
                                {item.name}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="pt-10">
                    <p className="text-lg font-bold text-black">
                        Subscriptions
                    </p>
                    <ul className="pt-7">
                        {mock_data_subs.map((item, index) => (
                            <li className="flex items-center gap-x-4 pb-7" key={index}>
                                <img className="h-[26px] w-[26px] rounded-full" src={item.icon} alt={`Icon for ${item.name}`} />
                                {item.name}
                            </li>
                        ))}
                    </ul>
                </div>

                <button className="mt-14 mb-10 flex items-center gap-x-4 hover:text-red-600 hover:font-medium">
                    <img src={Setting_Icon} alt="setting" />
                    <p>
                        Setting
                    </p>
                </button>
            </div>



        </aside>
        {/* )} */}
        </>
    )
}
export default Aside;