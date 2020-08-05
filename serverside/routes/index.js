const express = require('express');
const router = express.Router();
const {bodydata} =require("../connect/apiService")

router.get('/',(req, res)=> {
  res.json({massage:"hello"})
  
});

module.exports = router;
