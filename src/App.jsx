import React  from 'react';
import { css } from 'glamor';
import logo from './logo.svg';
import './App.css';

export default React.createClass({
  render() {
    let rule = css({
      color: 'red',
      ':hover': {
        color: 'pink'
      },
      '@media(min-width: 300px)': {
        color: 'green',
        ':hover': {
          color: 'yellow'
        }
      }
    });

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 {...rule}>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
});
