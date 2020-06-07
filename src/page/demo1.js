import React from 'react';
import logo from '../logo.svg';
import {Button} from 'antd';
import '../App.css';
import '../test.less';

function Demo1() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="test">11</div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          <Button type="primary">Button</Button>
        </a>
      </header>
    </div>
  );
}

export default Demo1;