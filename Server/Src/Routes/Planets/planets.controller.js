const {planets}=require('../../Modules/planets.model')

function getAllPlanets(req,res){
    return res.status(200).json(planets)
}

module.exports={getAllPlanets};