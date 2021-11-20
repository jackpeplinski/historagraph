import { SpotifyTimeline } from "./components/Timeline"
import { Box } from "@chakra-ui/react"

function App() {
  return (
    <Box className="App" padding="2em">
      <h1>Spotify Histogram</h1>
      <p>
        A timeline of the most popular songs by the years - powered by the 
        Spotify API.
      </p>
      <SpotifyTimeline />
    </Box>
  );
}

export default App;
