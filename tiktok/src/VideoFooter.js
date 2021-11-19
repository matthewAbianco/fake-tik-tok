import React from 'react'
import "./VideoFooter.css"
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Ticker from "react-ticker"

function VideoFooter() {
    return (
        <div className="videoFooter">
            <div className="videoFooter__text">
                <h3>@bombsquad</h3>
                <p>the following is a test</p>
                <div className="videoFooter__ticker">
                <MusicNoteIcon
                className="videoFooter__icon"/>

                <Ticker mode="smooth">
                    {({ index }) => (
                        <>
                            <p>i am side scrolling</p>
                        </>
                    )}
                </Ticker>
                    </div>    
                    
            </div>
                        
            <img 
            className="videoFooter__record"
            src="https://static.thenounproject.com/png/934821-200.png"
            alt="a butterfly"
            />
        </div>
    )
}

export default VideoFooter
