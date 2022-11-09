import React from "react";
import Accordion from "react-bootstrap/Accordion";

const Blog = () => {
  return (
    <div className="container mt-5 mb-5">
      <Accordion defaultActiveKey={["0", "1", "2", "3"]} alwaysopen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Difference between SQL and NoSQL.</Accordion.Header>
          <Accordion.Body>
            SQL is a structured query language used for interfacing with
            relational database systems. Relational databases model data as
            records in rows and tables with logical links between them. On the
            other hand, NoSQL is a class of database management systems that are
            non-relational and do not use SQL to operate. In terms of language,
            SQL can handle complex queries, is safe and quite versatile, hence
            outweighing NoSQL with those features. Next, scalability comes in,
            where most SQL DBMs can be scaled by increasing hardware processing
            power, whereas NoSQL DBMs rely on master-slave architectures.
            Thirdly, in terms of structure, SQL DBMs are represented using
            schemas, tabular formats, whereas NoSQL DBMs are represented as
            collections in key-value pairs, overally stored as a document.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            What is JWT and how does it work?{" "}
          </Accordion.Header>
          <Accordion.Body>
            JWT stands for JSON Web Token, which is used to provide security to
            APIs. It is an open standard used to share security information
            between two entities, a client and a server. Each JWT contains
            encoded JSON objects, including a set of claims. They are signed
            using a cryptographic algorithm to ensure that the claims cannot be
            altered by a third party after a token has been issued.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            Difference between Javascript and NodeJS.{" "}
          </Accordion.Header>
          <Accordion.Body>
            JavaScript is a simple programming language/ scripting language that
            can be used with any browser that has the JavaScript Engine
            installed. It is also known to be an updated version of ECMAScript.
            It is a high-level programming language that uses the concept of
            Oops but it is based on prototype inheritance.
            <br />
            <br />
            NodeJS, on the other hand, is a cross-platform and open-source
            Javascript environment that allows the javascript to be run on the
            server-side. Nodejs allows Javascript code to run outside the
            browser. Nodejs comes with a lot of modules and mostly used in web
            development.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            How does NodeJS handle multiple requests at the same time?
          </Accordion.Header>
          <Accordion.Body>
            NodeJS receives multiple client requests and places them into
            EventQueue. NodeJS is built with the concept of event-driven
            architecture. NodeJS has its own EventLoop which is an infinite loop
            that receives requests and processes them. EventLoop is the listener
            for the EventQueue. If NodeJS can process the request without I/O
            blocking then the event loop would itself process the request and
            sends the response back to the client by itself.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Blog;
