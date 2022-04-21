import { useEffect, useState } from "react"
import  axios from "axios"

export const BusTimes = () => {
    const [ busPlan , setBusPlan ] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const busApi = 'https://xmlopen.rejseplanen.dk/bin/rest.exe/multiDepartureBoard?id1=851400602&id2=8519734&format=json'
            const result = await axios.get(busApi);
            setBusPlan(result.data.MultiDepartureBoard.Departure.slice(0, 3))
        }
        getData();

        setInterval(() => {
            getData();
        }, 5000)
    }, [setBusPlan]);

    return(
        <section className="busPlanWrapper">
            <h2>Bus Plan</h2>
            {busPlan.map((plan, index) => {
                return(
                    <section key={index} className="busPlan">
                        <p>{plan.line}</p>
                        <p>{plan.direction}</p>
                        <p className="time">{plan.time}</p>
                    </section>
                )
            })}
        </section>
    )
}