const express = require('express');


require('./db/connectdb');
const path = require('path');
// import web from "./routes/web.js"
const web = require('./routes/web')

// import { route } from 'express/lib/application'
const app = express();



const port = process.env.PORT || '5000';


app.use(express.urlencoded({extended:false})) //a built-in middleware function in Express. 
// It parses incoming requests with urlencoded payloads and is based on body-parser

//Static File
// app.use('/student', express.static(join(process.cwd(), "public")))
const PublicPath = path.join(__dirname, 'public');
app.use("/student", express.static(PublicPath))
app.use("/student/edit", express.static(PublicPath))
// app.use(express.static())

//Set tamplte Engine
app.set('view engine', 'ejs')

//Routes use
app.use('/student/', web);
app.listen(port, ()=>{
    console.log(`Sever is listening at http://localhost:${port}`);
})