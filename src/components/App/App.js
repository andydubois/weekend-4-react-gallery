import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import GalleryList from '../GalleryList/GalleryList'

class App extends Component {
  state = {
    listOfPictures: []
  };

  //checking if document is loaded
  componentDidMount() {
    this.getPictures();
    console.log("app mounted successfully");
  }

  getPictures() {
    Axios.get("/gallery")
      .then(response => {
        console.log(response.data);
        this.setState({
          listOfPictures: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {


    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Gallery of my life</h1>
        </header>
        <br />
        <GalleryList listOfPictures={this.state.listOfPictures}/>
        <img src='images/groupVanPic.jpg' />
      </div>
    );
  }
}

export default App;
