import React from 'react'
import './App.css';
import Video from './Video';

function App() {
  return (
    <div className="app">
          <div className="app__videos">
        <Video url="https://sp.rmbl.ws/s8/2/V/K/7/I/VK7Ic.caa.mp4?u=3&b=0" 
        channel="channel name"
        description="description test"
        song="Song Name"
        likes={0}
        messages={0}
        shares={0}
        />
        <Video/>
        <Video/>
        <Video/>
        <Video/>
        <Video/>
        </div>
    </div>
  );
}

export default App;
 