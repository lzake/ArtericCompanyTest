import React from 'react';

export default class Navi extends React.Component {
  render() {
    return (
        <div className="centerMobile">
        <img className="p-5 centerMobile" src={require('./images/logo.jpg')} />
        </div>
    );
  }
}