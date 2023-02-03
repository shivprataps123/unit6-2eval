const express=require("express");
const app=express();
const {logger}=require("./middlewares/logger.middleware");
const teachersRoutes=require('./routes/teachers.routes');
const studentsRoutes=require('./routes/student.routes');
app.use(logger);
app.use("teachers",teachersRoutes);
app.use("students",studentsRoutes);


app.listen(2002,()=>{
    console.log('http://localhost:2002');
})