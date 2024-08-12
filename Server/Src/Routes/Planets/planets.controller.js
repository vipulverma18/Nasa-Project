const {getAllplanets}=require('../../Modules/planets.model')

function httpgetAllPlanets(req,res){
    return res.status(200).json(getAllplanets())
}

module.exports={httpgetAllPlanets};