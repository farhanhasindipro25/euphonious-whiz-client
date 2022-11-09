import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const AddReviewForm = () => {
  return (
    <div>
      <div className="container mt-5 mb-5 pb-5 pt-5 bg-dark rounded-0 p-5">
        <div>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label className="text-white">Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                className="rounded-0"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicReview">
              <Form.Label className="text-white">Review</Form.Label>
              <Form.Control
                as="textarea"
                type="text"
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
