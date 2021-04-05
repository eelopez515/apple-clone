import React from 'react';
import { withRouter } from 'react-router';

import './NavBar.sass';

function NavBar({ history }) {
  return (
    <div className="navBar">
      <p onClick={() => history.push('/')} className="navBar__content">
        Logo
      </p>
      <p onClick={() => history.push('/mac')} className="navBar__content">
        Mac
      </p>
      <p onClick={() => history.push('/ipad')} className="navBar__content">
        iPad
      </p>
      <p onClick={() => history.push('/iphone')} className="navBar__content">
        iPhone
      </p>
      <p onClick={() => history.push('/watch')} className="navBar__content">
        Watch
      </p>
      <p onClick={() => history.push('/tv')} className="navBar__content">
        TV
      </p>
      <p onClick={() => history.push('/music')} className="navBar__content">
        Music
      </p>
      <p onClick={() => history.push('/support')} className="navBar__content">
        Support
      </p>
      <p className="navBar__content">Search</p>
      <p className="navBar__content">Bag</p>
    </div>
  );
}

export default withRouter(NavBar);
