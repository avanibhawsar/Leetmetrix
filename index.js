//including express module and initialising an app
const express = require('express')
const app = express()
//variabe that stores the port number  
const port = 3000
//laoding middleware into the app
//inbuilt middleware
app.use(express.json());

//middleware -logiinh , auth , vali
const loggingMiddleware= function(req, res, next){
    console.log("logging kr liya ");
    next();
}

app.use(loggingMiddleware);
const authMiddleware= function(req, res, next){
    console.log("authentication kr liya ");
    next();
}
app.use(authMiddleware);
const validationMiddleware= function(req, res, next){
    console.log("validate kr liya ");
    next();
}
app.use(validationMiddleware);


app.get('/', (req, res) => {
    console.log("m route handler hu");

  res.send('Hello World!')
});

//requests 
// app.get('/',(req,res)=>{
//    // res.send("got a get request")
//    res.sendFile('./dummy.html',
//     {root:__dirname});
// })

// app.post('/items',(req,res)=>{
//    res.send("got a post request")
   
// })

// app.put('/items/:id',(req,res)=>{
//     res.send("got a put request")
// })

// app.delete('/items/:id',(req,res)=>{
//     res.send("got a delete request")
// })
//start your app on port number 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})