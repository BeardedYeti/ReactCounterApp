import gameNameList from '../../../game-names.json'

export const games = (req, res) =>
        res.status(200).json(gameNameList)

const byName = name => game =>
    name.toLowerCase() === game.substr(0, name.length).toLowerCase()

export const gamesNames = (req, res) =>
        setTimeout(() =>
                res.status(200).json(
                    gameNameList.filter(byName(req.params.name))
                ),
            1
        )
