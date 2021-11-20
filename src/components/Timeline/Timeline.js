import { useEffect } from "react"
import { Box } from "@chakra-ui/react"

export const SpotifyTimeline = () => {
  useEffect(() => { 
    // TODO: Replace google sheets url with custom json function  
    const timeline = new window.TL.Timeline('timeline-embed',
            'https://docs.google.com/spreadsheets/d/1cWqQBZCkX9GpzFtxCWHoqFXCHg-ylTVUWlnrdYMzKUI/pubhtml');
  })
  
  return (
    <Box width="100%" height="40vw" maxW="1600px">
      <Box id="timeline-embed"/>
    </Box>
  )
}