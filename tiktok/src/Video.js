import React, { useRef, useState } from 'react'
import "./Video.css"
import VideoFooter from './VideoFooter'
import VideoSidebar from './VideoSidebar'

function Video({ url, channel, description, song, likes, messages, shares}) {
    const [playing, setPlaying] = useState(false)
    const videoRef = useRef(null)
    
    // click function to start and pause a video
    const handleVideoPress = () => {
        // if video is not playing
        if(!playing) {
            videoRef.current.play()
            setPlaying(true)
        // if video is playing
        } else {
            videoRef.current.pause()
            setPlaying(false)
        }
    }
    console.log("check me out");


    return (    
        <div className="video">
            <video 
            className="video__player"
            onClick={handleVideoPress}
            loop
            ref={videoRef}
            src={url}>

            </video>
            <VideoFooter
            channel={channel}
            description={description}
            song={song}
            />
            <VideoSidebar likes={likes} shares={shares} messages={messages} />
        </div>
    )
}

export default Video
