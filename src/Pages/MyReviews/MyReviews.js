import React, { useContext, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../UserContext/AuthProvider";
import ReviewRow from "./ReviewRow";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [userReviews, setUserReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUserReviews(data));
  }, [user?.email]);

  const handleDelete = (_id) => {
    const proceed = window.confirm("Confirm delete!");
    if (proceed) {
      fetch(`http://localhost:5000/reviews/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast.success("Review Deleted Successfully!");
            const remainingReviews = userReviews.filter(
              (item) => item._id !== _id
            );
            setUserReviews(remainingReviews);
          }
        });
    }
  };
  return (
    <div>
      <div>
        <h5 className="text-center fw-semibold mt-5 mb-2">
          Username: {user?.displayName}
        </h5>
        <p className="text-center fw-semibold">
          You have reviewed {userReviews.length} services.
        </p>
      </div>
      <div className="my-5 container">
        <Table>
          <thead>
            <tr>
              <th className="fw-bold w-25 text-center">Image</th>
              <th className="fw-bold">Service Details</th>
              <th className="fw-bold">Review</th>
              <th className="fw-bold">Rating</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {userReviews.map((userReview) => (
              <ReviewRow
                key={userReview._id}
                userReview={userReview}
                handleDelete={handleDelete}
              ></ReviewRow>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default MyReviews;
