import { useState } from "react";
import { Button, Card, Col } from "react-bootstrap";
import CommentArea from "./commentArea";


function BookCard({ book }) {

  const [selected, setSelected] = useState("");

  return (
    <>
      <Col key={book.asin} xs={12} sm={6} md={4} lg={3}>
        <Card className="mb-3 h-100">
          <Card.Img
            variant="top"
            src={book.img}
            alt={book.title}
            style={{ height: "400px", width: "100%", objectFit: "cover" }}
            className={`img-fluid ${selected === book.asin
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

      {selected === book.asin && <CommentArea asin={book.asin}/>}
    </>
  );
}

export default BookCard;
