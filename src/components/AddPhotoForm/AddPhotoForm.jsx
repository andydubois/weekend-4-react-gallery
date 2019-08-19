import React, { Component } from "react";

class AddPhotoForm extends Component {
  render() {
    return (
      <div className='formContainer'>
        <form>
          <label>
            <h5 className='formLabel'>
              {" "}
              Add your own image to the gallery!
            </h5>
            <input
              type='text'
              placeholder='url'
              value={this.props.newPicture.path}
              onChange={this.props.handleChangeFor("path")}
            />
          </label>
          <button
            className='addButton btn-dark btn-block'
            onClick={this.props.addNewPhoto}>
            Add New Image!
          </button>
        </form>
      </div>
    );
  }
}

export default AddPhotoForm;
