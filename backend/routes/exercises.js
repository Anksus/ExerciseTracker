const router = require('express').Router()
let Exercise = require('../models/exercise.model')


router.route('/').get((req,res)=>{
    Exercise.find().then(exercies =>
        res.json(exercies)
    ).catch(err =>
        res.status(400).send("ERROR"+err)
    )
})


router.route('/add').post((req,res)=>{
    const username = req.body.username
    const description = req.body.description
    const date = Date.parse(req.body.date)
    const duration = Number(req.body.duration)

    const newExercise = new Exercise({
        username,
        description,
        duration,
        date
    })

    newExercise.save().then(exer=>
        res.json(exer)
    ).catch(err => res.status(400).json('ERROR'+err))
})


module.exports = router