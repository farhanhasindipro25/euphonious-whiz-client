import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

const WorkingProcess = () => {
  return (
    <div>
      <div>
        <h3 className="text-center fw-bold mb-5">
          Get familiar with my working process
        </h3>
        <div className="container">
          <ListGroup className="mb-5 rounded-0">
            <ListGroup.Item className="p-4 text-center text-white bg-dark fw-normal">
              For small instruments, I will visit your place and provide home
              service.
            </ListGroup.Item>
            <ListGroup.Item className="p-4 text-center text-white bg-dark fw-normal">
              For large instruments, you will have to bring it to my store.
            </ListGroup.Item>
            <ListGroup.Item className="p-4 text-center text-white bg-dark fw-normal">
              I have a custom made upgraded laboratory where you can view me
              work live to ensure you guarantee.
            </ListGroup.Item>
            <ListGroup.Item className="p-4 text-center text-white bg-dark fw-normal">
              If I visit your place, I will bring necessary tools as per the
              description of your problem.
            </ListGroup.Item>
            <ListGroup.Item className="p-4 text-center text-white bg-dark fw-normal">
              If you need change a part of your instrument, you may buy it by
              yourself. However, if you want me to buy it, you will have to add
              the cost of the accessory with my service charge, or you can send
              me the money in advance.
            </ListGroup.Item>
            <ListGroup.Item className="p-4 text-center text-white bg-dark fw-normal">
              You can pay me in bkash, nogod, bank, or cash. No advance payments
              needed.
            </ListGroup.Item>
            <ListGroup.Item className="p-4 text-center bg-dark text-success fw-semibold">
              I would love to jam with you anytime.
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>
    </div>
  );
};

export default WorkingProcess;
