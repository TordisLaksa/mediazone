import axios from "axios";
import { useEffect, useState } from "react";

const EventsDetails = () => {
    
        const [ apiData, setApiData ] = useState();
        useEffect(() => {
            const getData = async id => {
                const url = `https://boiling-castle-70220.herokuapp.com/api/event/${id}`;
                console.log("hej")
                const result = await axios.get(url);
                setApiData(result.data);
                
            }
            getData();
        }, [setApiData])
    
        return(
            <section>
                
            {apiData && apiData.map((item, index) => {
                return(
                <div key={index}>
                <p>{item.title}</p>
                </div>
                )

            })

                
            }
            </section>
        )
    }
export default EventsDetails


