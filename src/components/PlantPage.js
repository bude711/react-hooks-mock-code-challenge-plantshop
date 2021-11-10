import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({handleAddPlant}) {

  const [search, setSearch] =useState("") 
  const [plantList, setPlantList]=useState([])
  const[plants, setPlants]=useState("")

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(resp => resp.json())
    .then(data => {
      setPlants(data)
      setPlantList(data)
    })
  }, [])

  const handleSearch = (e) => {
    setSearch(e.target.value)
    setPlantList(plants.filter(plantObj=>plantObj.name.includes(e.target.value)))
  }
  
  return (
    <main>
      <NewPlantForm handleAddPlant={handleAddPlant}/>
      <Search search={search} handleSearch={handleSearch}/>
      <PlantList plantList={plantList}/>
    </main>
  );
}

export default PlantPage;
