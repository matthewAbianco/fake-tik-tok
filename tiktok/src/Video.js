import React, { useRef, useState } from 'react'
import "./Video.css"
import VideoFooter from './VideoFooter'
import VideoSidebar from './VideoSidebar'

function Video() {
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
            src="https://sp.rmbl.ws/s8/2/V/K/7/I/VK7Ic.caa.mp4?u=3&b=0">

            </video>
            <VideoFooter/>
            <VideoSidebar/>
        </div>
    )
}

export default Video
