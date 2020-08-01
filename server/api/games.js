const { Router } = require('express'),
        Game = require('../models/gameSchema');


const router = Router();

router.get('/getGamesByID/:id', async (req, res, next) => {
    try {
        const game = req.params.id == -1 ? await Game.find() : await Game.find({ 'gameId': req.params.id });
        res.json(game);
    } catch (error) {
        next(error);
    }
});

router.get('/getGamesByName/:name', async (req, res, next) => {
    try {
        let reg = new RegExp(`\\b${req.params.name}`, 'i');
        const game = await Game.find({ 'gameName': { $in: reg } });
        res.json(game);
    } catch (error) {
        next(error);
    }
});

router.post('/updateGameName/', async (req, res, next) => {
    try {
        const game = await Game.update({'gameId': req.body.gameId}, {$set: {'gameName': req.body.gameName}});
        res.json(game);
    } catch (error) {
        if (error.name === 'ValidationError') {
            res.status(422);
        }
        next(error);
    }
});

router.post('/', async (req, res, next) => {
    try {
        const game = new Game(req.body);
        const createdEntry = await game.save();
        res.json(createdEntry);
    } catch (error) {
        if (error.name === 'ValidationError') {
            res.status(422);
        }
        next(error);
    }
});
module.exports = router;