import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


  function RenderComments({comments}){
    if(comments != null)
    {
      return comments.map((comment) => {
            return (
              <div  className="col-12 m-1" key={comment.id}>
                <h5>{comment.comment}</h5>
                <p>{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
              </div>
            );
        });
    }
    else
        return(
            <div></div>
        );
  }

  function RenderDish({dish}) {
      if (dish != null)
          return(
            <div className = "row">
              <div  className="col-12 col-md-5 m-1">
              <Card>
                  <CardImg top src={dish.image} alt={dish.name} />
                  <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                  </CardBody>
              </Card>
              </div>
              <div  className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <RenderComments comments = {dish.comments}/>
              </div>
            </div>
          );
      else
          return(
              <div></div>
          );
  }

  const DishdetailComponent = (props) => {
    return(
      <div className = "container">
        <RenderDish dish={props.dish}/>
      </div>
    );
  }

export default DishdetailComponent;
