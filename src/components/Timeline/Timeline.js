import { useEffect } from "react"
import { Timeline } from '@knight-lab/timelinejs';
import '@knight-lab/timelinejs/dist/css/timeline.css';

export const SpotifyTimeline = () => {
  const sampleTimeline = {
    "timeline":
    {
      "headline":"The Main Timeline Headline Goes here",
      "type":"default",
      "text":"<p>Intro body text goes here, some HTML is ok</p>",
      "asset": {
        "media":"http://yourdomain_or_socialmedialink_goes_here.jpg",
        "credit":"Credit Name Goes Here",
        "caption":"Caption text goes here"
      },
      "date": [
        {
          "startDate":"2011,12,10,07,02,10",
          "endDate":"2011,12,11,08,11",
          "headline":"Headline Goes Here",
          "text":"<p>Body text goes here, some HTML is OK</p>",
          "tag":"This is Optional",
          "classname":"optionaluniqueclassnamecanbeaddedhere",
          "asset": {
            "media":"http://twitter.com/ArjunaSoriano/status/164181156147900416",
            "thumbnail":"optional-32x32px.jpg",
            "credit":"Credit Name Goes Here",
            "caption":"Caption text goes here"
          }
        }
      ],
      "era": [
        {
          "startDate":"2011,12,10",
          "endDate":"2011,12,11",
          "headline":"Headline Goes Here",
          "text":"<p>Body text goes here, some HTML is OK</p>",
          "tag":"This is Optional"
        }
  
      ]
    }
  }

  useEffect(() => {
    // const timeline = new Timeline('timeline-embed', sampleTimeline);
    
    const timeline = new window.TL.Timeline('timeline-embed',
            'https://docs.google.com/spreadsheets/d/1cWqQBZCkX9GpzFtxCWHoqFXCHg-ylTVUWlnrdYMzKUI/pubhtml');
  })
  
  return (
    <div id="timeline-embed">

    </div>
  )
}