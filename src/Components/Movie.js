import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import ReviewForm from "./ReviewForm";
// import ReviewList from "./ReviewList";

export default class Movie extends React.Component {
  render() {
    return (
      <div className="card w-75">
        <div className="card-header bg-success test-white">
          {this.props.title} {this.props.year}
        </div>
        <div className="card-body">
          {this.props.poster}
        </div>
        <div className="card-footer">
        </div>
      </div>
    )
  }
}
