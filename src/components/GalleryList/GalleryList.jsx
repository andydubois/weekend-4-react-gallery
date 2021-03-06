import React, { Component } from "react";
import GalleryItem from "../GalleryItem/GalleryItem";

class GalleryList extends Component {
  render() {
    let pictureGallery = this.props.listOfPictures.map(picture => {
      return <GalleryItem picture={picture} upVotePicture={this.props.upVotePicture} deletePhoto={this.props.deletePhoto}/>;
      //code to use in GalleryItem component
      // <img src={picture.path} alt='' className='pictureBox'></img>
    });

    return <>{pictureGallery}</>;
  }
}

export default GalleryList;
