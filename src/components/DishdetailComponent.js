import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


class DishdetailComponent extends Component {

  renderComments(dish){
    if(dish.comments != null)
    {
      return dish.comments.map((comment) => {
            return (
              <div  className="col-12 m-1" key={comment.id}>
                <h5>{comment.comment}</h5>
                <p>{comment.author}, {comment.date}</p>
              </div>
            );
        });
    }
    else
        return(
            <div></div>
        );
  }

  render(){


    return(
      <div className = "row">
        <div  className="col-12 col-md-5 m-1">
        <Card>
            <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
            <CardBody>
              <CardTitle>{this.props.dish.name}</CardTitle>
              <CardText>{this.props.dish.description}</CardText>
            </CardBody>
        </Card>
        </div>
        <div  className="col-12 col-md-5 m-1">
          <h4>Comments</h4>
          {this.renderComments(this.props.dish)}
        </div>
      </div>
    );
  }
}

export default DishdetailComponent;
