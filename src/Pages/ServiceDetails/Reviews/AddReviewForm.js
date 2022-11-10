import React from "react";
import { Button, Form } from "react-bootstrap";
import { toast } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../../Hooks/useTitle";

const AddReviewForm = () => {
  useTitle("Add Review");
  const { serviceName, price, _id } = useLoaderData();

  const handleAddReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const review = form.review.value;
    const rating = form.rating.value;

    console.log(name, email, review, rating);

    const reviews = {
      service: _id,
      serviceName: serviceName,
      price,
      name,
      email,
      review,
      rating,
    };

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviews),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Thank you for your review!");
          form.reset();
        }
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <div className="container mt-5 mb-5 pb-5 pt-5 bg-dark rounded-0 p-5">
        <div>
          <h5 className="text-white text-center my-5">
            You are reviewing{" "}
            <span className="text-warning fw-semibold">{serviceName}</span>
          </h5>
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

            <Form.Group className="mb-3" controlId="formBasicRating">
              <Form.Label className="text-white">Rating</Form.Label>
              <Form.Control
                type="text"
                name="rating"
                placeholder="Your rating out of 5"
                className="rounded-0"
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
