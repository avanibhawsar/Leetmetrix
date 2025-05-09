const express = require('express')
const router = express.Router()

//middlewares
const auth = function (req, res,next ){
    console.log("i am inside auth vala middleware")

    // dummy user added
    req.user ={userId:1, role:"student"};
    if(req.user){
        //if a valid user is there ,then proceed to next middlewarre
        next();
    }
    else{
        //if not a valid user 
        res.json({
            success:false,
            message:"not a valid user  ",
        })
    }


}

const isStudent = function(req,res,next){
    console.log(" i am inside student wala middleware")
    if()
}


 


module.exports = router