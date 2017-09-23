import React, { Component } from 'react';
import '../styles/App.css';
import PlayList from "./PlayList"


export default class PlayListForm extends Component {
  constructor(){
    super()
    this.state = {
      userName: "",
      songArtist: "",
      songTitle: "",
      songNotes: ""
    }
  }

  handleChange = (e) => {
    e.preventDefault();
    let inputName = e.target.name;
    this.setState({
      [inputName]: e.target.value
    })
  }

  addToList = (e) => {
      e.preventDefault();
      this.setState({userName: e.target.value, songTitle: e.target.value, songArtist: e.target.value, songNotes: e.target.value});
      let listItem = JSON.stringify(this.state);

      fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
        method: "POST",
        body: listItem,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
    }
    ).then(response => {
      console.log(response, "yay");

    }).catch(err => {
      console.log(err, "boo!");
    });
    this.setState({userName: '', songNotes: '', songArtist: '', songTitle:''});
  }

  render() {
    return (
      <form className="text-white" onSubmit={this.addToList}>
        <div className="form-group">
          <label htmlFor="userName">Username</label>
          <input value={this.state.userName} onChange={this.handleChange} className="form-control" type="text" name="userName"/>
        </div>
        <div className="form-group">
          <label htmlFor="songArtist">Artist</label>
          <input value={this.state.songArtist} onChange={this.handleChange} className="form-control" type="text" name="songArtist"/>
        </div>
        <div className="form-group">
          <label htmlFor="songtitle">Song Name</label>
          <input value={this.state.songTitle} onChange={this.handleChange} className="form-control" type="text" name="songTitle"/>
        </div>
        <div className="form-group">
          <label htmlFor="songNotes">Notes</label>
          <textarea value={this.state.songNotes} onChange={this.handleChange} className="form-control" type="text" name="songNotes"/>
        </div>
        <button type="submit" className="btn btn-primary" onClick={PlayList.fetchData} name="songSubmit">Submit</button>
      </form>
    );
  }
}
