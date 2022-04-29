import axios from 'axios';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './SocialHUB.scss'
export const SocialHUB = () => {
   
    const [getEvents, setGetEvents] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const eventsApi = 'https://boiling-castle-70220.herokuapp.com/api/event';
            const result = await axios.get(eventsApi);
            setGetEvents(result.data);
        }
        getData();
    }, [setGetEvents])

    return (
        <section className='socialHUB'>
            <h2>SocialHUB</h2>
            <hr></hr>
            <h3>KOMMENDE EVENTS</h3>

            {getEvents && getEvents.map((item, index) => { 

                item.startdate = item.startdate;
                item.Time = new Date(item.startdate).toLocaleDateString(
                    "da-DK",
                    {
                        month: "2-digit",
                        day: "2-digit"
                    }
                );
                return (

                    <Link to={`/eventsDetails/${item.id}`} className='socialList' key={index} >
                        <p className='title'>{item.title}</p>
                        <p>{item.Time}</p>
                    </Link>
                )
            })}
            <hr></hr>
            <div className='signInBtn'>
                <Link to=''><button>TILMELD DIG</button></Link>
            </div>
        </section>
    )
}


