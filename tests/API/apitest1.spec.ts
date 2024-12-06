import {test, expect} from '@playwright/test'

test.describe('apitest1 @apitest1',  () => {

    test('GET request - Retrieve and validate data', async({request}) =>{
        const response = await request.get('/booking/8')
        const responseData = await response.json()
        console.log('responseData:'+responseData)
        expect(response.status()).toBe(200)
        expect(response.ok()).toBeTruthy()
        expect(responseData).toHaveProperty("firstname", "Sally")
    })

    test.only('POST request - create a data', async({request}) =>{
        const PostResponse = await request.post('/booking', {
            data:{
                "firstname": "ABC",
                "lastname": "XYZ",
                "totalprice": 1000,
                "depositpaid": true,
                "bookingdates": {
                    "checkin": "2018-01-01",
                    "checkout": "2019-01-01"
                },
                "additionalneeds": "super bowls"
            }

        })
        const PostResponseData = await PostResponse.json()
        console.log('responseData:'+JSON.stringify(PostResponseData))
        expect(PostResponse.status()).toBe(200)
        expect(PostResponse.ok()).toBeTruthy()
        expect(PostResponseData).toHaveProperty("booking.firstname", "ABC")
        const booking_id = PostResponseData.bookingid
        console.log('booking_id:'+booking_id)
        const GetResponse = await request.get(`/booking/${booking_id}`)
        const GetResponseData = await GetResponse.json()
        console.log('responseData:'+JSON.stringify(GetResponseData))
        expect(PostResponseData).toHaveProperty("booking.lastname", "XYZ")
    })
})