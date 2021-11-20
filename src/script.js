var axios = require("axios");

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
          console.log(entry[1]);
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
      console.log(response.data.tracks.items[0].id);
      console.log(response.data.tracks.items[0].album.release_date);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function getGeniusID(trackName) {
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
      console.log(response.data.response.hits[0].result.api_path);
      getDescription(response.data.response.hits[0].result.api_path);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function getDescription(apiPath) {
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
      console.log(response.data.response.song.description.plain);
      //   console.log(response.data.response.description.plain);
    })
    .catch(function (error) {
      console.log(error);
    });
}

getWikipediaTable();
// getReleaseDate("1zB4vmk8tFRmM9UULNzbLB")
