import { SWIGGY_API } from "./constants";
import React from "react";
import { useEffect, useState } from "react";
const  useBody=()=> {

  const [List, setList] = useState([]);
  const [ModifiedList,setModifiedList]=useState([]);
  useEffect(()=>{fetchData()},[]);
  const fetchData=async ()=>{
    const data=await fetch(SWIGGY_API);
    const json=await data.json();// .json () converts data from readable stream to json
   // console.log(json.data);
    setList(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    //console.log(List);
    setModifiedList(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    
}
return List;
}
export default useBody;

