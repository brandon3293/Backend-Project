//status 200 == OK
//status 400 == BAD


const express = require('express');
const app = express();


genre=["Pop", "Hip Hop", "Rap", "Classical", "Rock", "Jazz", "Blues"]
genre=genre.sort();

songs=[
    {id:1, name:'War Pigs', genre:'Heavy Metal'},
    {id:2, name:'War Pigs', genre:'War Pigs'},
    {id:3, name:'War Pigs', genre:'War Pigs'},
    {id:4, name:'War Pigs', genre:'War Pigs'}
]
app.use(express.json());
//get requests
app.get('/', (req, res) => {
    res.status(200).send('Welcome to Brandon\'s music app!')
})

//post requests


//delete requests




app.listen(500,()=>{
    console.log('listening on port 500 ...');
});