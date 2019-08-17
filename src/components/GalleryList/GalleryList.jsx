import React, { Component } from "react";
import GalleryItem from "../GalleryItem/GalleryItem";

class GalleryList extends Component {
  render() {
    let pictureGallery = this.props.listOfPictures.map(picture => {
      return <GalleryItem picture={picture} />;
      //code to use in GalleryItem component
      // <img src={picture.path} alt='' className='pictureBox'></img>
    });

    return <>{pictureGallery}</>;
  }
}

export default GalleryList;
