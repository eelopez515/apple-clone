import React from 'react';
import { withRouter } from 'react-router';
import './Homepage.sass';
// Components
import MainEvent from '../MainEvent/MainEvent';
import SubEvent from '../SubEvent/SubEvent';
//image import test
import iphone12 from '../../Assets/Homepage/iphone12.png';

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
          title="iPhone 12"
          phrase="Blast past fast."
          learnMore="Learn More >"
          nextStep="Buy >"
          image={iphone12}
        />
        <MainEvent
          title="iPhone 12 Pro"
          phrase="It's a leap year."
          learnMore="Learn More >"
          nextStep="Buy >"
        />
        <MainEvent
          title="Watch"
          phrase="The future of health is on your wrist."
          learnMore="Learn More >"
          nextStep="Buy >"
        />
      </div>
      <div className="homepage__subEvents">
        <SubEvent
          title="Apple Event"
          subtitle="Watch on April 20 at 10:00 a.m. PDT."
          learnMore="Learn More >"
        />
        <SubEvent
          title="Fitness+"
          subtitle="A new fitness experience for everyone. Powered by Apple Watch."
          learnMore="Learn More >"
          otherLink="Try it free"
        />
        <SubEvent
          title="Arcade"
          subtitle="Simon's Cat - Story Time. Play Now."
          learnMore="Learn More >"
          otherLink="Buy"
        />
        <SubEvent
          title="iPad Air"
          subtitle="Powerful. Colorful. Wonderful"
          learnMore="Learn More >"
          otherLink="Buy"
        />
        <SubEvent
          title="Card"
          subtitle="Get 3% Daily Cash Back on purchases from Apple when you use Apple Card."
          learnMore="Learn More >"
        />
        <SubEvent
          title="tv+"
          subtitle="The Year Earth Changed"
          learnMore="Learn More >"
          otherLink="Watch now"
        />
      </div>
    </div>
  );
}

export default withRouter(Homepage);
