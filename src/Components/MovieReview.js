import React from "react";
import StarRating from "./Stars"

class MovieReview extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  onSubmit = event => {
    event.preventDefault();
    const name = this.name.value;
    const review = this.review.value;
    const info = {name: name, review: review};
    const data = [...this.state.data, info];
    this.setState({
      data: data
    });
  };

  render() {
    return (
        <div style={{
          backgroundColor: 'white',
          color: 'black'}}
          className="container">

          <h1>Leave a Review Below </h1>
          <hr/>

          <h1><StarRating /></h1>
          <div className="row">
            <form className="form-inline" onSubmit={this.onSubmit}>
              <input
                  type="text"
                  className="form-control mb-2 mr-sm-2 mb-sm-0"
                  placeholder="Name"
                  ref={input => this.name = input}/>
              <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Review"
                    ref={input => this.review = input}/>
              </div>
              <button type="submit" className="btn btn-primary mt-2">Save</button>
            </form>
          </div>

          <hr/>

          <div className="row">
            {
              this.state.data.map((info, index) => <Card key={index} info={info}/>)
            }
          </div>

        </div>
    )
  }
}

const Card = props =>
    <div className="col-md-6 col-lg-3" style={{
      backgroundColor: 'white',
      color: 'black'
    }}>
      <div className="card mb-3">
        <div className="card-body">
          <p className="card-title"><span>Name: </span>{props.info.name}</p>
          <p className="card-text">
            <span>Review: </span>{props.info.review}
          </p>
        </div>
      </div>
    </div>;

export default MovieReview;
