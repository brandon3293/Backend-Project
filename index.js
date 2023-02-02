//status 200 == OK
//status 400 == BAD


const express = require('express');
const app = express();

app.use(express.json());


genre=["Pop", "Hip Hop", "Rap", "Classical", "Rock", "Jazz", "Blues"]
genre=genre.sort();

songs=[
    {id:1, name:'War Pigs', genre:'Heavy Metal'},
    {id:2, name:'', genre:''},
    {id:3, name:'', genre:''},
    {id:4, name:'', genre:''}
]
//get requests


//post requests


//delete requests


app.listen(500,()=>{
    console.log('listening on port 500 ...');
});