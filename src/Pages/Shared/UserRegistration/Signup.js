import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import useTitle from "../../../Hooks/useTitle";
import { AuthContext } from "../../../UserContext/AuthProvider";

const Signup = () => {
  useTitle("Signup");
  const navigate = useNavigate();
  const { createUser } = useContext(AuthContext);
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    // const name = form.name.value;
    const email = form.email.value;
    // const photourl = form.photoURL.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/services");
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <div className="container mt-5 mb-5 pb-5 pt-5 bg-dark rounded-0 p-5">
        <div>
          <Form onSubmit={handleSignUp}>
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
            <Form.Group className="mb-3" controlId="formBasicPhoto">
              <Form.Label className="text-white">Photo URL</Form.Label>
              <Form.Control
                type="text"
                name="photoURL"
                placeholder="Enter Photo URL"
                className="rounded-0"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="text-white">Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                className="rounded-0"
                required
              />
            </Form.Group>
            <Button
              variant="warning"
              className="mx-auto d-block w-100 rounded-0 fw-bold mt-4"
              type="submit"
            >
              Sign Up
            </Button>
            <p className="text-white pt-3">
              <small>
                Already have an account?{" "}
                <Link to="/login" className="text-decoration-none text-warning">
                  Login.
                </Link>
              </small>
            </p>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
