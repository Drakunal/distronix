const request = require('request')

request.post('http://35.197.106.255:3000/api/v1.1/lastMultiple',(error,response,body)=>{

  const data=JSON.parse(body)

   console.log(data.data.id)
   console.log(data.data.latitude)
  
   console.log(data.data.longitude)
}).form({
    
    devid: 'd8c68c44e70825b746c80c41add7279a'
  
  })