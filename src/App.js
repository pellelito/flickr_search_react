import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Header from "./pages/Header";
import SearchFlickr from "./pages/SearchFlickr";
import Img from "./Img";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import "./App.css";
import axios from "axios";

class App extends Component {
  state = {
    images: [],
    imgGal: [],
  };
  clearImgGal = (e) => {
    this.setState({ imgGal: [] });
  };
  onClick = (e) => {
    if (document.getElementById(e.target.id).className === "checked") {
      document.getElementById(e.target.id).className = "";
    } else {
      document.getElementById(e.target.id).className = "checked";
      this.setState({ imgGal: [...this.state.imgGal, e.target.src] });
    }
  };
  //searches based on user input
  searchImg = (query) => {
    axios
      .get(
        "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=2438610fd70916149c4e3c8f70ab7788&format=json&nojsoncallback=1&text=" +
          query
      )
      // sets response in an array
      .then((response) => {
        this.setState({ images: response.data.photos.photo });
      })
      .catch((err) => {
        console.log(err);
      });
    //easter egg
    axios.get("https://api.chucknorris.io/jokes/random").then((getChuck) => {
      console.log(getChuck.data.value);
    });
  };
  //gets the url to the img
  getImageUrl(farm, server, id, secret) {
    return `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={(props) => (
                <React.Fragment>
                  <SearchFlickr searchImg={this.searchImg} />
                  <Img
                    images={this.state.images}
                    getImageUrl={this.getImageUrl}
                    imgGal={this.state.imgGal}
                    onClick={this.onClick}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
            <Route
              path="/gallery"
              render={(props) => (
                <Gallery
                  {...props}
                  imgGal={this.state.imgGal}
                  clearImgGal={this.clearImgGal}
                />
              )}
            />
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
