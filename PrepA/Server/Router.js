const express = require('express');
const path = require('path');
const route = express.Router()

const Frontend = require('../Server/Frontend.js');

route.get('/', Frontend.home )

route.get('*' , (req , res)=>{   res.render('Lost-404' , {})   })


module.exports = route
