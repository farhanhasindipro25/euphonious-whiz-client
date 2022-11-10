import React, { useContext, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { AuthContext } from "../../UserContext/AuthProvider";
import ReviewRow from "./ReviewRow";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [userReviews, setUserReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setUserReviews(data));
  }, [user?.email]);
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
              <th className="fw-bold">Service Image</th>
              <th className="fw-bold">Service Details</th>
              <th className="fw-bold">{user?.displayName}'s Review</th>
              <th className="fw-bold">{user?.displayName}'s Rating</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {userReviews.map((userReview) => (
              <ReviewRow
                key={userReview._id}
                userReview={userReview}
              ></ReviewRow>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default MyReviews;
