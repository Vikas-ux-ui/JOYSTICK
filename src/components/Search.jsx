import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {  Link } from "react-router-dom";

export default function Search() {
  const { query } = useParams();
  const gameData = useSelector((state) => state.gameRed.gameData);
  console.log("gameeeee", gameData);

  const searchWords = query.trim().toLowerCase().split(/\s+/);
  console.log("searchWords", searchWords);

  const filteredGames = gameData.filter((game) => {
    const gameName = game.name.toLowerCase();
    console.log("gameName", gameName);

    return searchWords.every((word) => gameName.includes(word));
  });

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ color: "white" }}>
        Search results for "<span style={{ color: "#00d1ff" }}>{query}</span>"
      </h2>

      {filteredGames.length > 0 ? (
        <div className="grid grid-cols-4 gap-4 mt-4">
          {filteredGames.map((game) => (
          
            
            
            <Link to={`/game-details/${game.id}`} state={{ gameData: game }}>
            <div
              key={game.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform"
            >
              <img
                src={game.background_image}
                alt={game.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-3">
                <h3 className="text-white font-semibold">{game.name}</h3>
                <p className="text-gray-400 text-sm">{game.genre}</p>
              </div>
            </div>
            </Link>
          ))}
          
        </div>
      ) : (
        <p style={{ color: "#ff5555", marginTop: "10px" }}>
          No games found. Try another search.
        </p>
      )}
    </div>
  );
}
