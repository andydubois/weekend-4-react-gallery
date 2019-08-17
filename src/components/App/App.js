import React, { Component } from "react";
// import "./bootstrap.css";
import "./App.css";
import Axios from "axios";
import GalleryList from "../GalleryList/GalleryList";

class App extends Component {
  state = {
    listOfPictures: []
  };

  //checking if document is loaded
  componentDidMount() {
    this.getPictures();
    console.log("app mounted successfully");
  }

  //GET function 
  getPictures() {
    Axios.get("/gallery")
      .then(response => {
        console.table(response.data);
        //set array with data from server
        this.setState({
          listOfPictures: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
//end of GET function



  //PUT function
  upVotePicture = id => {
    Axios.put(`/gallery/like/${id}`)
      .then(response => {
        console.log(response);
        //refreshes gallery after every like
        this.getPictures();
      })
      .catch(error => {
        console.log(error);
      });
  };
  //end of PUT function


  //render DOM
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Gallery of my life</h1>
        </header>
        <div className="galleryListContainer">
        {/* calls GalleryList to render on DOM*/}
          <GalleryList
            listOfPictures={this.state.listOfPictures}
            upVotePicture={this.upVotePicture}
          />
        </div>
      </div>
    );
  }
}

export default App;
