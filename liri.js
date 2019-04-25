require("dotenv").config();
const axios = require('axios');
var Spotify = require('node-spotify-api');

var keys = require("./keys.js");
var action = process.argv[2];
var argument = process.argv.slice(3).join(" ");




function concertThis (bandName) {

  axios.get("https://rest.bandsintown.com/artists/" + bandName + "/events?app_id=codingbootcamp")
  .then(function (response) {
    // handle success
    for(key of response.data) {
      console.log("---------------------------------------------");
      console.log("Venue Name: " + key.venue.name);
      console.log("Venue Location: " + key.venue.city + ", " + key.venue.region);
      console.log("Date: " + key.datetime);
      console.log("---------------------------------------------");

    }
    //console.log(response.data);
  })

}


function spotifyThis (songName) {
  var spotify = new Spotify({
    id: "b5a0185db6c640828594fe9febfc77af",
    secret: "70a66d4d894b41578be8aa82ddc442c4"
  });

  if (songName === '') {
    spotify.search({ type: 'track', query: 'The Sign' }, function(err, data) {
      if (err) {
        return console.log('Error occurred: ' + err);
      }
   
      for (var i = 0; i < data.tracks.items.length; i++) {
        console.log("------------------------------------------------------------------");
        console.log("Artist(s): " + data.tracks.items[i].artists[0].name); 
        console.log("Song Name: " + data.tracks.items[i].name);  
        console.log("Preview: " + data.tracks.items[i].preview_url); 
        console.log("Album: " + data.tracks.items[i].album.name); 
        console.log("------------------------------------------------------------------");

    }
  
  });

  } 
  else {
  spotify.search({ type: 'track', query: songName }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
   
    for (var i = 0; i < data.tracks.items.length; i++) {
        console.log("------------------------------------------------------------------");
        console.log("Artist(s): " + data.tracks.items[i].artists[0].name); 
        console.log("Song Name: " + data.tracks.items[i].name);  
        console.log("Preview: " + data.tracks.items[i].preview_url); 
        console.log("Album: " + data.tracks.items[i].album.name); 
        console.log("------------------------------------------------------------------");

    }
});

}
}

switch(action) {
  case "concert-this": 
    concertThis(argument);
  case "spotify-this-song":
    spotifyThis(argument);
}

console.log("input string formatted: " + argument);



//convertThis("odesza");

//console.log(process.argv);