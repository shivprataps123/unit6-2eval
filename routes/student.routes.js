const express=require("express");
const {Router}=require("express");
const app=express();
const fs=require("fs");
const {validator}=require("../middlewares/validator.middleware");
const students=Router();
app.use(express.json());

students.get("/",(req,res)=>{
    const data=fs.readFileSync("../db.json",{encoding:"utf-8"});
    const parsed=JSON.parse(data);
    const item=parsed.data;
    res.send(JSON.stringify(item));
})
students.get("/:rollNo",(req,res)=>{
    const id=req.params.empID;
   // const post=req.body;
    const previous=fs.readFileSync("../db.json",{encoding:"utf-8"});
    const parsed=JSON.parse(previous);
    const older=parsed.students;
    const newD=older.map((p)=>{
        if(p.roll_no===Number(id)){
            return students;
        }else{
            return p
        }
    })
    parsed.students=newD;

})

students.post("/addstudent",(req,res)=>{
    const post=req.body;
    const add=fs.readFileSync("../db.json",{encoding:"utf-8"})
    const parsed=JSON.parse(add);
    const posts=parsed.students;
    posts.push(post);
    const l_Stringify=JSON.stringify(parsed);
    fs.writeFileSync("../db.json",l_Stringify,"utf-8");
    res.send("students is added");
})
app.use(validator);
students.patch("/rollNo",(req,res)=>{
     const id=req.params.rollNo;
    const post=req.body;
    const prev=fs.readFileSync("../db.json",{encoding:"utf-8"});
    const parsed=JSON.parse(prev);
    const old=parsed.students;
    const n_d=old.map((p)=>{
        if(p.roll_no===Number(id)){
            return post;
        }else{
            return p
        }
    })
    parsed.students=n_d

    const newt=JSON.stringify(parsed)
    fs.writeFileSync("../db.json",newt,"utf-8");
    res.send("modify")
})

students.delete("students/:rollNo",(req,res)=>{
    const id=req.params.rollNo;
    const prev=fs.readFileSync("../db.json",{encoding:"utf-8"});
    const parsed=JSON.parse(prev);
    const old=parsed.students;
    const newData=old.filter((p)=>{
        p.roll_no===Number(id);
    })
    parsed.students=newData;

    const l_d=JSON.stringify(parsed);
    fs.writeFileSync('../db.json',l_d,'utf-8');
    res.send("delete")

})

module.exports=students