import { SpotifyTimeline } from "./components/Timeline"
import { ChakraProvider, Box, Heading } from "@chakra-ui/react"

function App() {
  return (
    <ChakraProvider>
      <Box 
        className="App" 
        padding="2em" 
        minH="100vh" 
        bgGradient="linear(to-br, rgb(245, 255, 156), rgb(25, 26, 21))"
      >
        <Heading as="h1">Spotify Histogram</Heading>
        <p>
          A timeline of the most popular songs by the years - powered by the 
          Spotify API.
        </p>
        <SpotifyTimeline />
      </Box>
    </ChakraProvider>
  );
}

export default App;
