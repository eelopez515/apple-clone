import React from 'react';
import { withRouter } from 'react-router';
import './Homepage.sass';
// Components
import MainEvent from '../MainEvent/MainEvent';
import SubEvent from '../SubEvent/SubEvent';
// Data
import { mainEventData } from '../../Assets/Data/Data';
import { subEventData } from '../../Assets/Data/Data';

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
        {mainEventData.map(
          ({
            id,
            title,
            phrase,
            learnMore,
            nextStep,
            image,
            backgroundColor,
          }) => (
            <MainEvent
              key={id}
              id={id}
              title={title}
              phrase={phrase}
              learnMore={learnMore}
              nextStep={nextStep}
              image={image}
              backgroundColor={backgroundColor}
            />
          )
        )}
      </div>
      <div className="homepage__subEvents">
        {subEventData.map(
          ({ id, title, subtitle, learnMore, otherLink, image }) => (
            <SubEvent
              key={id}
              id={id}
              title={title}
              subtitle={subtitle}
              learnMore={learnMore}
              otherLink={otherLink}
              image={image}
            />
          )
        )}
      </div>
    </div>
  );
}

export default withRouter(Homepage);
