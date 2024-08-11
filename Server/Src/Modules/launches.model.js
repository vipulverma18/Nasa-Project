const launches=new Map();

const launch={
    flightNumber:100,
    mission:'Kepler Exploration X',
    rocket:'Explorer ISI',
    date:new Date('27 December,2030'),
    destination:'Kepler-442 b',
    customer:['ZTO','NASA'],
    upcoming:true,
    success:true,
       
}

launches.set(launch.flightNumber,launch)

module.exports={
    launches,
}