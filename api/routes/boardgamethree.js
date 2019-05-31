const express = require('express');
const router = express.Router();
const Boardgame = require('../models/boardgame');

//category year time
router.get('/findByCYT/:boardgameDetails', (req, res, next) => {
    const boardgame = JSON.parse(req.params.boardgameDetails);
    const time = boardgame.time;
    const category = boardgame.category;
    const year = boardgame.year;
    
    Boardgame.find({ $and: [ {year: year },
                    {min_time: {$lte: time}},
                    {max_time: {$gte: time}},
                    {category: category} ]
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

//category price time
router.get('/findByCPT/:boardgameDetails', (req, res, next) => {
    const boardgame = JSON.parse(req.params.boardgameDetails);
    const time = boardgame.time;
    const category = boardgame.category;
    const price = boardgame.price;
    
    Boardgame.find({ $and: [ {price: {$lte: price}},
                    {min_time: {$lte: time}},
                    {max_time: {$gte: time}},
                    {category: category} ]
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

//category price player
router.get('/findByCPP/:boardgameDetails', (req, res, next) => {
    const boardgame = JSON.parse(req.params.boardgameDetails);
    const player = boardgame.player;
    const category = boardgame.category;
    const price = boardgame.price;
    
    Boardgame.find({ $and: [ {price: {$lte: price}},
                    {min_player: {$lte: player}},
                    {max_player: {$gte: player}},
                    {category: category} ]
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

//category price year
router.get('/findByCPY/:boardgameDetails', (req, res, next) => {
    const boardgame = JSON.parse(req.params.boardgameDetails);
    const year = boardgame.year;
    const category = boardgame.category;
    const price = boardgame.price;
    
    Boardgame.find({ $and: [ {price: {$lte: price}},
                    {year: year},
                    {category: category} ]
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

//category time player
router.get('/findByCTP/:boardgameDetails', (req, res, next) => {
    const boardgame = JSON.parse(req.params.boardgameDetails);
    const time = boardgame.time;
    const category = boardgame.category;
    const player = boardgame.player;
    
    Boardgame.find({ $and: [ {min_player: {$lte: player}},
                    {max_player: {$gte: player}},
                    {min_time: {$lte: time}},
                    {max_time: {$gte: time}},
                    {category: category} ]
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

//category year player
router.get('/findByCYP/:boardgameDetails', (req, res, next) => {
    const boardgame = JSON.parse(req.params.boardgameDetails);
    const player = boardgame.player;
    const category = boardgame.category;
    const year = boardgame.year;
    
    Boardgame.find({ $and: [ {year: year},
                    {min_player: {$lte: player}},
                    {max_player: {$gte: player}},
                    {category: category} ]
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

//price time player
router.get('/findByPTP/:boardgameDetails', (req, res, next) => {
    const boardgame = JSON.parse(req.params.boardgameDetails);
    const time = boardgame.time;
    const player = boardgame.player;
    const price = boardgame.price;
    
    Boardgame.find({ $and: [ {price: {$lte: price}},
                    {min_time: {$lte: time}},
                    {max_time: {$gte: time}},
                    {min_player: {$lte: player}},
                    {max_player: {$gte: player}} ]
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

//price player year
router.get('/findByPPY/:boardgameDetails', (req, res, next) => {
    const boardgame = JSON.parse(req.params.boardgameDetails);
    const year = boardgame.year;
    const player = boardgame.player;
    const price = boardgame.price;
    
    Boardgame.find({ $and: [ {price: {$lte: price}},
                    {year: year},
                    {min_player: {$lte: player}},
                    {max_player: {$gte: player}} ]
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

//time player year
router.get('/findByTPY/:boardgameDetails', (req, res, next) => {
    const boardgame = JSON.parse(req.params.boardgameDetails);
    const year = boardgame.year;
    const player = boardgame.player;
    const time = boardgame.time;
    
    Boardgame.find({ $and: [ {year: year},
                    {min_player: {$lte: player}},
                    {max_player: {$gte: player}},
                    {min_time: {$lte: time}},
                    {max_time: {$gte: time}} ]
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

//price year time
router.get('/findByPYT/:boardgameDetails', (req, res, next) => {
    const boardgame = JSON.parse(req.params.boardgameDetails);
    const year = boardgame.year;
    const price = boardgame.price;
    const time = boardgame.time;
    
    Boardgame.find({ $and: [ {year: year},
                    {price: {$lte: price}},
                    {min_time: {$lte: time}},
                    {max_time: {$gte: time}} ]
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
