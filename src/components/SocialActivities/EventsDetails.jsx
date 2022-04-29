import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import './EventDetails.scss'


const EventsDetails = () => {
    
        const [ apiData, setApiData ] = useState();
        const { id } = useParams();

        useEffect(() => {
            const getData = async () => {
                const url = `https://boiling-castle-70220.herokuapp.com/api/event/${id}`;
                const result = await axios.get(url);
                setApiData(result.data);
                
            }
            getData();
        }, [setApiData])
    
        return(
            <section>
                
            {apiData && apiData.map((item, index) => {
                item.startdate = item.startdate;
                item.Time = new Date(item.startdate).toLocaleDateString(
                    "da-DK",
                    {
                        month: "2-digit",
                        day: "2-digit",
                        year: "2-digit"
                    } );
                return(
                <article key={index}>
                <h2>{item.title} - {item.Time}</h2>
                <hr></hr>
                <h3>{item.location}</h3>
                <p>{item.content}</p>
                <div className='signInBtn'>
                <Link to=''><button>TILMELD DIG</button></Link>
            </div>
                </article>
                )

            })

                
            }
            </section>
        )
    }
export default EventsDetails