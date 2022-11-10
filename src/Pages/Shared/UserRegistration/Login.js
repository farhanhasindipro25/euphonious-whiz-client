import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import useTitle from "../../../Hooks/useTitle";
import { AuthContext } from "../../../UserContext/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  useTitle("Login");
  const navigate = useNavigate();
  const { signIn, providerLogin } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();

  const handleLogin = (event) => {
    event.preevntDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate("/services");
      })
      .catch((error) => console.error(error));
  };

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
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
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="text-white">Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
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
              <p className="text-white pt-3">
                <small>Forgot Password? Click here to reset.</small>
              </p>
            </Form.Group>
            <Button
              variant="warning"
              className="mx-auto d-block w-100 rounded-0 fw-bold mt-4"
              type="submit"
            >
              Login
            </Button>
            <p className="text-white pt-3">
              <small>
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="text-decoration-none text-warning"
                >
                  Sign Up.
                </Link>
              </small>
            </p>
            <div className="d-flex align-items-center justify-content-center gap-4">
              <hr className="text-white fw-semibold w-50 pt-3" />
              <p className="text-white fw-semibold">OR</p>
              <hr className="text-white fw-semibold w-50 pt-3" />
            </div>
            <div>
              <Button
                variant="light"
                className="rounded-0 d-flex align-items-center d-block mx-auto px-4 gap-2"
                onClick={handleGoogleSignIn}
              >
                <FcGoogle></FcGoogle>
                <p className="text-dark fw-semibold pt-3">Login with Google</p>
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
