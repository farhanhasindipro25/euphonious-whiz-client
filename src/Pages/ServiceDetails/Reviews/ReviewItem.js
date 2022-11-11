import React from "react";
import { Col, Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ReviewItem = ({ review }) => {
  const { reviewerName, reviewText, ReviewerImage, reviewerRating } = review;

  return (
    <Col lg="4" md="6" sm="12">
      <Card className="rounded-0">
        <Image src={ReviewerImage} className="img-fluid"></Image>
        <Card.Body>
          <Card.Title className="text-center fw-bold">
            {reviewerName}
          </Card.Title>
          <Card.Text className="fw-normal text-center">{reviewText}</Card.Text>
          <Button
            variant="warning"
            className="text-dark fw-bold d-block mx-auto rounded-0"
          >
            Ratings: {reviewerRating}
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ReviewItem;
