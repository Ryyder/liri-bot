//environment variable config file
require("dotenv").config();
//include axios npm package (using axios instead of ajax for api calls)
const axios = require('axios');
//include spotify npm  package (spotify api calls)
var Spotify = require('node-spotify-api');
//include moment npm package (formatting date)
var moment = require('moment');
//spotify api key and secret code link
var keys = require("./keys.js");
// fs is a core Node package for reading and writing files
var fs = require("fs");
//save our process argv[2] into our action variable i.e concert-this
var action = process.argv[2];
//save our process argv[3] into our argument variable i.e song name, movie name. use splice and join to only look for any other arguments process.argv[2]
var argument = process.argv.slice(3).join(" ");


//concertThis function
function concertThis (bandName) {

  //use axios for a get request on this bands in town api
  axios.get("https://rest.bandsintown.com/artists/" + bandName + "/events?app_id=codingbootcamp")
  .then(function (response) {
    //we loop through the object
    for(key of response.data) {
      console.log("---------------------------------------------");
      //return venue name
      console.log("Venue Name: " + key.venue.name);
      //return venue location
      console.log("Venue Location: " + key.venue.city + ", " + key.venue.region);
      //return date, formatted using moment
      console.log("Date: " + moment(key.datetime).format("MM/DD/YYYY"));
      console.log("---------------------------------------------");

    }
  })
}

//function spotifyThis
function spotifyThis (songName) {
  //our id and secret key linked  using our environment and key files
  var spotify = new Spotify(keys.spotify);

  //if there is no songname given as an argument, we use ace of base "The Sign" as a default search
  if (songName === '') {
    spotify.search({ type: 'track', query: 'The Sign' }, function(err, data) {
      if (err) {
        return console.log('Error occurred: ' + err);
      }
      //loop through the spotify data object
      for (var i = 0; i < data.tracks.items.length; i++) {
        console.log("------------------------------------------------------------------");
        //return artist(s)
        console.log("Artist(s): " + data.tracks.items[i].artists[0].name);
        //return song name 
        console.log("Song Name: " + data.tracks.items[i].name);
        //return song preview  
        console.log("Preview: " + data.tracks.items[i].preview_url);
        //return album name 
        console.log("Album: " + data.tracks.items[i].album.name); 
        console.log("------------------------------------------------------------------");

    }
  
  });

  } 
  //if we have an argument
  else {
    //query spotify api using the argument given
    spotify.search({ type: 'track', query: songName }, function(err, data) {
      if (err) {
        return console.log('Error occurred: ' + err);
      }
      //we loop through our spotify data object
      for (var i = 0; i < data.tracks.items.length; i++) {
          console.log("------------------------------------------------------------------");
          //return artist(s)
          console.log("Artist(s): " + data.tracks.items[i].artists[0].name);
          //return song name 
          console.log("Song Name: " + data.tracks.items[i].name);
          //return song preview  
          console.log("Preview: " + data.tracks.items[i].preview_url);
          //return album name 
          console.log("Album: " + data.tracks.items[i].album.name); 
          console.log("------------------------------------------------------------------");
      }
    });
  } 
}

//function movieThis
function movieThis (movieName) {

  if (movieName === '') {
    axios.get("http://www.omdbapi.com/?t=mr+nobody&apikey=trilogy")
    .then(function (response) {
      // handle success

      console.log("-----------------------------------------------------------------");
      //we return movie title
      console.log("Title: " + response.data.Title);
      //when the movie was released
      console.log("Released: " + response.data.Released);
      //return IMDB rating
      console.log("IMDB Rating: " + response.data.imdbRating);
      //return rotten tomatoes rating
      console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
      //return country produced
      console.log("Produced At This Country: " + response.data.Country);
      //return language
      console.log("Language: " + response.data.Language);
      //return plot
      console.log("Plot: " + response.data.Plot);
      //return actors
      console.log("Actors: " + response.data.Actors);
      console.log("-----------------------------------------------------------------");
    })

  }
  else {
    //use axios for a get request using the omdbapi query
    axios.get("http://www.omdbapi.com/?t=" + movieName + "&apikey=trilogy")
    .then(function (response) {
    // handle success

      console.log("-----------------------------------------------------------------");
      //we return movie title
      console.log("Title: " + response.data.Title);
      //when the movie was released
      console.log("Released: " + response.data.Released);
      //IMDB rating
      console.log("IMDB Rating: " + response.data.imdbRating);
      //rotten tomatoes rating
      console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
      //country produced
      console.log("Produced At This Country: " + response.data.Country);
      //language
      console.log("Language: " + response.data.Language);
      //plot
      console.log("Plot: " + response.data.Plot);
      //actors
      console.log("Actors: " + response.data.Actors);
      console.log("-----------------------------------------------------------------");
    })
  }
}

//doThis function. for the case where the user type do-what-it-says
function doThis () {

  fs.readFile("random.txt", "utf8", function(error, data) {

    // If the code experiences any errors it will log the error to the console.
    if (error) {
      return console.log(error);
    }
  
    // We will then print the contents of data
    console.log(data);
  
    // Then split it by commas (to make it more readable)
    var dataArr = data.split(",");
  
    //first element in the array is our action
    action = dataArr[0];
    //second element in the array is our argument
    argument = dataArr[1];
    //remove the front first quotation mark
    argument = argument.substr(1, argument.length);
    //remove the last quotation mark
    argument = argument.substr(0, argument.length - 1);

    switch(action) {
      //if concert-this is entered at process.argv[2]....
      case "concert-this":
        //call concertThis 
        concertThis(argument);
      break;
      //if spotify-this-song is entered at process.argv[2]...
      case "spotify-this-song":
        //call spotifyThis
        spotifyThis(argument);
      break;
      //if movie-this is entered as process.argv[2]
      case "movie-this":
        //call movieThis
        movieThis(argument);
      break;
    }
  
  });
  

}

//our switch cases
switch(action) {
  //if concert-this is entered at process.argv[2]....
  case "concert-this":
    //call concertThis 
    concertThis(argument);
  break;
  //if spotify-this-song is entered at process.argv[2]...
  case "spotify-this-song":
    //call spotifyThis
    spotifyThis(argument);
  break;
  //if movie-this is entered as process.argv[2]
  case "movie-this":
    //call movieThis
    movieThis(argument);
  break;
  case "do-what-it-says":
    doThis()
  break;
}

