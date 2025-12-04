import { useEffect, useState } from "react";
import GameCard from "../game/GameCard.jsx";

const BASIC_URL = "http://localhost:3030/jsonstore/games"

export default function Catalog() {
    const [games, setGames] = useState([])

    useEffect(() => {
        fetch(BASIC_URL)
            .then(response => response.json())
            .then(result => 
                setGames(Object.entries(result)))
            .catch((err) => alert(err.message));
    }, [])

    console.log(games);
    

    return (
        <>
            <section id="catalog-page">
                <h1>Catalog</h1>

                
                {games.length === 0 && <h3 className="no-articles">No Added Games Yet</h3>}
                
                <div className="catalog-container">

                {games.map(game => <GameCard key={game[0]} _id={game[0]} {...game[1]} />)}

                </div>
            </section>
        </>
    );
}