import React from 'react';
import { withRouter } from 'react-router';
import './Homepage.sass';
// Components
import MainEvent from '../MainEvent/MainEvent';
import SubEvent from '../SubEvent/SubEvent';

function Homepage({ history }) {
  return (
    <div className="homepage">
      <div className="homepage__header">
        <div className="homepage__covid__info">
          <p onClick={() => history.push('/covid')}>
            Evaluate COVID-19 symptoms and undertand next steps
          </p>
        </div>
        <div className="homepage__shop__online">
          <p>
            <span
              onClick={() => history.push('/shop')}
              className="shop__online"
            >
              Shop online
            </span>{' '}
            and get Specialist help, free no-contact delivery, and more.
          </p>
        </div>
      </div>
      <div className="homepage__contents">
        <MainEvent
          title="Arcade"
          phrase="Calling all players."
          learnMore="Learn More >"
          nextStep="Try is free"
        />
        <MainEvent
          title="iPhone 12"
          phrase="Blast past fast."
          learnMore="Learn More >"
          nextStep="Buy >"
        />
        <MainEvent
          title="iPhone 12 Pro"
          phrase="It's a leap year."
          learnMore="Learn More >"
          nextStep="Buy >"
        />
      </div>
      <div className="homepage__subEvents">
        <SubEvent />
        <SubEvent />
        <SubEvent />
        <SubEvent />
        <SubEvent />
        <SubEvent />
      </div>
    </div>
  );
}

export default withRouter(Homepage);
