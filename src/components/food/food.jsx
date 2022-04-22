import axios from "axios";
import { useEffect, useState } from "react"

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
            {foodPlan && foodPlan.map((food, index) => {
                return(
                    <ul key={index}>
                        <h2>{food.DayName}</h2>
                        <p>{food.Dish}</p>
                    </ul>
                )
            })}
        </section>
    )
}