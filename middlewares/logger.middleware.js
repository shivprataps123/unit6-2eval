const fs=require("fs")
const logger=(req,res,next)=>{
    const text=`${req.method},${req.url},${req.headers['user-agent']}/n`
   fs.appendFileSync("../logs.txt",text,'utf-8');
   next();
}
module.exports={logger};