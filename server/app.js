const express  = require('express'),
      mongoose = require('mongoose'),
      morgan = require('morgan'),
      helmet = require('helmet'),
      cors    = require('cors'),

 
      app         = express(),
      middlewares = require('./middlewares'),
      games       = require('./api/games');
      require('dotenv').config()

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

const conn = mongoose.connection;  

conn.on('error', function (err) {
    console.log('Mongoose: Error: ' + err);
});
conn.on('open', function() {
    console.log('Mongoose: Connection established');
});

app.use(morgan('common'));
app.use(helmet());
app.use(cors({
    origin: process.env.CORS_ORIGIN,
}));
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: 'GameJamTech 🎮🎮🎮 '
    })
})

app.get('/api', (req, res) => {
    res.sendFile(`${__dirname}/public/api.html`);    
})

app.use('/api/games', games);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

const port = process.env.PORT || '4000';
app.listen(port, () => {
    console.log(`listening on port ${port}`);
})
module.exports = app;