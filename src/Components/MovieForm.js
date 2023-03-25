import React from 'react';
import "../CSS/App.css";
import List from "./MovieData";
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import MovieReview from './MovieReview';
import 'bootstrap/dist/css/bootstrap.min.css'

export default class MovieForm extends React.Component {
  render() {
    return (
      <div>
        <div className="header">
          <h1 className="main-header">
            Rate your favorite adventure flicks!
          </h1>
          <h3 className="sub-header">
            Click the dropdown arrows below to leave a review.
          </h3>
        </div>
        {List.map((item, id)=>{
          return(
            <div key={id}>
              <Card
              style={{
                border: '1px solid black', 
                color: 'black',
                backgroundColor: 'white',
                borderBottomRadius: '20px',
                marginBottom: '2rem',
                marginTop: '2rem'
                }}>
                <Card.Img variant="top" src={item.background} alt="card cap"/>
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.info}</Card.Text>
                  <Card.Text>{item.lginfo}</Card.Text>
                </Card.Body>          
              </Card>
              <Accordion 
              style={{
                border:'1px solid #c2dbfe',
                borderRadius: '20px'
              }}>
                <Accordion.Item eventKey={id}>
                  <Accordion.Header>Reviews</Accordion.Header>
                    <Accordion.Body 
                    style={{
                      border:'1px solid #c2dbfe',
                    }}>
                      <MovieReview />
                    </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          )
        })}
      </div>
    )
  }
}
