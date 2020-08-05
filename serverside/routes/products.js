const express = require('express');
const router = express.Router();
const {arr} =require("../connect/apiService")

router.get('/',(req, res)=>
{ 
    if(arr.length==0){
        res.json({massage:"ERROR"})
    }
    else{
        res.json(arr)
    }
    
});

module.exports = router;
