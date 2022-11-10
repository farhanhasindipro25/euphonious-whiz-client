import React from "react";
import { Button, Form } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";

const AddService = () => {
  useTitle("Add Service");
  const services = useLoaderData();

  const handleAddService = () => {
    
  }
  return (
    <div>
      <h2>gfgf: {services}</h2>
      <div className="container mt-5 mb-5 pb-5 pt-5 bg-dark rounded-0 p-5">
        <div>
          <Form onSubmit={handleAddService}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label className="text-white">Service Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter service name"
                className="rounded-0"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicImage">
              <Form.Label className="text-white">Service Image URL</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter service image URL"
                className="rounded-0"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPrice">
              <Form.Label className="text-white">Price</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter service price"
                className="rounded-0"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicRating">
              <Form.Label className="text-white">Rating</Form.Label>
              <Form.Control
                type="text"
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
