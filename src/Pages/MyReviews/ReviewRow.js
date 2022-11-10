import React from "react";
import { Button } from "react-bootstrap";

const ReviewRow = ({userReview}) => {
    const {serviceName, price, review, rating} = userReview;
  return (
    <tr>
      <td>Image</td>
      <td>
        <h6 className="fw-bold">{serviceName}</h6>
        <p className="fw-semibold text-info">Price: {price}</p>
      </td>
      <td className="fw-semibold">{review}</td>
      <td className="fw-semibold">
        <Button variant="warning" className=" rounded-0">{rating}</Button>
      </td>
      <td>
        <Button variant="dark" className="mx-1 rounded-0">
        Edit
        </Button>
        <Button variant="danger" className="mx-1 rounded-0">
        Delete
        </Button>
      </td>
    </tr>
  );
};

export default ReviewRow;
