# liri-bot

## Overview:

This **liri bot** accepts commands (concert-this "band name", spotifiy-this-song "song name", movie-this "movie name"). 

Using the command concert-this "band name" command will return the band and the name of the venue, venue location, and date of the event.

Using the command spotify-this-song "song name" command will return the artist(s), song name, preview link to the song, the album the song came from. If not song is provided, the default search will be "The Sign".

Using the command movie-this "movie name" command will return the title of the movie, the year the movie came out, IMDB rating, rotten tomatoes rating, country where the movie was produced, language of the movie, the plot, and actors in the movie.

Using the command do-what-it-says will read a file called random.txt (has a prebuilt command in that file) and will run the whatever command is called.

### Dependencies

- axios (api calls to bands in town/IMDB)
- node spotify (api call to spotify)
- moment (formatting date of events)
- dotenv (secure spotify api keys)

## Installation

> git clone `https://github.com/Ryyder/liri-bot.git`

> npm i

## Examples

 `node liri concert-this calving harris`

` ---------------------------------------------`
 `Venue Name: Pacha`
 `Venue Location: Ibiza,` 
`Date: 08/20/2019`
` ---------------------------------------------`


`node liri spotify-this-song how deep is your love`

`------------------------------------------------------------------`
`Artist(s): Calvin Harris`
`Song Name: How Deep Is Your Love - Calvin Harris & R3hab Remix`
`Preview: https://p.scdn.co/mp3-preview/1c50f702fdbba93e6a4bb86f98888a69357e4005?cid=b5a0185db6c640828594fe9febfc77af`
`Album: How Deep Is Your Love (Remixes)`
`------------------------------------------------------------------`


`node liri movie-this casino`

`-----------------------------------------------------------------`
`Title: Casino`
`Released: 22 Nov 1995`
`IMDB Rating: 8.2`
`Rotten Tomatoes Rating: 79%`
`Produced At This Country: USA, France`
`Language: English`
`Plot: A tale of greed, deception, money, power, and murder occur between two best friends: a mafia enforcer and a casino executive, compete against each other over a gambling empire, and over a fast living and fast loving socialite.`
`Actors: Robert De Niro, Sharon Stone, Joe Pesci, James Woods`
`-----------------------------------------------------------------`

`node liri do-what-it-says` `random.txt file has concert-this,"calvin harris"`

` ---------------------------------------------`
 `Venue Name: Pacha`
 `Venue Location: Ibiza,` 
`Date: 08/20/2019`
` ---------------------------------------------`

