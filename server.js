const express = require('express');
const app = express();
const port = 3000; // You can use any port you prefer

// Define a route
app.get('/', (req, res) => {
  res.send("Backend server side practice");
});

app.get('/date', (req, res) => {
    let date = new Date()
    console.log(date)
  res.send(`Todays date is ${date}`);
});

app.get('/page',(req,res)=>{
    res.sendFile('./src/app.html',{root:__dirname})
})

// Start the server
app.listen(3000);
