import React, { Component } from "react";

class GalleryItem extends Component {
  state = {
    pictureShowing: true
  };

  clickPicture = () => {
    console.log("picture clicked");
    this.setState({
      pictureShowing: !this.state.pictureShowing
    });
  };

  flipPicture = () => {
    if (this.state.pictureShowing === true) {
      return (
        <div className='pictureDiv'>
          <img
            onClick={this.clickPicture}
            src={this.props.picture.path}
            alt=''
            className='pictureBox'
          />
        </div>
      );
    } else {
      return (
        <div className='descriptionDiv' onClick={this.clickPicture}>
          <p className='textBox'>{this.props.picture.description}</p>
        </div>
      );
    }
  };

  render() {
    return <>{this.flipPicture()}</>;
  }
}

export default GalleryItem;
