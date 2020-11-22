import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Like from './Like.js';
import TimeLine from './TimeLine.js';
import Ad from './Ad.js'

ReactDOM.render(
  <React.StrictMode>
    <Ad/> <TimeLine/> <Like/>
  </React.StrictMode>,
  document.getElementById('root')
);


