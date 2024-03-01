import { useEffect, useState } from "react";

// start of body
import Card from "./Card";
import Shimmer from "./Shimmer";
import useBody from "../utils/useBody";
const Body=()=>
{
  
  const [searchData,setsearchData]=useState("");
 
  const [ErrorMessage, setErrorMessage] = useState("");
  let List=useBody();

  const [ModifiedList,setModifiedList]=useState(List);
  console.log(ModifiedList);
  
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
          List.map((restaurant) => {
        return <Card key={restaurant.info.id} resData={...restaurant.info} />;
      })}
        </div>
       </div>
    );
}
// end of body
export default Body;