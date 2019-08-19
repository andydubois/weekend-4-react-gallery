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
    //sets up conditional rendering of picture or description
    if (this.state.pictureShowing === true) {
      return (
        <div className='displayedContent'>
          <div className='pictureDiv' key={this.props.picture.id}>
            <img
              onClick={this.clickPicture}
              src={this.props.picture.path}
              alt=''
              className='pictureBox'
              key={this.props.picture.id}
            />
            <button
              className='voteButton'
              onClick={() => this.props.upVotePicture(this.props.picture.id)}>
              Liked {this.props.picture.likes} Times
            </button>
            <button 
            className='deleteButton' 
            onClick={() => this.props.deletePhoto(this.props.picture.id)}>
              DELETE
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div className='displayedContent'>
          <div className='descriptionDiv' onClick={this.clickPicture}>
            <p className='textBox'>{this.props.picture.description}</p>
          </div>
        </div>
      );
    }
  };

  render() {
    return <>{this.flipPicture()}</>;
  }
}

export default GalleryItem;
