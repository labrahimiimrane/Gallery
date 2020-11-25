import React, { Component } from 'react'
import Gallery from "./components/Gallery"
import Search from "./components/Search"
import "./App.css"

class App extends Component {
  render() {
    return (
      <div className="container">
        <Search />
        <Gallery />  
      </div>
    )
  }
}

export default App