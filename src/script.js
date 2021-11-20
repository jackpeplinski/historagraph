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
        const entry = firstTable[i];
        if (!isNaN(entry[0])) {
          console.log(entry[1]);
          // for each title search spotify for track id
          // for each track id get the release date
        }
      }
      //   console.log(response.data[0].data[1][1])
    })
    .catch(function (error) {
      console.log(error);
    });
}

getWikipediaTable();
