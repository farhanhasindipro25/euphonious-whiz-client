import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
    return (
        <div>
            <div className="container mt-5 mb-5 pb-5 pt-5 bg-dark rounded-0 p-5">
        <div>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label className="text-white">Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                className="rounded-0"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="text-white">Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                className="rounded-0"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPhoto">
              <Form.Label className="text-white">Photo URL</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Photo URL"
                className="rounded-0"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="text-white">Password</Form.Label>
              <Form.Control
                type="password"
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
                <Link
                  to="/login"
                  className="text-decoration-none text-warning"
                >
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