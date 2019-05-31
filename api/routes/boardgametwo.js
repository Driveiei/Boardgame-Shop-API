const express = require('express');
const router = express.Router();
const Boardgame = require('../models/boardgame');

// localhost:3000/boardgametwo/findByCP/{"category":"Thematic","price":114}
//category price
router.get('/findByCP/:boardgameDetails', (req, res, next) => {
    const boardgame = JSON.parse(req.params.boardgameDetails);
    const category = boardgame.category;
    const price = boardgame.price;
    Boardgame.find({
        $and: [{ category: category },
        { price: { $lte: price } }]
    })
        .exec()
        .then(docs => {
            const response = {
                count: docs.length,
                boardgame: docs.map(doc => {
                    return {
                        _id: doc._id,
                        name: doc.name,
                        price: doc.price,
                        boardgame_url: doc.boardgame_url,
                        boardgame_id: doc.boardgame_id,
                        image_url: doc.image_url,
                        age: doc.age,
                        category: doc.category,
                        designer: doc.designer,
                        complexity: doc.complexity,
                        year: doc.year,
                        min_time: doc.min_time,
                        max_time: doc.max_time,
                        avg_time: doc.avg_time,
                        min_player: doc.min_player,
                        max_player: doc.max_player,
                        avg_rating: doc.avg_rating
                    };
                }).sort((a, b) => parseFloat(a.avg_rating) - parseFloat(b.avg_rating))
            };
            res.status(200).json(response);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

//category time
router.get('/findByCT/:boardgameDetails', (req, res, next) => {
    const boardgame = JSON.parse(req.params.boardgameDetails);
    const category = boardgame.category;
    const time = boardgame.time;
    Boardgame.find({
        $and: [{ category: category },
        { min_time: { $lte: time } },
        { max_time: { $gte: time } }]
    })
        .exec()
        .then(docs => {
            const response = {
                count: docs.length,
                boardgame: docs.map(doc => {
                    return {
                        _id: doc._id,
                        name: doc.name,
                        price: doc.price,
                        boardgame_url: doc.boardgame_url,
                        boardgame_id: doc.boardgame_id,
                        image_url: doc.image_url,
                        age: doc.age,
                        category: doc.category,
                        designer: doc.designer,
                        complexity: doc.complexity,
                        year: doc.year,
                        min_time: doc.min_time,
                        max_time: doc.max_time,
                        avg_time: doc.avg_time,
                        min_player: doc.min_player,
                        max_player: doc.max_player,
                        avg_rating: doc.avg_rating
                    };
                }).sort((a, b) => parseFloat(a.avg_rating) - parseFloat(b.avg_rating))
            };
            res.status(200).json(response);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

//category player
router.get('/findByPC/:boardgameDetails', (req, res, next) => {
    const boardgame = JSON.parse(req.params.boardgameDetails);
    const category = boardgame.category;
    const player = boardgame.player;
    Boardgame.find({
        $and: [{ category: category },
        { min_player: { $lte: player } },
        { max_player: { $gte: player } }]
    })
        .exec()
        .then(docs => {
            const response = {
                count: docs.length,
                boardgame: docs.map(doc => {
                    return {
                        _id: doc._id,
                        name: doc.name,
                        price: doc.price,
                        boardgame_url: doc.boardgame_url,
                        boardgame_id: doc.boardgame_id,
                        image_url: doc.image_url,
                        age: doc.age,
                        category: doc.category,
                        designer: doc.designer,
                        complexity: doc.complexity,
                        year: doc.year,
                        min_time: doc.min_time,
                        max_time: doc.max_time,
                        avg_time: doc.avg_time,
                        min_player: doc.min_player,
                        max_player: doc.max_player,
                        avg_rating: doc.avg_rating
                    };
                }).sort((a, b) => parseFloat(a.avg_rating) - parseFloat(b.avg_rating))
            };
            res.status(200).json(response);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

//category year
router.get('/findByCY/:boardgameDetails', (req, res, next) => {
    const boardgame = JSON.parse(req.params.boardgameDetails);
    const category = boardgame.category;
    const year = boardgame.year;
    Boardgame.find({
        $and: [{ category: category },
        { year: year }]
    })
        .exec()
        .then(docs => {
            const response = {
                count: docs.length,
                boardgame: docs.map(doc => {
                    return {
                        _id: doc._id,
                        name: doc.name,
                        price: doc.price,
                        boardgame_url: doc.boardgame_url,
                        boardgame_id: doc.boardgame_id,
                        image_url: doc.image_url,
                        age: doc.age,
                        category: doc.category,
                        designer: doc.designer,
                        complexity: doc.complexity,
                        year: doc.year,
                        min_time: doc.min_time,
                        max_time: doc.max_time,
                        avg_time: doc.avg_time,
                        min_player: doc.min_player,
                        max_player: doc.max_player,
                        avg_rating: doc.avg_rating
                    };
                }).sort((a, b) => parseFloat(a.avg_rating) - parseFloat(b.avg_rating))
            };
            res.status(200).json(response);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

//price time
router.get('/findByPT/:boardgameDetails', (req, res, next) => {
    const boardgame = JSON.parse(req.params.boardgameDetails);
    const price = boardgame.price;
    const time = boardgame.time;
    Boardgame.find({
        $and: [{ price: { $lte: price } },
        { min_time: { $lte: time } },
        { max_time: { $gte: time } }]
    })
        .exec()
        .then(docs => {
            const response = {
                count: docs.length,
                boardgame: docs.map(doc => {
                    return {
                        _id: doc._id,
                        name: doc.name,
                        price: doc.price,
                        boardgame_url: doc.boardgame_url,
                        boardgame_id: doc.boardgame_id,
                        image_url: doc.image_url,
                        age: doc.age,
                        category: doc.category,
                        designer: doc.designer,
                        complexity: doc.complexity,
                        year: doc.year,
                        min_time: doc.min_time,
                        max_time: doc.max_time,
                        avg_time: doc.avg_time,
                        min_player: doc.min_player,
                        max_player: doc.max_player,
                        avg_rating: doc.avg_rating
                    };
                }).sort((a, b) => parseFloat(a.avg_rating) - parseFloat(b.avg_rating))
            };
            res.status(200).json(response);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

//price player
router.get('/findByPP/:boardgameDetails', (req, res, next) => {
    const boardgame = JSON.parse(req.params.boardgameDetails);
    const price = boardgame.price;
    const player = boardgame.player;
    Boardgame.find({
        $and: [{ price: { $lte: price } },
        { min_player: { $lte: player } },
        { max_player: { $gte: player } }]
    })
        .exec()
        .then(docs => {
            const response = {
                count: docs.length,
                boardgame: docs.map(doc => {
                    return {
                        _id: doc._id,
                        name: doc.name,
                        price: doc.price,
                        boardgame_url: doc.boardgame_url,
                        boardgame_id: doc.boardgame_id,
                        image_url: doc.image_url,
                        age: doc.age,
                        category: doc.category,
                        designer: doc.designer,
                        complexity: doc.complexity,
                        year: doc.year,
                        min_time: doc.min_time,
                        max_time: doc.max_time,
                        avg_time: doc.avg_time,
                        min_player: doc.min_player,
                        max_player: doc.max_player,
                        avg_rating: doc.avg_rating
                    };
                }).sort((a, b) => parseFloat(a.avg_rating) - parseFloat(b.avg_rating))
            };
            res.status(200).json(response);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

//price year
router.get('/findByPY/:boardgameDetails', (req, res, next) => {
    const boardgame = JSON.parse(req.params.boardgameDetails);
    const price = boardgame.price;
    const year = boardgame.year;
    Boardgame.find({
        $and: [{ price: { $lte: price } },
        { year: year }]
    })
        .exec()
        .then(docs => {
            const response = {
                count: docs.length,
                boardgame: docs.map(doc => {
                    return {
                        _id: doc._id,
                        name: doc.name,
                        price: doc.price,
                        boardgame_url: doc.boardgame_url,
                        boardgame_id: doc.boardgame_id,
                        image_url: doc.image_url,
                        age: doc.age,
                        category: doc.category,
                        designer: doc.designer,
                        complexity: doc.complexity,
                        year: doc.year,
                        min_time: doc.min_time,
                        max_time: doc.max_time,
                        avg_time: doc.avg_time,
                        min_player: doc.min_player,
                        max_player: doc.max_player,
                        avg_rating: doc.avg_rating
                    };
                }).sort((a, b) => parseFloat(a.avg_rating) - parseFloat(b.avg_rating))
            };
            res.status(200).json(response);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

//time player
router.get('/findByTP/:boardgameDetails', (req, res, next) => {
    const boardgame = JSON.parse(req.params.boardgameDetails);
    const time = boardgame.time;
    const player = boardgame.player;
    Boardgame.find({
        $and: [{ min_player: { $lte: player } },
        { max_player: { $gte: player } },
        { min_time: { $lte: time } },
        { max_time: { $gte: time } }]
    })
        .exec()
        .then(docs => {
            const response = {
                count: docs.length,
                boardgame: docs.map(doc => {
                    return {
                        _id: doc._id,
                        name: doc.name,
                        price: doc.price,
                        boardgame_url: doc.boardgame_url,
                        boardgame_id: doc.boardgame_id,
                        image_url: doc.image_url,
                        age: doc.age,
                        category: doc.category,
                        designer: doc.designer,
                        complexity: doc.complexity,
                        year: doc.year,
                        min_time: doc.min_time,
                        max_time: doc.max_time,
                        avg_time: doc.avg_time,
                        min_player: doc.min_player,
                        max_player: doc.max_player,
                        avg_rating: doc.avg_rating
                    };
                }).sort((a, b) => parseFloat(a.avg_rating) - parseFloat(b.avg_rating))
            };
            res.status(200).json(response);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

//time year
router.get('/findByTY/:boardgameDetails', (req, res, next) => {
    const boardgame = JSON.parse(req.params.boardgameDetails);
    const time = boardgame.time;
    const year = boardgame.year;
    Boardgame.find({
        $and: [{year: year},
        { min_time: { $lte: time } },
        { max_time: { $gte: time } }]
    })
        .exec()
        .then(docs => {
            const response = {
                count: docs.length,
                boardgame: docs.map(doc => {
                    return {
                        _id: doc._id,
                        name: doc.name,
                        price: doc.price,
                        boardgame_url: doc.boardgame_url,
                        boardgame_id: doc.boardgame_id,
                        image_url: doc.image_url,
                        age: doc.age,
                        category: doc.category,
                        designer: doc.designer,
                        complexity: doc.complexity,
                        year: doc.year,
                        min_time: doc.min_time,
                        max_time: doc.max_time,
                        avg_time: doc.avg_time,
                        min_player: doc.min_player,
                        max_player: doc.max_player,
                        avg_rating: doc.avg_rating
                    };
                }).sort((a, b) => parseFloat(a.avg_rating) - parseFloat(b.avg_rating))
            };
            res.status(200).json(response);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});
// localhost:3000/boardgametwo/findByYP/{"player":"1","year":2017}
//player year
router.get('/findByYP/:boardgameDetails', (req, res, next) => {
    const boardgame = JSON.parse(req.params.boardgameDetails);
    const player = boardgame.player;
    const year = boardgame.year;
    Boardgame.find({
        $and: [{year: year},
            { min_player: { $lte: player } },
            { max_player: { $gte: player } }]
    })
        .exec()
        .then(docs => {
            const response = {
                count: docs.length,
                boardgame: docs.map(doc => {
                    return {
                        _id: doc._id,
                        name: doc.name,
                        price: doc.price,
                        boardgame_url: doc.boardgame_url,
                        boardgame_id: doc.boardgame_id,
                        image_url: doc.image_url,
                        age: doc.age,
                        category: doc.category,
                        designer: doc.designer,
                        complexity: doc.complexity,
                        year: doc.year,
                        min_time: doc.min_time,
                        max_time: doc.max_time,
                        avg_time: doc.avg_time,
                        min_player: doc.min_player,
                        max_player: doc.max_player,
                        avg_rating: doc.avg_rating
                    };
                }).sort((a, b) => parseFloat(a.avg_rating) - parseFloat(b.avg_rating))
            };
            res.status(200).json(response);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

module.exports = router;