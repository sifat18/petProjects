const mon=require('mongoose');

const paper= new mon.Schema({
title:{
    type: String,
    required:true
},
image:{
    type: String,
    // required:true
},
description:{
    type: String,
    lowercase:true,
    required:true
    
},
featured:{
    type: Boolean,
      
}
});

const Paper= mon.model('Paper',paper);

module.exports= Paper;