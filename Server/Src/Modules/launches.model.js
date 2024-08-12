const launches=new Map();

let latestFlightNumber=100;

const launch={
    flightNumber:100,
    mission:'Kepler Exploration X',
    rocket:'Explorer ISI',
    launchDate:new Date('December 27,2030'),
    target:'Kepler-442 b',
    customer:['ZTO','NASA'],
    upcoming:true,
    success:true,
       
}


function getAllLaunches (){
    return Array.from(launches.values())
    }

    function addNewLaunch(launch){
        latestFlightNumber++;
    launches.set(latestFlightNumber,Object.assign(launch,{
        flightNumber:latestFlightNumber,
        customer:['ZTO','NASA'],
         upcoming:true,
         success:true,

    }))
    }
    launches.set(launch.flightNumber,launch)
    function launchExistById(launchId){
         return launches.has(launchId)
        
    }

    function abortlaunchById(launchId){

        const aborted=launches.get(launchId)
        aborted.upcoming=false;
        aborted.success=false;
        return aborted;
    }

  

module.exports={
    getAllLaunches,
    addNewLaunch,
    launchExistById,
    abortlaunchById
}