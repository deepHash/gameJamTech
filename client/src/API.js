export async function getGameByID(gameId){
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/games/getgamesbyid/${gameId}`)
    return response.json();
}

export async function getGameByName(gameName){
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/games/getgamesbyname/${gameName}`)
    return response.json();
}

export async function updateGameName(game){
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/games/updategamename`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(game),
    });
    return response.json();
};

export async function addNewGame(data){
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/games`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    return response.json();
};