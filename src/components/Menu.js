import React from 'react'
import { useEffect,useState } from 'react';
import { SWIGGY_MENU_URL } from '../utils/constants';
import Shimmer from './Shimmer';

const Menu= () => {
    const [Info,setInfo]=useState([]);

    useEffect(()=>{fetchInfo()},[]);
    const fetchInfo = async()=>{
        const data= await fetch(SWIGGY_MENU_URL);
        const json=await data.json();
        //console.log(json);
        setInfo(json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
        console.log(json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    }
    if(Info.length===0)
        return <Shimmer/>;
  return (
    <div className='cards-container'>
        

    </div>
  )
}

export default Menu;
