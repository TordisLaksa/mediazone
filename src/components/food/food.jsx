import axios from "axios";
import { useEffect, useState } from "react"
import './food.scss'

export const Food = () => {
    const [ foodPlan , setFoodPlan ] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const foodApi = 'https://infoskaerm.techcollege.dk/umbraco/api/content/getcanteenmenu/?type=json%27'
            const result = await axios.get(foodApi);
            setFoodPlan(result.data.Days);
        
        }
        getData();
        
    }, [setFoodPlan])

    

    return( 
        <section className="foodPlanWrapper">
            <h2>UGENS RETTER</h2>
            {foodPlan && foodPlan.map((food, index) => {
                return(
                    <ul key={index}>
                        <h3>{food.DayName.toUpperCase()}</h3>
                        <li>{food.Dish}</li>
                    </ul>
                )
            })}
            <article>
                <hr></hr>
                <h3>Info om kantinen</h3>
                <p>I TECHCOLLEGEs kantine kan du betale med MobilePay, Dankort eller
                indsætte penge på dit studiekort og så betale med det. Det er ikke
                muligt at betale med kontanter.</p>

                <p>I kantinen kan du købe morgenmad, frokost, kage om eftermiddagen samt
                kolde og varme drikkevarer. Du har altid mulighed for at købe en
                sandwich, mixe din egen salat eller spise dig mæt i lune og varme
                retter, der varierer mellem fedtfattig mad og "sovs og kartofler".</p>

                <p>Åbningstider:</p>
        
                <p>Mandag-torsdag: <br />
                Kl. 7.30-10.30 og kl. 11.15-14.00</p>
                <p>Fredag: <br /> 
                Kl. 7.30-10.30 og kl. 11.15-13.00</p>
            </article>
        </section>
    )
}