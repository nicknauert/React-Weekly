import React, { Component } from 'react';
import '../styles/App.css';
import PlayListItem from "./PlayListItem"


export default class PlayList extends Component {

  constructor(){
    super()
    this.state = {
      songs: []
    }
  }

  componentDidMount(){
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
          return results.json();
        }).then(data => {
          this.setState({songs: data});
          console.log("state", this.state.songs);
        })
  }

  fetchData = (e) => {
      e.preventDefault();
      fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
        return results.json();
      }).then(data => {
        this.setState({songs: data});
        console.log("updated");
      })
    }



  render() {
    return (


        <div className="container-fluid col-sm-6">
          <button className="btn btn-primary" onClick={this.fetchData}>Update</button>
          <ul className="list-group">
            {this.state.songs.map((song)=>{
              return <PlayListItem key={song._id} song={song}/>
            })}
          </ul>
        </div>


    );
  }
}
