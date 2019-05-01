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

- Here are some video recorded samples with various command examples

 `node liri concert-this odesza`

`https://drive.google.com/file/d/1i89VN1vbJRC8tpagPtcpxPwpxrB3Tb3c/view`


`node liri spotify-this-song how deep is your love`

`https://drive.google.com/file/d/1duDgfZ_zZf7Hm-W8kDYs2Uc0ic5Klr6K/view`


`node liri spotify-this-song`

`https://drive.google.com/file/d/1H9xK6QJrUv-emhg9MlKge66_sqaG_hiu/view`


`node liri movie-this casino`

`https://drive.google.com/file/d/1gm4H37PqUztKk4WBA_yY9bhqtlMgajCH/view`


`node liri movie-this`

`https://drive.google.com/file/d/1O_9gjYXE1WmKkwirIs3trcFf8sc7RfHD/view`


`node liri do-what-it-says` 

`https://drive.google.com/file/d/1Axa15okaZLd5-cN3Mt0KY2iUD0fPWLF8/view`


**Bonus**

- All the liri commands will write to the file as well.

`node liri do-what-it-says`

`https://drive.google.com/file/d/1kaSLhuAJQyd4bp-QXrW3VLyqEvq3pCeo/view`

- writes to a file called log.txt