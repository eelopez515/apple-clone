import React from 'react';
import './SubEvent.sass';

function SubEvent({ title, subtitle, learnMore, otherLink, image }) {
  return (
    <div className="subEvent">
      <div className="subEvent__content">
        <h1>{title}</h1>
        <p className="subtitle">{subtitle}</p>
        <div className="subEvent__links">
          <p className="link">{learnMore}</p>
          {otherLink ? <p className="link">{otherLink}</p> : ''}
        </div>
        <img src={image} alt="" />
      </div>
    </div>
  );
}

export default SubEvent;
