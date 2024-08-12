const {getAllLaunches,addNewLaunch, launchExistById, abortlaunchById}=require('../../Modules/launches.model')

function httpgetAllLaunches (req,res){
return res.status(200).json(getAllLaunches())
}

function httpAddNewLaunch(req,res)
{
const launch =req.body;

if(!launch.mission || !launch.target ||!launch.rocket ||!launch.launchDate)
{
    return res.status(400).json({
        error:'Missing required launch property'
    })
}
launch.launchDate=new Date(launch.launchDate)
if(isNaN(launch.launchDate)){
    res.status(400).json({
        error:'Invalid Date'
    })
}

addNewLaunch(launch)
return res.status(201).json(launch)
}

function httpAbortLaunch(req,res){
    const launchId=Number(req.params.id)
    if(!launchExistById(launchId)){
        return res.status(404).json({
            error:'Flight Number Not Found'
        })
    }
const aborted=abortlaunchById(launchId)
return res.status(200).json(aborted)
}


module.exports={
    httpgetAllLaunches,
    httpAddNewLaunch,
    httpAbortLaunch
}