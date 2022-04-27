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
            <h2>   UGENS RETTER   </h2>
            {foodPlan && foodPlan.map((food, index) => {
                return(
                    <ul key={index}>
                        <h3>{food.DayName.toUpperCase()}</h3>
                        <li>{food.Dish.replace('- kr. 28,00', '')}</li>
                    </ul>
                )
            })}
        </section>
    )
}