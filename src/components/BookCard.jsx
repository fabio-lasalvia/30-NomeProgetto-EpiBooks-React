import { useState } from "react";
import { Button, Card } from "react-bootstrap";


function BookCard({ img, title, category }) {

  const [count, setCount] = useState(0)
  const handleClick = () => { if (count < 10) setCount(prev => prev + 1) };

  return (
    <Card style={{ width: "18rem" }} className="mb-3">
      <Card.Img variant="top" src={img} alt={title} />
      <Card.Body>
        <Card.Title title={title}>{title}</Card.Title>
        <Card.Text title={category}>{category}</Card.Text>
        <Button variant="primary" onClick={handleClick}>Aggiungi ({count})</Button>
      </Card.Body>
    </Card>
  );
}

export default BookCard;
