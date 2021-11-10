import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantList}) {
  return (
    <ul className="cards">
         <PlantCard plantList={plantList}/>

      </ul>
  );
}

export default PlantList;
