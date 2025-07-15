import React from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";

function BookSection({ books, category }) {

    return (
        <>
            <h1 className="m-4 text-center">{category}</h1>

            <Container>
                <Row className="g-3">
                    {books.map((book) => (
                        <Col key={book.asin} xs={12} sm={6} md={4} lg={3} >
                            <Card className="mb-3 h-100">
                                <Card.Img variant="top" src={book.img} alt={book.title} style={{ height: '400px', width: '100%', objectFit: 'cover' }} className="img-fluid" />
                                <Card.Body className="d-flex flex-column">
                                    <Card.Title className="text-truncate">{book.title}</Card.Title>
                                    <Card.Text className="text-center fst-italic fw-semibold text-primary">Prezzo: € {book.price}</Card.Text>
                                    <Button variant="primary" className="mt-auto">Aggiungi</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}

                </Row>
            </Container>
        </>
    )
}

export default BookSection