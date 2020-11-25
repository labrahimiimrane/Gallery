import React, { Component } from 'react'
import axios from "axios"

class Gallery extends Component {

    state = {
        images : []
    }
    
    componentDidMount() {
        axios.get("https://pixabay.com/api/?key=19221012-164b9cad7ac65bf4cf31b1543")
        .then(image => {
            this.setState({
                images: image.data.hits
            })
        })
    }
    render() {
        return (
            <div className="items">

                {this.state.images.map(gal =>  <div className="item" key={gal.id} > <img src={gal.largeImageURL} /> </div> )}

            </div>
        )
    }
}

export default Gallery