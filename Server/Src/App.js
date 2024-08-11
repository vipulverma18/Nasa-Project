const express=require('express');
const path=require('path');
const cors=require('cors');
const morgan=require('morgan');

const planetsRouter = require('./Routes/Planets/planets.router');
const launchesRouter = require('./Routes/launches/launches.router');


const app=express()
app.use(cors({
    origin:'http://localhost:3000'
}))

app.use(morgan('combined'))

app.get((req,res)=>{
    res.sendFile(path.join(__dirname,'..','public'))
})
app.use(express.json())
app.use(express.static(path.join(__dirname,'..','public')))

app.use(planetsRouter)
app.use(launchesRouter)

module.exports=app;


