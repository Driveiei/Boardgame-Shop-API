const express = require('express');
const router = express.Router();
const Boardgame = require('../models/boardgame');


//category price time player
router.get('/findByCPTP/:boardgameDetails', (req, res, next) => {
    const boardgame = JSON.parse(req.params.boardgameDetails);
    const price = boardgame.price;
    const time = boardgame.time;
    const player = boardgame.player;
    const category = boardgame.category;
    
    Boardgame.find({ $and: [ {category: category},
                    {price: {$lte: price}},
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


//category price time year
router.get('/findByCPTY/:boardgameDetails', (req, res, next) => {
    const boardgame = JSON.parse(req.params.boardgameDetails);
    const year = boardgame.year;
    const price = boardgame.price;
    const time = boardgame.time;
    const category = boardgame.category;
    
    Boardgame.find({ $and: [ {category: category},
                    {price: {$lte: price}},
                    {min_time: {$lte: time}},
                    {max_time: {$gte: time}},
                    {year: year} ]
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

//year price time player
router.get('/findByYPTP/:boardgameDetails', (req, res, next) => {
    const boardgame = JSON.parse(req.params.boardgameDetails);
    const price = boardgame.price;
    const time = boardgame.time;
    const player = boardgame.player;
    const year = boardgame.year;
    
    Boardgame.find({ $and: [ {year: year},
                    {price: {$lte: price}},
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

//year player time category
router.get('/findByYPTC/:boardgameDetails', (req, res, next) => {
    const boardgame = JSON.parse(req.params.boardgameDetails);
    const year = boardgame.year;
    const time = boardgame.time;
    const player = boardgame.player;
    const category = boardgame.category;
    
    Boardgame.find({ $and: [ {category: category},
                    {min_time: {$lte: time}},
                    {max_time: {$gte: time}},
                    {min_player: {$lte: player}},
                    {max_player: {$gte: player}},
                    {year: year} ]
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


//year player price category
router.get('/findByYPPC/:boardgameDetails', (req, res, next) => {
    const boardgame = JSON.parse(req.params.boardgameDetails);
    const year = boardgame.year;
    const price = boardgame.price;
    const player = boardgame.player;
    const category = boardgame.category;
    
    Boardgame.find({ $and: [ {category: category},
                    {price: {$lte: price}},
                    {min_player: {$lte: player}},
                    {max_player: {$gte: player}},
                    {year: year} ]
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
