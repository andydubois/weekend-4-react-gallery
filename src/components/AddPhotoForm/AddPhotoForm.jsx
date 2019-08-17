import React, {Component} from 'react'

class AddPhotoForm extends Component {
    render() {
        return (
          <form>
            <label>
              <input
                type='text'
                placeholder='url'
                value={this.props.newPicture.path}
                onChange={this.props.handleChangeFor("path")}
              />
            </label>
            <button onClick={this.props.addNewPhoto}>Add New Image!</button>
          </form>
        );
    }
}

export default AddPhotoForm;