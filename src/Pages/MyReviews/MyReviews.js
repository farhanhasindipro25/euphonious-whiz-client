import React, { useContext, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { toast } from "react-hot-toast";
import useTitle from "../../Hooks/useTitle";
import { AuthContext } from "../../UserContext/AuthProvider";
import ReviewRow from "./ReviewRow";

const MyReviews = () => {
  useTitle("My Reviews");
  const { user } = useContext(AuthContext);
  const [userReviews, setUserReviews] = useState([]);

  console.log(userReviews);

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
        <h5 className="text-center fw-semibold my-5 py-5">
          You have reviewed {userReviews.length} services.
        </h5>
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
                id={userReview._id}
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
