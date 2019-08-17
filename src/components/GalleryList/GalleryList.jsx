import React, {Component} from 'react';


class GalleryList extends Component {
    render() {

        let pictureGallery = this.props.listOfPictures.map(picture => {
            return <img src={picture.path} alt='' className='pictureBox'></img>
        })

        return(
         <>   
         {pictureGallery}
         </>
        )

    }
}


export default GalleryList;