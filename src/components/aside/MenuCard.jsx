import React, { useContext } from 'react'
import { context } from '../../context/ContextProvider';
import { Link } from 'react-router-dom';
const MenuCard = ({icon,title,isActive=false,catId=-1}) => {
  const {
    setIsAsideOpen,
  } = useContext(context);
 
// close aside when click on menucard
const handleAside =()=>{
  const screenWidth = window.screen.width;
  if(screenWidth<617)
  setIsAsideOpen(false);
}

  return (
    <Link to={(catId==-1)?'/':`category/${catId}`} onClick={handleAside} className={`cursor-default sm:cursor-pointer hover:bg-gray-200 flex items-center gap-4 px-6 py-2 ${(isActive) ? 'bg-gray-100':''} rounded-lg`}>
        <img className='w-6 h-6' src={icon} alt="" />
        <h3 className={`capitalize line-clamp-1 ${isActive ? 'font-semibold':''}`}>{title}</h3>
    </Link>
  )
}

export default MenuCard