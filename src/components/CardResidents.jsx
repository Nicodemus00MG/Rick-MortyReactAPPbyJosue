import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
const CardResidents = ({ resident }) => {
  
const [residentData, setResidentData] = useState('')

  useEffect(() => {
    axios.get(resident)
    .then(res=> setResidentData(res.data))
    .catch(e=>console.log(e))
  
   
  }, [])
  

console.log(residentData)

  return (
    <div className="cardResident">
       <h4 className="status_box">{residentData.status}</h4>
      <img className="image_card_character" src={residentData.image} alt={''}  width={'200px'}/>
      <div className="info_character_box">
      <h3 >{residentData.name}</h3>
      <h4>{residentData.species}</h4>
      <p>{residentData.gender}</p>
      <p>{residentData.type}</p>
      
      </div>
     
      
    </div>
    
  );
};

export default CardResidents;
