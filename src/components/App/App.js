import React, { Component } from "react";
// import "./bootstrap.css";
import "./App.css";
import Axios from "axios";
import GalleryList from "../GalleryList/GalleryList";

class App extends Component {
  state = {
    listOfPictures: [],
    newPicture: {
      path: '',
      description: '',
      title: '',
    }
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


//POST function
addNewPhoto = () => {
  Axios.post('/gallery', this.state.newImage)
  .then(response)
}




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


//One function to handle them all
handleChangeFor = (propertyName) => (event) => {
  this.setState({
    newPicture: {
      ...this.state.newPicture,
    [propertyName]: event.target.value,
  }
  
  })
}


  //render DOM
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Gallery of my life</h1>
        </header>
        <div>
          <form>
            <label>
              <input
                type='text'
                placeholder='url'
                value={this.state.newPicture.path}
                onChange={this.handleChangeFor('path')}
              />
            </label>
          </form>
        </div>
        <div className='galleryListContainer'>
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
