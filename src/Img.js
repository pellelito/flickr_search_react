import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Img.css";

export class Img extends Component {
  render() {
    let urls = [];
    let images = this.props.images;

    images.map((val) => {
      let url = this.props.getImageUrl(
        val.farm,
        val.server,
        val.id,
        val.secret
      );

      urls.push(url);
      images = "";
      return null;
    });
    return (
      <div className="row">
        {React.Children.toArray(
          urls.map((val, i) => (
            <div className="column">
              <img
                src={val}
                id={i}
                onClick={this.props.onClick}
                alt="flickr-img"
              />
            </div>
          ))
        )}
      </div>
    );
  }
}

//PropTypes
Img.propTypes = {
  getImageUrl: PropTypes.func.isRequired,
  images: PropTypes.array,
  imgGal: PropTypes.array,
  onClick: PropTypes.func.isRequired,
};

export default Img;
