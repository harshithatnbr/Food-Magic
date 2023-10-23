import restaurantList from "../utils/MockData";
// start of body
import Card from "./Card";
const Body=()=>
{
    return(
       <div className='app-body'>
        
        <div className='cards-container'>
        {
        restaurantList.map((restaurant) => {
        return <Card key={restaurant.data.id} resData={...restaurant.data} />;
      })}
        </div>
       </div>
    );
}
// end of body
export default Body;