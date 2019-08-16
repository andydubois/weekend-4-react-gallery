import React, {Component} from 'react';


class GalleryList extends Component {
    render() {

        let listOfPictures = this.props.listOfPictures.map(picture => {
            return <img src="{picture.path}"></img>
        })

        return(
            {listOfPictures}
        )
    }
}


export default GalleryList;