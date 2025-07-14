import { Button, Card } from "react-bootstrap";

function BookCard({ img, title, category }) {
  return (
    <Card style={{ width: "18rem" }} className="mb-3">
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{category}</Card.Text>
        <Button variant="primary">Aggiungi</Button>
      </Card.Body>
    </Card>
  );
}

export default BookCard;
