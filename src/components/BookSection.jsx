import React, { useEffect, useState } from "react";
import { Button, Card, Container, Row, Col, Spinner } from "react-bootstrap";
import BookCard from "./BookCard";

function BookSection({ books, category }) {

  return (
    <>
      <h1 className="m-4 text-center">{category}</h1>
      <Container>
        <Row className="g-3">
          {books.map((book) => (
            <BookCard key={book.asin} book = {book}/>
          ))}
        </Row>
      </Container>
      
    </>
  );
}

export default BookSection;
