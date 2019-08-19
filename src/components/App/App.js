import React, { Component } from "react";
import "./bootstrap.css";
import "./App.css";
import Axios from "axios";
import GalleryList from "../GalleryList/GalleryList";
import AddPhotoForm from "../AddPhotoForm/AddPhotoForm";

class App extends Component {
  state = {
    listOfPictures: [],
    newPicture: {
      path: "",
      description: "",
      title: ""
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
    if (this.state.newPicture.path === "") {
      alert("The Url fields needs to be filled");
    } else {
          Axios.post("/gallery", this.state.newPicture)
      .then(response => {
        console.log(this.state.newPicture);
        console.log(response);
        this.getPictures();
      })
      .catch(error => {
        console.log("There was an error on the client side POST", error);
      });
    }

  };

  //end of POST function

  deletePhoto = id => {
    Axios.delete(`/gallery/delete/${id}`)
      .then(response => {
        console.log(response);
        this.getPictures();
      })
      .catch(error => {
        console.log(error);
      });
  };

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
  handleChangeFor = propertyName => event => {
    this.setState({
      newPicture: {
        ...this.state.newPicture,
        [propertyName]: event.target.value
      }
    });
  };

  //render DOM
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Community Gallery of Pictures</h1>
        </header>
        <div>
          {/* calls AddPhotoForm to render on DOM */}
          <AddPhotoForm
            newPicture={this.state.newPicture}
            handleChangeFor={this.handleChangeFor}
            addNewPhoto={this.addNewPhoto}
          />
        </div>
        <div className='galleryListContainer'>
          {/* calls GalleryList to render on DOM*/}
          <GalleryList
            listOfPictures={this.state.listOfPictures}
            upVotePicture={this.upVotePicture}
            deletePhoto={this.deletePhoto}
          />
        </div>
      </div>
    );
  }
}

export default App;
