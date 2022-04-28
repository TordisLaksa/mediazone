import { Link } from 'react-router-dom';
import './Home.scss'
const Home = () => {
    return (
        <section className="homePage">
            <Link to='/SocialActivities'><button>SOCIAL HUB</button></Link>
            <Link to='/Guides'><button>GUIDES</button></Link>
        </section>

    )
}
export default Home;