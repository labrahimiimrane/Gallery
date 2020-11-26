import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Gallery extends Component {

 

    render() {
        let galleryImage;
        const {images}=this.props
        if(images){
            galleryImage=(
                <div className="items">
                    { images.map(gal =>(  
                        <div className="item" key={gal.id} > 
                            <img src={gal.largeImageURL} /> 
                        </div>
                    ))
                    }
                </div>
            )
        } else{
            galleryImage=null;
        }

        return galleryImage
    }
}

Gallery.propTypes={
    images:PropTypes.array.isRequired
}

export default Gallery