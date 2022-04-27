import GameLink from "./GameLink";

const Gamegrid = ({games}) => {
    return (
        <section className="game-grid">
            {
                games.map(game=>{
                return <GameLink 
                    url={game.url}
                    gameName={game.gameName}
                />
        })
            }
        </section>
     );
}
 
export default Gamegrid;