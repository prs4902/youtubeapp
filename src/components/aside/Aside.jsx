import React, { useContext, useEffect, useState } from 'react'
import MenuCard from './MenuCard'
import Homesvg from '../../assets/home.svg'
import Subscription from '../../assets/subscription.svg'
import History from '../../assets/history.svg'
import PlayList from '../../assets/playList.svg'
import WatchLater from '../../assets/watchLater.svg'
import Liked from '../../assets/like.svg'
import Film from '../../assets/film.svg'
import ChevronRight from '../../assets/chevronRight.svg'
import Fire from '../../assets/fire.svg'
import Music from '../../assets/music.svg'
import Gaming from '../../assets/game.svg'
import Podcast from '../../assets/podcast.svg'
import Settings from '../../assets/settings.svg'
import Feedback from '../../assets/feedback.svg'
import Report from '../../assets/report.svg'
import Help from '../../assets/help.svg'
import AutoMotive from '../../assets/explore/car.svg'
import Pet from '../../assets/explore/pet.svg'
import Travel from '../../assets/explore/travel.svg'
import Sport from '../../assets/explore/sport.svg'

import { context } from '../../context/ContextProvider'
const Aside = () => {
  const [showMore,setShowMore] = useState(false);
  const [explore,setExplore] = useState([]);
  const {
    isAsideOpen,
    setIsAsideOpen,
  } = useContext(context);

  const main = [
    {
      icon: Homesvg,
      title: 'home',
    },
    {
      icon: Film,
      title: 'shorts',
      catId: 1
    },
    {
      icon: Subscription,
      title: 'subscriptions',
    },
  ];


  const aboutYoutube = [
    {
      icon: Settings,
      title: 'settings',

    },
    {
      icon: Help,
      title: 'help',

    },
    {
      icon: Report,
      title: 'report',

    },
    {
      icon: Feedback,
      title: 'feedback',

    },
  ];

  const categoryArray = [
    { id: "1", title: "Film & Animation", icon: Film },
    { id: "2", title: "Autos & Vehicles", icon: AutoMotive },
    { id: "10", title: "Music", icon: Music },
    { id: "15", title: "Pets & Animals", icon: Pet },
    { id: "17", title: "Sports", icon: Sport },
    // { id: "18", title: "Short Movies", icon: Fire },
    // { id: "19", title: "Travel & Events", icon: Fire },
    { id: "20", title: "Gaming", icon: Podcast },
    // { id: "21", title: "Videoblogging", icon: Podcast },
    { id: "22", title: "People & Blogs", icon: Podcast },
    { id: "23", title: "Comedy", icon: Podcast },
    { id: "24", title: "Entertainment", icon: Podcast },
    { id: "25", title: "News & Politics", icon: Podcast },
    { id: "26", title: "Howto & Style", icon: Fire },
    // { id: "27", title: "Education", icon: Fire },
    { id: "28", title: "Science & Technology", icon:Gaming },
    // { id: "29", title: "Nonprofits & Activism", icon:Gaming },
    // { id: "30", title: "Movies", icon:Gaming },
    // { id: "31", title: "Anime/Animation", icon:Gaming },
    // { id: "32", title: "Action/Adventure", icon:Gaming },
    // { id: "33", title: "Classics", icon:Gaming },
    // { id: "35", title: "Documentary", icon:Gaming },
    // { id: "36", title: "Drama", icon:Gaming },
    // { id: "37", title: "Family", icon:Gaming },
    // { id: "38", title: "Foreign", icon:Gaming },
    // { id: "39", title: "Horror", icon:Gaming },
    // { id: "40", title: "Sci-Fi/Fantasy", icon: Music },
    // { id: "41", title: "Thriller", icon: Music },
    // { id: "42", title: "Shorts", icon: Music },
    // { id: "43", title: "Shows", icon: Music },
    // { id: "44", title: "Trailers", icon: Music }
  ];
  
  const handleSeeMore= ()=>{
    if(showMore)
      {
        setExplore(categoryArray);
        setShowMore(false);
      }
      else{
        const half = categoryArray.filter((item,i)=>i<4)
        setExplore(half);
        setShowMore(true);
      }
  }


  // Mobile 
  function checkIsAsideOpen() {
    const screenWidth = window.screen.width;
    if (screenWidth < 617) {
      setIsAsideOpen(false);
    }
    else
      setIsAsideOpen(true);
  }
  let checkEventCall = false;
  useEffect(() => {
    // category
    handleSeeMore();
    window.addEventListener('resize', () => {
      checkEventCall = true;
      checkIsAsideOpen();
    });
    // when website first time load on browser
    if (!checkEventCall)
      checkIsAsideOpen();
  }, [])
  return (
    <div className={`${isAsideOpen ? 'block' : 'hidden'} aside px-4 w-60 overflow-y-scroll h-[calc(100dvh-70px)] custom-scrollbar shrink-0`}>
      <div className="main pb-4 border-b">
        {
          main.map((item) =>
            <MenuCard key={item.title} title={item.title} icon={item.icon} isActive={(item.title == 'home') ? true : false} catId={item.catId} />
          )
        }
      </div>
      
      {/* Explore */}
      <div className="explore mt-2 pb-4 border-b">

        <div className={`cursor-default px-6 py-2`}>
          <h3 className={`capitalize `}>Explore</h3>
        </div>

        {
          explore.map((item) =>
               <MenuCard key={item.title} title={item.title} icon={item.icon} catId={item.id} />
          )
        }
        <div onClick={handleSeeMore} className={`cursor-default sm:cursor-pointer hover:bg-gray-200 flex items-center gap-4 px-6 py-2  bg-gray-100 rounded-full`}>
          <img className='w-6 h-6 rotate-90' src={ChevronRight} alt="" />
          <h3 className={'capitalize '}>see more</h3>
        </div>
      </div>
      {/* settings */}
      <div className="settings mt-2 pb-4 border-b">

        <div className={`cursor-default px-6 py-2`}>
          <h3 className={`capitalize `}>About</h3>
        </div>

        {
          aboutYoutube.map((item) =>
            <MenuCard key={item.title} title={item.title} icon={item.icon} catId={item.catId} />
          )
        }
      </div>
    </div>
  )
}

export default Aside