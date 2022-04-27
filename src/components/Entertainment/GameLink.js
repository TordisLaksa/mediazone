const GameLink = ({url, gameName}) => {
    return ( 
        <a href="#"><div><img src={url} alt="" /><h3>{gameName}</h3></div></a>
     );
}
export default GameLink;

