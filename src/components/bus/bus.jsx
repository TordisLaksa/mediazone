import { useEffect, useState } from "react"
import  axios from "axios"

//exportere funktionen, så den kan hentes i vores app.jsx
export const BusTimes = () => {
    const [ busPlan , setBusPlan ] = useState([]);

    // Arrowfunction som henter info'en fra API'en
    useEffect(() => {
        const getData = async () => {
            const busApi = 'https://xmlopen.rejseplanen.dk/bin/rest.exe/multiDepartureBoard?id1=851400602&id2=8519734&format=json'
            const result = await axios.get(busApi);
            setBusPlan(result.data.MultiDepartureBoard.Departure.slice(0, 3))
        }
        getData();

        //Kører funktionen hvert 5. sekund, for at opdatere busplanen
        setInterval(() => {
            getData();
        }, 5000)
        // Lytter efter ændringer i setBusPlan og renderer igen hvis den finder ændringer
    }, [setBusPlan]);

    //Henter de værdier som er i de hentede objects, og indsætter dem i HTML elementer
    return(
        <section className="busPlanWrapper">
            <h2>Bus Plan</h2>
            {busPlan.map((plan, index) => {
                return(
                    <section key={index} className="busPlan">
                        <p>{plan.line}</p>
                        <p>Fra: {plan.stop}</p>
                        <p>{plan.direction}</p>
                        <p className="time">{plan.time}</p>
                    </section>
                )
            })}
        </section>
    )
}