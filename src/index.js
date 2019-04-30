import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import useLocation from './useLocation';

const App = () => {
  // Get data from useLocation.
  const [lat, errorMessage] = useLocation();

  // Perepare content for the compoentn.
  let content;
  if (errorMessage) {
    content = <div>Error: {errorMessage}</div>;
  } else if (lat) {
    content = <SeasonDisplay lat={lat} />;
  } else {
    content = <Spinner message="Please accept location request" />;
  }

  // Return the view.
  return <div className="border red">{content}</div>;
};

ReactDOM.render(<App />, document.querySelector('#root'));