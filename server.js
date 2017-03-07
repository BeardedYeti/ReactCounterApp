const express = require('express')
const games = require('./game-names.json')
const { port=3333, delay=0 } = require('minimist')(process.argv)
const cors = require('cors')

const byName = name => game =>
    name.toLowerCase() === game.substr(0, name.length).toLowerCase()

const logger = (req, res, next) => {
    console.log(`${req.method} request for ${req.url}`)
    next()
}

const app = express()

app.use(logger)

app.use(cors())
app.use('/', express.static('./dist/img'))

app.get('/games', (req, res) =>
        res.status(200).json(games)
    )

app.get('/games/:name', (req, res) =>
        setTimeout(() =>
                res.status(200).json(
                    games.filter(byName(req.params.name))
                ),
            delay
        )
    )

app.listen(port, () => console.log('Magic is on port ' + port + ' with a ' + delay/1000 + ' second delay'))