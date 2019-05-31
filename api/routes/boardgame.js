const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Boardgame = require('../models/boardgame');

router.get('/', (req, res, next) => {
    Boardgame.find()
        .select('_id name price boardgame_url boardgame_id image_url age category designer complexity year min_time max_time avg_time min_player max_player avg_rating')
        .exec()
        .then(docs => {
            res.status(200).json({
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
                    }
                }).sort((a, b) => parseFloat(a.avg_rating) - parseFloat(b.avg_rating))
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
});

router.post('/', (req, res, next) => {
    const boardgame = new Boardgame({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price,
        boardgame_url: req.body.boardgame_url,
        boardgame_id: req.body.boardgame_id,
        image_url: req.body.image_url,
        age: req.body.age,
        category: req.body.category,
        designer: req.body.designer,
        complexity: req.body.complexity,
        year: req.body.year,
        min_time: req.body.min_time,
        max_time: req.body.max_time,
        avg_time: req.body.avg_time,
        min_player: req.body.min_player,
        max_player: req.body.max_player,
        avg_rating: req.body.avg_rating
    });
    boardgame
        .save()
        .then(result => {
            res.status(201).json({
                message: 'Adding boardgame to store success',
                boardgame: {
                    _id: result._id,
                    name: result.name,
                    price: result.price,
                    boardgame_url: result.boardgame_url,
                    boardgame_id: result.boardgame_id,
                    image_url: result.image_url,
                    age: result.age,
                    category: result.category,
                    designer: result.designer,
                    complexity: result.complexity,
                    year: result.year,
                    min_time: result.min_time,
                    max_time: result.max_time,
                    avg_time: result.avg_time,
                    min_player: result.min_player,
                    max_player: result.max_player,
                    avg_rating: result.avg_rating
                }
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });

});

router.get('/findByBoardgameId/:boardgameId', (req, res, next) => {
    const id = req.params.boardgameId;

    Boardgame.find({ _id: id })
        .exec()
        .then(doc => {
            if (doc) {
                res.status(200).json({
                    boardgame: doc
                });
            } else {
                res.status(404).json({
                    message: 'Boardgame' + id + 'does not exist'
                })
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

router.get('/findByName/:boardgameName', (req, res, next) => {
    const name = req.params.boardgameName;

    Boardgame.find({ name: name })
        .exec()
        .then(doc => {
            if (doc) {
                res.status(200).json({
                    boardgame: doc
                });
            } else {
                res.status(404).json({
                    message: 'Boardgame name ' + name + ' does not exist'
                });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        });
});

router.get('/findByAge/:boardgameAge', (req, res, next) => {
    const age = req.params.boardgameAge;

    Boardgame.find({ age: age })
        .exec()
        .then(doc => {
            if (doc) {
                res.status(200).json({
                    boardgame: doc
                });
            } else {
                res.status(404).json({
                    message: 'Boardgame age' + age + ' does not exist'
                });
            }
        }).sort((a, b) => parseFloat(a.avg_rating) - parseFloat(b.avg_rating))
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        });
});
//localhost:3000/boardgame/findByCategory/Thematic in POSTMAN
router.get('/findByCategory/:boardgameCategory', (req, res, next) => {
    const category = req.params.boardgameCategory;

    Boardgame.find({ category: category })
        .exec()
        .then(doc => {
            if (doc) {
                res.status(200).json({
                    boardgame: doc
                });
            } else {
                res.status(404).json({
                    message: 'Boardgame category' + category + ' does not exist'
                });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        });
});

//localhost:3000/boardgame/findByPrice/100 in POSTMAN
router.get('/findByPrice/:boardgamePrice', (req, res, next) => {
    const price = req.params.boardgamePrice;

    Boardgame.find({ price: { $lte: price } })
        .exec()
        .then(doc => {
            if (doc) {
                res.status(200).json({
                    boardgame: doc
                });
            } else {
                res.status(404).json({
                    message: 'Boardgame price' + price + ' does not exist'
                });
            }
        }).sort((a, b) => parseFloat(a.avg_rating) - parseFloat(b.avg_rating))
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        });
});

router.get('/findByTime/:boardgameTime', (req, res, next) => {
    const time = req.params.boardgameTime;

    Boardgame.find({
        $and: [
            { min_time: { $lte: time } },
            { max_time: { $gte: time } }]
    })
        .exec()
        .then(doc => {
            if (doc) {
                res.status(200).json({
                    boardgame: doc
                });
            } else {
                res.status(404).json({
                    message: 'Boardgame time' + time + ' does not exist'
                });
            }
        }).sort((a, b) => parseFloat(a.avg_rating) - parseFloat(b.avg_rating))
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        });
});

router.get('/findByYear/:boardgameYear', (req, res, next) => {
    const year = req.params.boardgameYear;

    Boardgame.find({ year: year })
        .exec()
        .then(doc => {
            if (doc) {
                res.status(200).json({
                    boardgame: doc
                });
            } else {
                res.status(404).json({
                    message: 'Boardgame year' + year + ' does not exist'
                });
            }
        }).sort((a, b) => parseFloat(a.avg_rating) - parseFloat(b.avg_rating))
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        });
});

router.get('/findByPlayer/:boardgamePlayer', (req, res, next) => {
    const player = req.params.boardgamePlayer;

    Boardgame.find({
        $and: [
            { min_player: { $lte: player } },
            { max_player: { $gte: player } }]
    })
        .exec()
        .then(doc => {
            if (doc) {
                res.status(200).json({
                    boardgame: doc
                });
            } else {
                res.status(404).json({
                    message: 'Boardgame year' + year + ' does not exist'
                });
            }
        }).sort((a, b) => parseFloat(a.avg_rating) - parseFloat(b.avg_rating))
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        });
});

router.patch('/update/:boardgameId', (req, res, next) => {
    const id = req.params.boardgameId;
    const updateOps = {};

    for (const ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }

    Boardgame.updateOne({ _id: id }, { $set: updateOps })
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'Boardgame: ' + id + ' updated!!'
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

router.delete('/delete/:boardgameId', (req, res, next) => {
    const id = req.params.boardgameId;
    Boardgame.remove({ _id: id })
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'Boardgame: ' + id + ' is deleted!!'
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

router.delete('/deleteName/:boardgameName', (req, res, next) => {
    const bgName = req.params.boardgameName;
    Boardgame.remove({ name: bgName })
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'Boardgame: ' + name + ' is deleted!!'
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

router.get('/findByAll/:boardgameDetails', (req, res, next) => {
    const boardgame = JSON.parse(req.params.boardgameDetails);
    const category = boardgame.category;
    const price = boardgame.price;
    const time = boardgame.time;
    const player = boardgame.player;
    const year = boardgame.year;

    Boardgame.find({
        $and: [{ category: category },
        { price: { $lte: price } }, { year: year }, { min_player: { $lte: player } },
        { max_player: { $gte: player } }, { min_time: { $lte: time } },
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

module.exports = router;


// function _isContains(json, value) {
//     let contains = false;
//     Object.keys(json).some(key => {
//         contains = typeof json[key] === 'object' ?
//             _isContains(json[key], value) : json[key] === value;
//         return contains;
//     });
//     return !contains;
// }

// router.get('/findByA/:boardgameDetails', (req, res, next) => {
//     const boardgame = JSON.parse(req.params.boardgameDetails);
//     const price = boardgame.price;
//     const category = boardgame.category;
//     const designer = boardgame.designer;
//     // const age = boardgame.age;
//     // if(a === "") category = ["Thematic","Strategy","War"];
//     // if (item in values && 'total' in values[item]) {
//     //     console.log('defined');
//     // }
//     // console.log(_isContains(category,""));
//     if (category === "")
//         var b = Boardgame.find({
//             $and: [
//                 { price: { $gte: price[0], $lte: price[1] } },
//                 // { category: category },
//                 { designer: designer }
//             ]
//         }
//         )

//     else var b = Boardgame.find({
//         $and: [
//             { price: { $gte: price[0], $lte: price[1] } },
//             { category: category },
//             { designer: designer }
//         ]
//     }
//     )
//     // .filter(data, { key: value, ... });
//     //                     {language: { $elemMatch: {language} }} ]{price: { $gte: price[0], $lte: price[1] }
//     //console.log(price);

//     b.exec()
//         .then(docs => {
//             const response = {
//                 count: docs.length,
//                 boardgame: docs.map(doc => {
//                     return {
//                         _id: doc._id,
//                         name: doc.name,
//                         price: doc.price,
//                         boardgame_url: doc.boardgame_url,
//                         boardgame_id: doc.boardgame_id,
//                         image_url: doc.image_url,
//                         age: doc.age,
//                         category: doc.category,
//                         designer: doc.designer,
//                         complexity: doc.complexity,
//                         year: doc.year,
//                         min_time: doc.min_time,
//                         max_time: doc.max_time,
//                         avg_time: doc.avg_time,
//                         min_player: doc.min_player,
//                         max_player: doc.max_player,
//                         avg_rating: doc.avg_rating
//                     };
//                 })
//             };
//             console.log(category);
//             res.status(200).json(response);
//         })
//         .catch(err => {
//             console.log(category);
//             console.log(err);
//             res.status(500).json({
//                 error: err
//             });
//         });
// });


// const product = JSON.parse(req.params.product);
//     const price = product.price;
//     const category = product.category;
//     const typeOfPlaying = product.typeOfPlaying;
//     const language = product.language;

//     Product.find({ $and: [ {price: { $gte: price[0], $lte: price[1] }},
//                     {category: { $elemMatch: {category} }},
//                     {typeOfPlaying: { $elemMatch: {typeOfPlaying} }},
//                     {language: { $elemMatch: {language} }} ]
//                  })
//     .exec()
//     .then(docs => {
//         const response = {
//             count: docs.length,
//             product: docs.map(doc => {
//                 return {
//                     _id: doc._id,
//                     dlcId: doc.dlcId,
//                     achievementId: doc.achievementId,
//                     name: doc.name,
//                     description: doc.description,
//                     price: doc.price,
//                     publisher: doc.publisher,
//                     category: doc.category,
//                     typeOfPlaying: doc.typeOfPlaying,
//                     releaseDate: doc.releaseDate,
//                     developer: doc.developer,
//                     size: doc.size,
//                     language: doc.language,
//                     ageRate: doc.ageRate,
//                     platform: doc.platform,
//                     productImage: doc.productImage
//                 };
//             })
//         };

//         res.status(200).json(response);
//     })
//     .catch(err => {
//         console.log(err);
//         res.status(500).json({
//             error: err
//         });
//     });
// });

// router.get('/findByFilter/:boardgame', (req, res, next) => {
//     const boardgame = JSON.parse(req.params.boardgame);
//     const category = boardgame.category;

//     Boardgame.find({category: { $elemMatch: {category} }})
//     .exec()
//     .then(docs => {
//         const response = {
//             count: docs.length,
//             boardgame: docs.map(doc => {
//                 return {
//                     _id: doc._id,
//                     name: doc.name,
//                     price: doc.price,
//                     boardgame_url: doc.boardgame_url,
//                     boardgame_id: doc.boardgame_id,
//                     image_url: doc.image_url,
//                     age: doc.age,
//                     category: doc.category,
//                     designer: doc.designer,
//                     complexity: doc.complexity,
//                     year: doc.year,
//                     min_time: doc.min_time,
//                     max_time: doc.max_time,
//                     avg_time: doc.avg_time,
//                     min_player: doc.min_player,
//                     max_player: doc.max_player,
//                     avg_rating: doc.avg_rating
//                 };
//             })
//         };
//         res.status(200).json(response);
//     })
//     .catch(err => {
//         console.log(err);
//         res.status(500).json({
//             error: err
//         });
//     });
// });