import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ReviewRow = ({ userReview, handleDelete }) => {
  const { _id, serviceName, price, reviewText, reviewerRating, service } = userReview;

  const [serviceReview, setServiceReview] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/services/${service}`)
      .then((res) => res.json())
      .then((data) => setServiceReview(data));
  }, [service]);

  // console.log(serviceReview.serviceImage);

  return (
    <tr>
      <td>
        {serviceReview?.serviceImage && (
          <img
            src={serviceReview.serviceImage}
            className="img-fluid w-25 d-block mx-auto"
            alt=""
          />
        )}
      </td>
      <td>
        <h6 className="fw-bold">{serviceName}</h6>
        <p className="fw-semibold text-info">Price: {price}</p>
      </td>
      <td className="fw-semibold">{reviewText?.slice(0, 30) + "..."}</td>
      <td className="fw-semibold">
        <Button variant="warning" className=" rounded-0">
          {reviewerRating}
        </Button>
      </td>
      <td>
        <Button variant="dark" className="mx-1 rounded-0">
          <Link
            to={`/editreview/${_id}`}
            className="text-decoration-none text-white"
          >
            EDIT
          </Link>
        </Button>
        <Button
          variant="danger"
          className="mx-1 rounded-0"
          onClick={() => handleDelete(_id)}
        >
          DELETE
        </Button>
      </td>
    </tr>
  );
};

export default ReviewRow;
