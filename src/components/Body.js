import { useEffect, useState } from "react";

// start of body
import Card from "./Card";
import Shimmer from "./Shimmer";
import { NEW_URL, SWIGGY_API } from "../utils/constants";
import { dummy } from "../utils/constants";
const Body=()=>
{
  const [List, setList] = useState([]);
  const [ModifiedList,setModifiedList]=useState([]);
  const [searchData,setsearchData]=useState("");
  const [ErrorMessage, setErrorMessage] = useState("");
  useEffect(()=>{fetchData()},[]);
  const fetchData=async ()=>{
    //const data= await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&page_type=DESKTOP_WEB_LISTING");
    const data=await fetch(SWIGGY_API);
    const json=await data.json();// .json () converts data from readable stream to json
    console.log(json.data);
    setList(json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setModifiedList(json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   console.log(List);
  }
  
  function update(List)
  {
     const filterdList=List.filter((res)=>res.info.avgRating>4);
     return filterdList;
  }
  function handleClick() {
    const filterdList=update(List);
     setModifiedList(filterdList);
  }
  if(List.length===0)
    return (<Shimmer/>);

    return(
       <div className='app-body'>
        <div className="filter" >
          <button className="filter-btn" role="button" onClick={handleClick}>
          Top Rated Restaurants </button>
          <div className="search">
            <input className="searchbox" placeholder="Search Restaurants" type="text" value={searchData}
            onChange={(e)=>{setsearchData(e.target.value);}}></input>
            <button className="filter-btn" role="button" onClick={()=>
            {
             // console.log(searchData);
             const ele=List.filter((res)=>
             res?.info?.name.toLowerCase().includes(searchData.toLowerCase()));
             if(ele.length===0)
             window.alert("No  restaurant found");
              else
              {
                setModifiedList(ele);
                
              }  
            }}> 
              Search
            </button>
           
          </div>
          </div>
          <div className='cards-container'>
        {
        ModifiedList.map((restaurant) => {
        return <Card key={restaurant.info.id} resData={...restaurant.info} />;
      })}
        </div>
       </div>
    );
}
// end of body
export default Body;