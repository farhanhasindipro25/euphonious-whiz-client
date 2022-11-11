import React from "react";
import { Button, Form } from "react-bootstrap";
import { toast } from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import useTitle from "../../../Hooks/useTitle";

const AddReviewForm = () => {
  useTitle("Add Review");
  const navigate = useNavigate();
  const { serviceName, price, _id, serviceImage } = useLoaderData();

  const handleAddReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const reviewerName = form.name.value;
    const ReviewerImage = form.photoURL.value;
    const email = form.email.value;
    const reviewText = form.review.value;
    const reviewerRating = form.rating.value;

    // console.log(name, email, review, rating);

    const newReviews = {
      serviceID: _id,
      serviceName: serviceName,
      serviceImage: serviceImage,
      price,
      reviewerName,
      ReviewerImage,
      email,
      reviewText,
      reviewerRating,
    };

    console.log(newReviews);

    fetch("https://b6a11-service-review-server-side-beta.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newReviews),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Thank you for your review!");
          form.reset();
          navigate(`/services/${_id}`);
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

            <Form.Group className="mb-3" controlId="formBasicPhoto">
              <Form.Label className="text-white">Photo URL</Form.Label>
              <Form.Control
                type="text"
                name="photoURL"
                placeholder="Enter photo URL"
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
