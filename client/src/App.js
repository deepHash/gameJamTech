import React, { useState, useEffect } from 'react';
import { getGameByID, getGameByName, updateGameName } from './API';
import Search from './components/Search';
import GamesTable from './components/GamesTable';


const App = () => {
    const [gameList, setGameList] = useState([])

    useEffect(() => {
        API_getGameById(-1);
    }, []);

    const QuerySearch = (query) => {
        let search = query.target.value;
        search ? API_getGameByName(search) : API_getGameById(-1);
    }

    const API_getGameById = async (gameId) => {
        const gameList = await getGameByID(gameId);
        setGameList(gameList)
    }

    const API_getGameByName = async (gameName) => {
        const gameList = await getGameByName(gameName);
        setGameList(gameList);
    }

    const API_updateGameName = async (game) => {
        const change = await updateGameName(game);
        // console.log(change);
    }

    const handleNameEdit = game => {
        API_updateGameName(game);
    }

    return (
        <div className="App">
            <header>
                <h1>Game Jam Tech</h1>
            </header>
            <main>
                <Search handleInput={QuerySearch} />

                <GamesTable gamesList={gameList} handleNameEdit={handleNameEdit} />
            </main>
        </div>
    )
}

export default App;