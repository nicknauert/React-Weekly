import React, { Component } from 'react';
import '../styles/App.css';


export default class App extends Component {


  render() {
    return (

        <li className="list-group-item bg-primary p-1">
          <div className="col">
            <ul className="list-group">
              <li className="list-group-item bg-inverse text-white">Song Title: {this.props.song.songTitle}</li>
              <li className="list-group-item bg-inverse text-white">Artist / Band: {this.props.song.songArtist}</li>
              <li className="list-group-item bg-inverse text-white">User: {this.props.song.userName}</li>
              <li className="list-group-item bg-inverse text-white">Notes: {this.props.song.songNotes}</li>
            </ul>
          </div>
        </li>

    );
  }
}
