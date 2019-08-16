import React, {Component} from 'react';
import galleryItems from '../../../server/routes/gallery.router'

class GalleryItem extends Component {
    render() {
        let pictures = {this.props.galleryItems};
        return(
            {pictures};
        )
    }
}

export default GalleryItem;