import React, { Component } from 'react';
import '../styles/App.css';
import NavBar from './NavBar'
import PlayListForm from './PlayListForm'
import PlayList from './PlayList'

class App extends Component {

  render() {
    return (
      <div>
         <NavBar/>
         <div className="container-fluid">
           <div className="row">
             <PlayListForm/>
             <PlayList/>
           </div>
         </div>

      </div>
    );
  }
}

export default App
