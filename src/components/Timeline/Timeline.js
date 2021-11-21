import { useEffect } from "react"
import { Box } from "@chakra-ui/react"

const additionalOptions = {
  font: "ubuntu",
}

export const SpotifyTimeline = () => {
  const sampleTimeline = {
    events: [
      {
        media: {
          url: "https://open.spotify.com/track/0uI7yAKUf52Cn7y3sYyjiX?si=93af3eb5afbc414e"
        },
        text: {
          headline: "3 Nights: Dominic Fike",
          text: "\"3 Nights\" is the debut single by American singer and rapper Dominic Fike. It was released as a single from his Don't Forget About Me, Demos EP through Columbia Records on October 16, 2018, and peaked within the top ten of the charts in Australia, Belgium (Flanders), Croatia, Israel, the Netherlands, New Zealand, the Republic of Ireland and the United Kingdom, and within the top forty of the charts in Germany. \"3 Nights\" revolves around Fike staying up late at a motel in the \"City of Palms <a href=\"http://www.last.fm/music/Dominic+Fike/_/3+Nights\">Read more on Last.fm</a>.",
        },
        start_date: {
          month: "1",
          day: "3",
          year: "2012",
        },
      },
      {
        media: {
          url: "https://open.spotify.com/track/0uI7yAKUf52Cn7y3sYyjiX?si=93af3eb5afbc414e"
        },
        text: {
          headline: "3 Nights: Dominic Fike",
          text: "\"3 Nights\" is the debut single by American singer and rapper Dominic Fike. It was released as a single from his Don't Forget About Me, Demos EP through Columbia Records on October 16, 2018, and peaked within the top ten of the charts in Australia, Belgium (Flanders), Croatia, Israel, the Netherlands, New Zealand, the Republic of Ireland and the United Kingdom, and within the top forty of the charts in Germany. \"3 Nights\" revolves around Fike staying up late at a motel in the \"City of Palms <a href=\"http://www.last.fm/music/Dominic+Fike/_/3+Nights\">Read more on Last.fm</a>.",
        },
        start_date: {
          month: "1",
          day: "3",
          year: "2012",
        },
      }
    ],
  };

  useEffect(() => { 
    // TODO: Replace google sheets url with custom json function  
    const timeline = new window.TL.Timeline('timeline-embed',
            sampleTimeline,
            additionalOptions);
  })
  
  return (
    <Box width="100%" maxW="1600px" height="40vw" paddingTop="1em" borderRadius="8px">
      <Box id="timeline-embed"/>
    </Box>
  )
}