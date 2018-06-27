import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import Calendar from "./components/Calendar";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <div id="logo">
            <span>
              <b>Spotify Calendar</b>
            </span>
          </div>
        </header>
        <main>
          <Calendar />
        </main>
      </div>
    );
  }
}

export default App;