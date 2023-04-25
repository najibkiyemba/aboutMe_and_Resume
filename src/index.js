import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "../src/components/App/App.js";

//import ReactPlayer from 'react-player';
//import MovingStarsApp from "./MovingStarsApp.mp4";


/*const backgroundVideo = (
        <>
            <ReactPlayer
                url={MovingStarsApp}
                loop={true}
                playing={true}
                controls={false}
                id="background-video"
            />
        </>
)*/


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div id="allApp">
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </div>
);


