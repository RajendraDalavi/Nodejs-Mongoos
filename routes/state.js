var express = require("express");
var router = express.Router();
var State = require("../models/State");

router.put("/",(req,res)=>{
    var body = req.body;
    let state = new State();
    state.name = body.name;
    state.population = body.population;
    state.save().then((result)=>{
        res.end(JSON.stringify({status:"success",data:result}));
    }),(error)=>{
        res.end(JSON.stringify({status:"failed",data:error}));

    }
    // res.send(JSON.stringify({status:"sucess"}));
});

router.post("/",async(req,res)=>{
    var body = req.body;
    let state = await state.findById(body.id);

    state.name = body.name;
    state.population= body.population;
    state.save().then((result)=>{
        res.end(JSON.stringify({status:"success",data:result}));
    }),(error)=>{
        res.end(JSON.stringify({status:"failed",data:error}));

    }
    // res.send(JSON.stringify({status:"sucess"}));
});



module.exports = router;