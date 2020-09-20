import React, { Component } from "react";
import PropTypes from "prop-types";

export class SearchFlickr extends Component {
  state = {
    query: [],
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.searchImg(this.state.query);
    this.setState({ query: "" });
  };
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <input
          type="text"
          name="query"
          style={{ flex: "10", padding: "5px" }}
          placeholder="Search Flickr"
          value={this.state.query}
          onChange={this.onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn"
          style={{ flex: "1" }}
        />
      </form>
    );
  }
}
//PropTypes
SearchFlickr.propTypes = {
  searchImg: PropTypes.func.isRequired,
};

export default SearchFlickr;
