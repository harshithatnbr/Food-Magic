import { useState } from "react";
import restaurantList from "../utils/MockData";
// start of body
import Card from "./Card";

const Body=()=>
{
  let [List, setList] = useState(restaurantList);
  function update(List)
  {
     const filterdList=List.filter((res)=>res.data.avgRating>4);
     return filterdList;
  }
  function handleClick() {
    const filterdList=update(List);
    console.log(filterdList);
    return setList(filterdList);
  }
    return(
       <div className='app-body'>
        <div className="filter" >
          <button className="filter-btn" role="button" onClick={handleClick}>
          Top Rated Restaurants </button>

        </div>
        <div className='cards-container'>
        {
        List.map((restaurant) => {
        return <Card key={restaurant.data.id} resData={...restaurant.data} />;
      })}
        </div>
       </div>
    );
}
// end of body
export default Body;