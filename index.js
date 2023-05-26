const express=require('express')
const app=express()
const axios=require('axios')
const port=3000

app.use(express.static('public'));


app.get('/',(req,res)=>{
    res.sendFile(__dirname+'index.html')
})


app.get('/getInfo',async (req,res)=>{
    try{
      const respone=await axios.get('https://cbu.uz/ru/arkhiv-kursov-valyut/json/')
      console.log(respone.data)
      res.send(respone.data)
    }

    catch(error){
        console.log(error)
    }
})


app.listen(port,()=>{
    console.log('listening on port'+port)
})