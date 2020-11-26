import React, { Component } from 'react'
import axios from 'axios'
import Gallery from './Gallery'

class Search extends Component {

    state = {
        gallery: '',
        apiUrl: 'https://pixabay.com/api/',
        apiKey: '19221012-164b9cad7ac65bf4cf31b1543',
        images : []

    }
    

    onTextChange = (e) => {
         this.setState({ [e.target.name]: e.target.value }, () => {
            axios.get(`${this.state.apiUrl}?key=${this.state.apiKey}&q=${this.state.gallery}&image_type=photo&per_page=6`)
            .then(image => {
                this.setState({
                    images: image.data.hits
                })
            })
        })
    }

    render() {

        return (

            <div className="content">
                <div className="form">
                    <i className="fa fa-search" aria-hidden="true"></i>
                    <input type="text"  name="gallery" onChange={this.onTextChange} value={this.state.gallery} placeholder="Search ..." />
                </div>

                {this.state.images.length>0?(<Gallery images={this.state.images}/>):null}
            </div>

            
        )
    }
}

export default Search
