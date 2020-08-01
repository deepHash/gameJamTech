import React from 'react'
import Game from './Game'

export default function GamesTable({ gamesList, handleNameEdit }) {
    return (
        <div>
            <section className="gamesTable">
                {gamesList.map(game => (
                    <Game key={game._id} game={game} handleNameEdit={handleNameEdit} />
                ))}
            </section>
        </div>
    )
}
