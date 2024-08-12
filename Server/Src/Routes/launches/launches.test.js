const request=require('supertest')
const app=require('../../app')

describe('Test GET /launches',()=>{
    

    test('It should resposne with code 200',async ()=>{
        const response=await request(app)
        .get('/launches')//takes app object and call listen and then use get
        .expect(200)
        .expect('Content-Type',/json/)
        //expect(response.statusCode).toBe(200)
    })
})

const completeLaunchData={ mission:'USSR Enterprise',
    rocket:'ZTM ISI',
    target:'kepler 201b',
    launchDate:'27 January,2030'}

const launchDataWithoutDate={
        mission:'USSR Enterprise',
        rocket:'ZTM ISI',
        target:'kepler 201b',
    }

const launchDataWithInvalidDate={
    mission:'USSR Enterprise',
    rocket:'ZTM ISI',
    target:'kepler 201b',
    launchDate:'Zeus'

}

describe('Test POST /launch',()=>{
    test('It should return status 201',async ()=>{
        const response=await request(app)
        .post('/launches')
        .send(completeLaunchData)
        .expect(201)
        .expect('Content-Type',/json/)

        const requestDate=new Date(completeLaunchData.launchDate).valueOf();
        const responseDate=new Date(response.body.launchDate).valueOf();

        expect(requestDate).toBe(responseDate)
        
        expect(response.body).toMatchObject(launchDataWithoutDate)
    })
    test('it should return missing invalid properties', async ()=>{
        const response=await request(app)
        .post('/launches')
        .send(launchDataWithoutDate)
        .expect(400)
        .expect('Content-Type',/json/)

        expect(response.body).toStrictEqual({
            error:'Missing required launch property'
        })
    })
    test('it should return invalid date if provided',async ()=>{
        const response=await request(app)
        .post('/launches')
        .send(launchDataWithInvalidDate)
        .expect(400)
        .expect('Content-Type',/json/)

        expect(response.body).toStrictEqual({
             error:'Invalid Date'
        })
    })
})