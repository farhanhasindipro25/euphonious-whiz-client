import React from "react";
import { Button, Form } from "react-bootstrap";
import useTitle from "../../../Hooks/useTitle";

const AddReviewForm = () => {
  useTitle("Add Review");

  const handleAddReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const review = form.review.value;

    
  }
  return (
    <div>
      <div className="container mt-5 mb-5 pb-5 pt-5 bg-dark rounded-0 p-5">
        <div>
          <Form onSubmit={handleAddReview}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label className="text-white">Username</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter username"
                className="rounded-0"
                required
              />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="text-white">Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                className="rounded-0"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicReview">
              <Form.Label className="text-white">Review</Form.Label>
              <Form.Control
                as="textarea"
                type="text"
                name="review"
                placeholder="Write your review"
                className="rounded-0"
                style={{ height: "100px" }}
                required
              />
            </Form.Group>
            <Button
              variant="warning"
              className="mx-auto d-block w-100 rounded-0 fw-bold mt-4"
              type="submit"
            >
              SUBMIT REVIEW
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddReviewForm;
