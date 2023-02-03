const validator=(req,res,next)=>{
    if(req.query==7877&&req.url=='/teachers'){
        next()
    }else{
        res.send("You are not authorised to do this operation")
    }
}

module.exports={validator}