import './App.css';
import axios from "axios";
import {useState} from "react";
import worldmap from "./assets/world_map.png"
import colorhelper from "./helpers/colorhelper.jsx"


function App() {

    const [information,setInformation] = useState([])
    const [regionClass,getRegionClass] = useState("")

    async function fetchCountries() {
        try{
            const response = await axios.get('https://restcountries.com/v3.1/all')
            //  naam van het eerste land :
            // console.log(response.data[0].name.common)
            // setInformation(`${response.data[0].name.common} has a population of ${response.data[0].population}` )
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
                {/*{console.log(information[0].region)}*/}


            <ul>
                {information.map((info)=>{
                    return <>
                        <img src={info.flags.png}/>
                        <li className={colorhelper(info.region)}>{info.name.common}</li>
                        <p>{`has a population of ${info.population} people`}</p>
                </>
                })}

            </ul>
            </section>
        </>

    )
}

export default App
