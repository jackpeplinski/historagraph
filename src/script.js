var axios = require("axios");
var fs = require("fs");

function getWikipediaTable() {
  var config = {
    method: "get",
    url: "https://www.wikitable2json.com/api/List_of_most-streamed_songs_on_Spotify",
    headers: {},
  };

  axios(config)
    .then(function (response) {
      const firstTable = response.data[0].data;
      for (var i = 0; i < firstTable.length; i++) {
        /*
            entry = [
                "1",
                "\"Shape of You\"",
                "2,971",
                "Ed Sheeran",
                "÷",
                "6 January 2017",
                "[11]"
            ],
        */
        const entry = firstTable[i];
        if (!isNaN(entry[0])) {
          // if the song doesn't have a rank, the entry is not a song so it can be ignored
          getSpotifyID(entry[1]);
          // for each title search spotify for track id
          // for each track id get the release date
          //   getGeniusID(entry[1].replace(/['"]+/g, ""));
        }
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}

function getSpotifyID(trackName) {
  var config = {
    method: "get",
    url: `https://api.spotify.com/v1/search?q=${trackName}&type=track`,
    headers: {
      Authorization:
        "Bearer BQBTrx-obX7qQm4lAZ55p1Sa6_iUocP6w53ZfVmHJUbtFGQ53ZzF0O9MfHKxqpyET0gfvdcnVAAkgfP_xd0",
      "Content-Type": "application/json",
    },
  };

  axios(config)
    .then(function (response) {
      const id = response.data.tracks.items[0].id;
      const releaseDate = response.data.tracks.items[0].album.release_date;
      getGeniusID(trackName, releaseDate, id);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function getGeniusID(trackName, releaseDate, id) {
  var config = {
    method: "get",
    url: `https://api.genius.com/search?q=${trackName}`,
    headers: {
      Authorization:
        "Bearer D6Ek2_F2P1-2vOCr7jeaU9Cuvec7Vmdof-IIp6y0Uzv26DRu6n4vrQB_ujK35h4R",
    },
  };

  axios(config)
    .then(function (response) {
      const apiPath = response.data.response.hits[0].result.api_path;
      getDescription(apiPath, trackName, releaseDate, id);
    })
    .catch(function (error) {
      console.log(error);
    });
}

var i = 0;
const json = {
  events: [
    /*
    {
      media: {
        url: "https://open.spotify.com/track/0uI7yAKUf52Cn7y3sYyjiX?si=93af3eb5afbc414e",
      },
      text: {
        headline: "3 Nights: Dominic Fike",
        text: '"3 Nights" is the debut single by American singer and rapper Dominic Fike. It was released as a single from his Don\'t Forget About Me, Demos EP through Columbia Records on October 16, 2018, and peaked within the top ten of the charts in Australia, Belgium (Flanders), Croatia, Israel, the Netherlands, New Zealand, the Republic of Ireland and the United Kingdom, and within the top forty of the charts in Germany. "3 Nights" revolves around Fike staying up late at a motel in the "City of Palms <a href="http://www.last.fm/music/Dominic+Fike/_/3+Nights">Read more on Last.fm</a>.',
      },
      start_date: {
        month: "1",
        day: "3",
        year: "2012",
      },
    },
    */
  ],
};
function getDescription(apiPath, trackName, releaseDate, id) {
  var config = {
    method: "get",
    url: `https://api.genius.com${apiPath}?text_format=plain`,
    headers: {
      Authorization:
        "Bearer D6Ek2_F2P1-2vOCr7jeaU9Cuvec7Vmdof-IIp6y0Uzv26DRu6n4vrQB_ujK35h4R",
    },
  };

  axios(config)
    .then(function (response) {
      const description = response.data.response.song.description.plain;
      //   console.log(
      //     `TRACKNAME: ${trackName}, ID:${id}, RELEASEDATE: ${releaseDate}, DESCRIPTION: ${description}`
      //   );
      const splitReleaseDate = releaseDate.split("-");

      const event = {
        media: {
          url: `https://open.spotify.com/track/${id}`,
        },
        text: {
          headline: trackName,
          text: description,
        },
        start_date: {
          month: splitReleaseDate[1],
          day: splitReleaseDate[2],
          year: splitReleaseDate[0],
        },
      };

      json.events.push(event);
    })
    .catch(function (error) {
      console.log(error);
    });
}

getWikipediaTable();
// getReleaseDate("1zB4vmk8tFRmM9UULNzbLB")
