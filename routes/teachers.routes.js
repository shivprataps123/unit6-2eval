const express=require("express");
const app=express();
const {Router}=require("express");

const fs=require("fs");
const teachers=Router();
app.use(express.json());

teachers.get("/",(req,res)=>{
    const data=fs.readFileSync("../db.json",{encoding:"utf-8"});
    const parsed=JSON.parse(data);
    const item=parsed.data;
    res.send(JSON.stringify(item));
})
teachers.get("/:empID",(req,res)=>{
    const id=req.params.empID;
   // const post=req.body;
    const previous=fs.readFileSync("../db.json",{encoding:"utf-8"});
    const parsed=JSON.parse(previous);
    const older=parsed.teachers;
    const newD=older.map((p)=>{
        if(p.emp_id===Number(id)){
            return teachers;
        }else{
            return p
        }
    })
    parsed.teachers=newD;

})

teachers.post("/addteacher",(req,res)=>{
    const post=req.body;
    const add=fs.readFileSync("../db.json",{encoding:"utf-8"})
    const parsed=JSON.parse(add);
    const posts=parsed.teachers;
    posts.push(post);
    const l_Stringify=JSON.stringify(parsed);
    fs.writeFileSync("../db.json",l_Stringify,"utf-8");
    res.send("teachers is added");
})

module.exports=teachers;