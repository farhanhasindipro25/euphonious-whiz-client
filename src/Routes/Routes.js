import AddService from "../Pages/AddService/AddService";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home/Home";
import MyReviews from "../Pages/MyReviews/MyReviews";
import AddReviewForm from "../Pages/ServiceDetails/Reviews/AddReviewForm";
import ServiceDetail from "../Pages/ServiceDetails/ServiceDetail";
import Services from "../Pages/Services/Services";
import Login from "../Pages/Shared/UserRegistration/Login";
import Signup from "../Pages/Shared/UserRegistration/Signup";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layouts/Main");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/services/:id",
        element: <ServiceDetail></ServiceDetail>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
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
        element: <MyReviews></MyReviews>,
      },
      {
        path: "/addservice",
        element: <AddService></AddService>,
      },
      {
        path: "/addreview/:id",
        element: <AddReviewForm></AddReviewForm>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
    ],
  },
]);

export default router;
