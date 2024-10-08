const {parse}=require('csv-parse')
const fs=require('fs')
const path=require('path')

function isHabitablePlanet(planet){
return planet['koi_disposition']==='CONFIRMED'&&planet['koi_insol']>.36 &&
planet['koi_insol']<1.11 && planet['koi_prad']<1.6;

}
const habitablePlanets=[]

function loadPlanetsData(){
    return new Promise((resolve,reject)=>{ fs.createReadStream(path.join(__dirname,'..','..','Data','kepler_data.csv'))
        .pipe(parse({
            comment:'#',
            columns:true,
            
        }))
        .on('data',(data)=>{
            if(isHabitablePlanet(data))
            habitablePlanets.push(data)
        })
        .on('error',(error)=>{
            console.log(error)
            reject(error)
        })
        .on('end',()=>{
            console.log(`${habitablePlanets.length} habitable planets found`)
             resolve();
             })
        })
}

function getAllplanets(){
    return habitablePlanets
}

module.exports={
   getAllplanets,
    loadPlanetsData
}