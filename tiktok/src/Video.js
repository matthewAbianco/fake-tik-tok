import React, { useRef, useState } from 'react'
import "./Video.css"
import VideoFooter from './VideoFooter'
import VideoSidebar from './VideoSidebar'

function Video() {
    const [playing, setPlaying] = useState(false)
    const videoRef = useRef(null)
    
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


    return (    
        <div className="video">
            <video 
            className="video__player"
            onClick={handleVideoPress}
            loop
            ref={videoRef}
            src="https://v16m.tiktokcdn.com/d635ceed24758a2dfe52de9ccd54cdc2/619705fe/video/tos/alisg/tos-alisg-pve-0037c001/3bf60392cefc4e67b7ed0cd7537ed85c/?a=1233&br=3692&bt=1846&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=wZ~AOFFnkag3-I&l=202111182003270102230760420A3E089D&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=Mzd4NDs6Zm00NzMzODczNEApO2Y6OmQzZWQ0NzxnNWk4aGctcy5jcjRnX3FgLS1kMS1zcy0zNDAyYWEyNGA2Xy4yNWI6Yw%3D%3D&vl=&vr=">

            </video>
            <VideoFooter/>
            <VideoSidebar/>
        </div>
    )
}

export default Video
