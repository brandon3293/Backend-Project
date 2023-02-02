//Brandon Angos Web Dev  Period 7/8 Even
//status 200 == OK
//status 400 == BAD
//status 404 === error

//1.Programs  use APIs to communicate with one another. 
//Its grouped in different categories if the program wishes to obtain info 
//like if I wanted to get the songs or genres a GET request would be sent
//However I I wished to change something, add or delete a POST, PUT or Delete 
//request would be sent
//2.Learned a bit more about APIs and the different requests sent and 
//gained a bit more experience in using Express
//3.Project could be extended by maybe trying to use 
//other libraries to send songs in files by using those APIs
const express = require('express');
const app = express();


genre=["Pop", "Hip Hop", "Rap", "Classical", "Rock", "Jazz", "Blues"]
genre=genre.sort();

songs=[
    {id:1, name:"All Right Now", genre:"Rock", singer:"Free"},
    {id:2, name:"Uptown Funk!", genre:"Pop", singer:"Mark Ronson"},
    {id:3, name:"Lush Life", genre:"Jazz", singer:"Zara Larrason"},
    {id:4, name:"Deep Cover", genre:"Hip Hop", singer:"Dr. Dre"}
]
// songs=songs.sort(function (a, b) {
//     if (a.genre < b.genre) {
//       return -1;
//     }
//     if (a.genre > b.genre) {
//       return 1;
//     }
//     return 0;
//   });
app.use(express.json());

//get requests
app.get('/', (req, res) => {
    res.status(200).send('Welcome to Brandon\'s music app!')
})

app.get('/api/genres',(req,res)=>{
    res.status(200).send(genre);
});

app.get('/api/genres/:genre',(req,res)=>{
    let filtered=songs.filter(s=> s.genre ===req.params.genre);
    if(filtered.length===0){
        res.status(404).send("Genre not found");
        return
    }
    res.status(200).send(filtered);
});

app.get('/api/songs',(req,res)=>{
    res.status(200).send(songs);
});

app.get('/api/songs/:id',(req,res)=>{
    let song=songs.find(s=> s.id ===parseInt(req.params.id));
    if(!song){
        res.status(404).send("The song with the given ID was not found");
        return
    }
    res.status(200).send(song);
});

app.get('/api/:singer',(req,res)=>{
    let artists=songs.filter(s=> s.singer ===req.params.singer);
    if(artists.length===0){
        res.artist(404).send("No songs under listed artist");
        return
    }
    res.status(200).send(artists);
});


//post requests

app.post('/api/songs',(req, res)=>{
    let name=req.body.name;
    let genre=req.body.genre;
    let singer=req.body.singer;

    if(!genre || !name || !singer){
        res.status(400).send("Genre, Name and Singer required");
        return
    }else if(name.length < 3 || name.length > 32){
        res.status(400).send("Song name must be between 3 and 32 characters");
        return
    }
    let song={
        id:songs.length+1,
        name:name,
        genre:genre,
        singer:singer
    }
    songs.push(song);
    res.status(200).send(song);
});

//Put requests

app.put('/api/songs/:id',(req,res)=>{
    let song=songs.find(s=>s.id===parseInt(req.params.id));
    if(!song){
        res.status(404).send('The song was not found')
        return
    }else if (!req.body.genre || !req.body.name || !req.body.singer){
        res.status(404).send("Genre, Name and Singer required")
    }
    else if (req.body.name.length < 3 || req.body.name.length > 32){
        res.status(404).send('Song name must be between 3 and 32 characters')
        return
    }else{
        song["name"]=req.body.name
        song["genre"]=req.body.genre;
        song["singer"]= req.body.singer;
        res.status(200).send(song);
    }
});

//delete requests

app.delete('/api/songs/:id', (req,res)=>{
    let song = songs.find(s => s.id === parseInt(req.params.id))
    if (!song){
        res.status(404).send('The song was not found')
        return
    }
    else{
        let idx = songs.indexOf(song)
        songs.splice(idx, idx+1)
        res.status(200).send(song)

    }
});

app.listen(500,()=>{
    console.log('listening on port 500 ...');
});