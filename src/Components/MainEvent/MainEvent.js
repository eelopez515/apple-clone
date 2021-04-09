import React from 'react';
import './MainEvent.sass';

function MainEvents({ title, phrase, learnMore, nextStep }) {
  return (
    <div className="mainEvent">
      <div className="mainEvent__contents">
        <h1>{title}</h1>
        <h1>
          <span className="phrase">{phrase}</span>
        </h1>
      </div>
      <div className="mainEvent__links">
        <p className="link">{learnMore}</p>
        <p className="link">{nextStep}</p>
      </div>
    </div>
  );
}

export default MainEvents;
