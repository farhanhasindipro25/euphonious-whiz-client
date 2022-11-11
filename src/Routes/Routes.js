import AddService from "../Pages/AddService/AddService";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home/Home";
import EditReviewForm from "../Pages/MyReviews/EditReviewForm";
import MyReviews from "../Pages/MyReviews/MyReviews";
import AddReviewForm from "../Pages/ServiceDetails/Reviews/AddReviewForm";
import ServiceDetail from "../Pages/ServiceDetails/ServiceDetail";
import Services from "../Pages/Services/Services";
import Login from "../Pages/Shared/UserRegistration/Login";
import Signup from "../Pages/Shared/UserRegistration/Signup";
import PrivateRoute from "./PrivateRoute";
import Route404 from "./Route404";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layouts/Main");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/homepage",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/services",
        element: <Services></Services>,
        loader: ({ params }) =>
          fetch(
            "https://b6a11-service-review-server-side-beta.vercel.app/services"
          ),
      },
      {
        path: "/services/:id",
        element: <ServiceDetail></ServiceDetail>,
        loader: ({ params }) =>
          fetch(
            `https://b6a11-service-review-server-side-beta.vercel.app/services/${params.id}`
          ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/myreviews",
        element: (
          <PrivateRoute>
            <MyReviews></MyReviews>
          </PrivateRoute>
        ),
      },
      {
        path: "/addservice",
        element: (
          <PrivateRoute>
            <AddService></AddService>
          </PrivateRoute>
        ),
        loader: () =>
          "https://b6a11-service-review-server-side-beta.vercel.app/services",
      },
      {
        path: "/addreview/:id",
        element: (
          <PrivateRoute>
            <AddReviewForm></AddReviewForm>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://b6a11-service-review-server-side-beta.vercel.app/services/${params.id}`
          ),
      },
      {
        path: "/editreview/:id",
        element: (
          <PrivateRoute>
            <EditReviewForm></EditReviewForm>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://b6a11-service-review-server-side-beta.vercel.app/reviews/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/*",
    element: <Route404></Route404>,
  },
]);

export default router;
