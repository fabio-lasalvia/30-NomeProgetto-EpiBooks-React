import React from "react";

import { Col, Row, Container } from "react-bootstrap"
import { Link } from "react-router-dom";

function Footer() {

    return (

        <>
            <Container className="mt-5">

                <Row>
                    <Col sm={12} md={4} className="d-flex flex-column">
                        <Link to="/" className="footer-link">Home</Link>
                        <Link to="/catalogo" className="footer-link">Catalogo</Link>
                        <Link to="/categorie" className="footer-link">Categorie</Link>
                        <Link to="/carrello" className="footer-link">Carrello</Link>

                    </Col>

                    <Col sm={12} md={4} className="d-flex flex-column">
                        <Link to="/about" className="footer-link">Chi siamo</Link>
                        <Link to="/faq" className="footer-link">Domande frequenti</Link>
                        <Link to="/contatti" className="footer-link">Contattaci</Link>
                        <Link to="/supporto" className="footer-link">Supporto</Link>

                    </Col>

                    <Col sm={12} md={4} className="d-flex flex-column">
                        <Link to="/privacy" className="footer-link">Privacy Policy</Link>
                        <Link to="/termini" className="footer-link">Termini e Condizioni</Link>
                        <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="footer-link">Instagram</a>
                        <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="footer-link">Facebook</a>

                    </Col>

                    <p className="text-center mt-4">&copy; EpicBooks 2025. Tutti i diritti riservati.</p>

                </Row>

            </Container>

        </>
    )
}

export default Footer