import { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { songs } from "../../songs"

const additionalOptions = {
  font: "ubuntu",
};

export const SpotifyTimeline = () => {
  useEffect(() => {
    const timeline = new window.TL.Timeline(
      "timeline-embed",
      songs,
      additionalOptions
    );
  });

  return (
    <Box
      width="100%"
      maxW="1600px"
      height="40vw"
      paddingTop="1em"
      borderRadius="8px"
    >
      <Box id="timeline-embed" />
    </Box>
  );
};
