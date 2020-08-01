import React from 'react'
import EdiText from 'react-editext'

export default function Game({game, handleNameEdit}) {

    const editName = newValue => {
        game.gameName = newValue
        handleNameEdit(game);
    }

    return (
        <div className="game">
            <img
                alt={`${game.gameName} app icon`}
                src={game.image}>
            </img>
            <h2><EdiText
                type="text"
                value={game.gameName}
                onSave={editName}/>
            </h2>
        </div>
    )
}
