import './App.css';
import axios from "axios";
import {useState} from "react";
import worldmap from "./assets/world_map.png"

function App() {

    const [information,setInformation] = useState([])

    async function fetchCountries() {
        try{
            const response = await axios.get('https://restcountries.com/v3.1/all')
            // naam van het eerste land :
            // console.log(response.data[0].name.common)
            setInformation(response.data)
        }catch (e) {
            console.error(e)
        }

    }


    return (

        <>
           <header><img src={worldmap} alt="worldmap" className="world-map"/></header>
            <section>

            <h1>World Regions</h1>
            <button
                type="button"
                onClick={fetchCountries}
            >
                Haal alle landen op
            </button>
            <ul>

            </ul>
            </section>
        </>

    )
}

export default App
