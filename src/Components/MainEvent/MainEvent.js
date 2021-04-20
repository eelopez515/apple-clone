import React from 'react';
import './MainEvent.sass';

function MainEvents({
  id,
  title,
  phrase,
  learnMore,
  nextStep,
  image,
  backgroundColor,
}) {
  return (
    <div className="mainEvent">
      <div
        className={`mainEvent__contents ${
          backgroundColor === 'black' ? 'blackBackground' : ''
        }`}
      >
        <h1>{title}</h1>
        <p className="phrase">{phrase}</p>
        <div className="mainEvent__links">
          <p className="link">{learnMore}</p>
          <p className="link">{nextStep}</p>
        </div>
        <div className="mainEvent__image">
          <img
            className={`image ${id === 3 ? 'watchImage' : ''}`}
            src={image}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default MainEvents;
