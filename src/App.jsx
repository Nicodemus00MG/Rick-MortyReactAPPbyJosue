import { useState, useEffect } from "react";
import Rick_and_Morty from "./assets/Rick_and_Morty.svg";
import "./App.css";
import CardResidents from './components/CardResidents'
import axios from "axios";
import SelectedInfoBar from "./components/SelectedInfoBar";
import Footer from "./components/Footer";
function App() {
  const [location, setLocation] = useState();
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    let numberLocation;
    if (searchInput === "" ) {
      numberLocation = Math.floor(Math.random() * (126 - 1) + 1);
      setSearchInput(numberLocation)
    } else {
      numberLocation = searchInput;
    }
let URL
    
if(numberLocation ===undefined){

}else{
 URL = `https://rickandmortyapi.com/api/location/${numberLocation}`;
}

   
    axios
      .get(URL)
      .then((res) => setLocation(res.data))
      .catch((error) => console.log(error));

      
  }, [searchInput]);

  const handdleSubmit = (e) => {
    e.preventDefault();
    setSearchInput(e.target.number_location_in.value);
  };
console.log(location)
  return (
    <div className="App">
      <div class="stars"></div>
      <div class="twinkling"></div>
      <div class="clouds"></div>
      <div className="header_container">
        <div className="image_logo_box">
          <img src={Rick_and_Morty} alt="" width={"250px"} />
        </div>

        <div className="box_text">
          <form className="form_box" onSubmit={handdleSubmit}>
            <div className="input_box">
              <input
                id="number_location_in"
                type="text"
                placeholder="Number of location"
                width={"300px"}
              />
            </div>

            <button className="button_style">Search</button>
          </form>
        </div>
      </div>
      <SelectedInfoBar
      key={location?.id}
      searchInput={searchInput}
        name={location?.name}
        type={location?.type}
        dimension={location?.dimension}
        residents={location?.residents}
      />
      <CardResidents residents={location?.residents}/>
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default App;
