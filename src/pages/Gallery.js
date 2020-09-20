import React, { Component } from "react";
import PropTypes from "prop-types";

class Gallery extends Component {
  state = {
    index: 0,
    picList: this.props.imgGal,
  };

  onClickNext = () => {
    this.props.clearImgGal();
    if (this.state.index + 1 === this.state.picList.length) {
      this.setState({
        index: 0,
      });
    } else {
      this.setState({
        index: this.state.index + 1,
      });
    }
  };
  onClickPrevious = () => {
    this.props.clearImgGal();
    this.setState({ imgGal: [] });
    if (this.state.index - 1 === -1) {
      this.setState({
        index: this.state.picList.length - 1,
      });
    } else {
      this.setState({
        index: this.state.index - 1,
      });
    }
  };

  render() {
    return (
      <div>
        <img
          src={this.state.picList[this.state.index]}
          style={{ maxHeight: "40%", maxWidth: "40%" }}
          alt="pics of beutiful things"
        />{" "}
        <br />
        <button style={{ fontSize: "18px" }} onClick={this.onClickPrevious}>
          {" "}
          Previous{" "}
        </button>
        <button
          style={{ "margin-left": "5px", fontSize: "18px" }}
          onClick={this.onClickNext}
        >
          {" "}
          Next{" "}
        </button>
      </div>
    );
  }
}
Gallery.propTypes = {
  imgGal: PropTypes.array.isRequired,
  clearImgGal: PropTypes.func.isRequired,
};
export default Gallery;
