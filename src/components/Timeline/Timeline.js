import { useEffect } from "react"
import { Box } from "@chakra-ui/react"

const additionalOptions = {
  font: "ubuntu",
}

export const SpotifyTimeline = () => {
  useEffect(() => { 
    // TODO: Replace google sheets url with custom json function  
    const timeline = new window.TL.Timeline('timeline-embed',
            'https://docs.google.com/spreadsheets/d/1cWqQBZCkX9GpzFtxCWHoqFXCHg-ylTVUWlnrdYMzKUI/pubhtml',
            additionalOptions);
  })
  
  return (
    <Box width="100%" maxW="1600px" height="40vw" paddingTop="1em" borderRadius="8px">
      <Box id="timeline-embed"/>
    </Box>
  )
}