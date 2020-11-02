


const request = require('request')

const d=process.argv[2]
if(!d)
{


  console.log("Enter the Device id")
}
else{
request.post('http://35.197.106.255:3000/api/v1.1/lastMultiple',(error,response,body)=>{

  const data=JSON.parse(body)
  
    var s=data.data.id
    var lat=data.data.latitude
    var long=data.data.longitude
   console.log(`The Sensor id is: ${s}`)
   console.log(`The Latitude is: ${lat}`)
  
   console.log(`The Longitude is: ${long}`)
}).form({
    
    devid: d
  
  })
}