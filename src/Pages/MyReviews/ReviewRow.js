import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ReviewRow = ({ userReview, handleDelete, handleUpdate }) => {
  const { _id, serviceName, price, review, rating, service } = userReview;

  const [serviceReview, setServiceReview] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/services/${service}`)
      .then((res) => res.json())
      .then((data) => setServiceReview(data));
  }, [service]);

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
      <td className="fw-semibold">{review?.slice(0, 30) + "..."}</td>
      <td className="fw-semibold">
        <Button variant="warning" className=" rounded-0">
          {rating}
        </Button>
      </td>
      <td>
        <Button
          variant="dark"
          className="mx-1 rounded-0"
        >
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
