import React from "react";
import { Button, Form } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";

const EditReviewForm = ({ userReviews }) => {
  useTitle("Edit Review");
  const storedReview = useLoaderData();
  // const { _id, serviceName } = storedReview;
  console.log(userReviews);

  const handleUpdate = (event) => {
    event.preventDefault();

    const form = event.target;
    const reviewerRating = form.rating.value;
    const reviewText = form.review.value;

    console.log(reviewerRating, reviewText);

    const editedReview = {
      // service: _id,
      // serviceName: serviceName,
      reviewText,
      reviewerRating,
    };

    // fetch(`https://b6a11-service-review-server-side-beta.vercel.app/reviews/${_id}`, {
    //   method: "PUT",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(editedReview),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //   });
  };

  return (
    <div className="container mt-5 mb-5 pb-5 pt-5 bg-dark rounded-0 p-5">
      <Form className="mb-5 mt-5 pt-5" onSubmit={handleUpdate}>
        <h5 className="text-white text-center my-5">
          Editing review of
          <span className="ms-2 text-warning fw-semibold"></span>
        </h5>
        <Form.Group className="mb-3" controlId="formBasicRating">
          <Form.Label className="text-white">Rating</Form.Label>
          <Form.Control
            type="text"
            name="rating"
            placeholder="Enter service rating"
            className="rounded-0"
            defaultValue=""
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDescription">
          <Form.Label className="text-white">Review</Form.Label>
          <Form.Control
            as="textarea"
            type="text"
            name="review"
            placeholder="Edit your review"
            className="rounded-0"
            defaultValue=""
            style={{ height: "100px" }}
            required
          />
        </Form.Group>
        <Button
          variant="warning"
          className="mx-auto d-block w-100 rounded-0 fw-bold mt-4"
          type="submit"
        >
          UPDATE REVIEW
        </Button>
      </Form>
    </div>
  );
};

export default EditReviewForm;
