import React, { useEffect, useState } from "react";
import { Button, Card, Container, Row, Col, Spinner } from "react-bootstrap";

function BookSection({ books, category }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const [selected, setSelected] = useState("");

  const [comments, setComments] = useState([]);

  const API_URL = "https://striveschool-api.herokuapp.com/api/comments/";

  useEffect(() => {
    if (!selected) return;

    setIsLoading(true);
    setError(false);

    fetch(API_URL + selected, {
      headers: {
        Authorization: "Bearer ",
      },
    })
      .then((response) => {
        if (!response.ok) throw new Error("Errore con la richiesta");
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setComments(data);
      })
      .catch((error) => {
        console.error(error);
        setError(true);
      })
      .finally(() => setIsLoading(false));
  }, [selected]);

  if (isLoading)
    return <Spinner animation="border" className="m-5 d-block mx-auto" />;

  if (error)
    return (
      <div className="text-center text-danger fw-bold m-5">
        Errore nel caricamento commenti
      </div>
    );

  return (
    <>
      <h1 className="m-4 text-center">{category}</h1>
      <Container>
        <Row className="g-3">
          {books.map((book) => (
            <Col key={book.asin} xs={12} sm={6} md={4} lg={3}>
              <Card className="mb-3 h-100">
                <Card.Img
                  variant="top"
                  src={book.img}
                  alt={book.title}
                  style={{ height: "400px", width: "100%", objectFit: "cover" }}
                  className={`img-fluid ${
                    selected === book.asin
                      ? "border border-3 border-danger"
                      : ""
                  } `}
                  onClick={() => setSelected(book.asin)}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title title={book.title} className="text-truncate">
                    {book.title}
                  </Card.Title>
                  <Card.Text className="text-center fst-italic fw-semibold text-primary">
                    Prezzo: € {book.price}
                  </Card.Text>

                  <Button variant="primary" className="mt-auto">
                    Aggiungi
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      {selected && (
        <Container className="mt-4">
          <h3 className="text-center">Commenti</h3>
          {isLoading ? (
            <Spinner animation="border" className="d-block mx-auto my-4" />
          ) : error ? (
            <div className="text-danger text-center fw-bold">
              Errore nel caricamento commenti
            </div>
          ) : comments.length > 0 ? (
            comments.map((comment) => (
              <p key={comment._id} className="text-center">
                {comment.comment}
              </p>
            ))
          ) : (
            <p className="text-center">Nessun commento</p>
          )}
        </Container>
      )}
    </>
  );
}

export default BookSection;
