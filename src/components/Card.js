
import {CDN_URL} from "../utils/constants"


// start of card
export const Card=(props)=>
{
    const {resData}=props;
    return(
        <div className = "card">
      <div className = "card-media">
      <img className='card-img'
        src={CDN_URL + resData.cloudinaryImageId}/>
        
        <div className = "delivery-time">{resData.sla.deliveryTime} mins</div>
        <div className = "bookmark"></div>
      </div>
      <div className = "card-description">
        <div className = "about-place">
          <div className = "place">
            <p className = "place-name">{resData.name}</p>
            
            <p className = "place-speciality cusines">{resData.cuisines.join(", ")}</p>
            <p className = "place-speciality"id="area">{resData.areaName}</p>
          </div>
          <div className = "place-review">
            <p className = "rating">{resData.avgRating} &#x2605;</p>
            <p className = "per-person"> {resData.costForTwo}</p>
            <p className = "place-speciality">{resData.lastMileTravelString}</p>
          </div>
        </div>
      </div>
    </div>
    );

    
}
// end of card
export default Card;