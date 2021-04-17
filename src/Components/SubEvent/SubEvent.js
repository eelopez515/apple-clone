import React from 'react';
import './SubEvent.sass';

function SubEvent({ title, subtitle, learnMore, otherLink }) {
  return (
    <div className="subEvent">
      <div className="subEvent__content">
        <h1>{title}</h1>
        <p className="subtitle">{subtitle}</p>
        <div className="subEvent__links">
          <p className="link">{learnMore}</p>
          <p className="link">{otherLink}</p>
        </div>
      </div>
    </div>
  );
}

export default SubEvent;
