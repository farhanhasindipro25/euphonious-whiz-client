import React from "react";
import { Button, Form } from "react-bootstrap";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";

const AddService = () => {
  useTitle("Add Service");
  const navigate = useNavigate();

  const handleAddService = (event) => {
    event.preventDefault();
    const form = event.target;
    const serviceName = form.serviceName.value;
    const serviceImage = form.serviceImage.value;
    const price = form.price.value;
    const generalRating = form.generalRating.value;
    const description = form.description.value;

    // console.log(serviceName, serviceImage, price, generalRating, description);

    const newServices = {
      serviceName: serviceName,
      serviceImage: serviceImage,
      price,
      description,
      generalRating,
    };

    fetch("https://b6a11-service-review-server-side-beta.vercel.app/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newServices),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Service added successfully!");
          form.reset();
          navigate(`/services`);
        }
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <div className="container mt-5 mb-5 pb-5 pt-5 bg-dark rounded-0 p-5">
        <div>
          <Form onSubmit={handleAddService}>
            <h5 className="text-white text-center my-5 fw-bold">
              ADD A NEW SERVICE
            </h5>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label className="text-white">Service Name</Form.Label>
              <Form.Control
                type="text"
                name="serviceName"
                placeholder="Enter service name"
                className="rounded-0"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicImage">
              <Form.Label className="text-white">Service Image URL</Form.Label>
              <Form.Control
                type="text"
                name="serviceImage"
                placeholder="Enter service image URL"
                className="rounded-0"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPrice">
              <Form.Label className="text-white">Price</Form.Label>
              <Form.Control
                type="text"
                name="price"
                placeholder="Enter service price"
                className="rounded-0"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicRating">
              <Form.Label className="text-white">Rating</Form.Label>
              <Form.Control
                type="text"
                name="generalRating"
                placeholder="Enter service rating"
                className="rounded-0"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDescription">
              <Form.Label className="text-white">Description</Form.Label>
              <Form.Control
                as="textarea"
                type="text"
                name="description"
                placeholder="Enter service description"
                className="rounded-0"
                style={{ height: "100px" }}
                required
              />
            </Form.Group>
            <Button
              variant="warning"
              className="mx-auto d-block w-100 rounded-0 fw-bold mt-4"
              type="submit"
            >
              ADD SERVICE
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddService;
