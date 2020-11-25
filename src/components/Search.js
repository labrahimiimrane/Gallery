import React, { Component } from 'react'
import axios from "axios"

class Search extends Component {
s
    state = {
        images : []
    }
    
    galleryImg = (e) => {
        e.preventDefault();
        axios.get("https://pixabay.com/api/?key=19221012-164b9cad7ac65bf4cf31b1543")
        .then(image => {
            this.setState({
                images: image.data.hits
            })
        })
    }

    render() {
        return (
            <form onSubmit={this.galleryImg}>
                <i class="fa fa-search" aria-hidden="true"></i>
                <input type="text"  name="gallery" placeholder="Search ..." />
                <input type="submit"  value="Submit" />
            </form>
        )
    }
}

export default Search
