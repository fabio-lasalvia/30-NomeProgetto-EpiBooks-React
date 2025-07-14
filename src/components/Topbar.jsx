import React from "react";
import { Form, Button, Nav } from 'react-bootstrap';

function Topbar({ toggleTema }) {
    return (
        <div className="topbar d-flex justify-content-between align-items-center shadow p-2 gap-3 flex-wrap">

            {/* SINISTRA: Logo + Menu */}
            <div className="d-flex align-items-center gap-4 flex-grow-1 flex-wrap">

                {/* Logo */}
                <a href="/home" className="flex-shrink-0">
                    <img
                        src="/img/logo/logoEpiBooks.png"
                        alt="Logo Epi Books"
                        className="rounded img-fluid ms-2"
                        style={{ width: "180px", height: "auto" }}
                    />
                </a>

                {/* Menu principale */}
                <Nav className="d-flex gap-2 flex-wrap">
                    <Nav.Link href="/home" className="btn btn-outline-secondary">Home</Nav.Link>
                    <Nav.Link href="/catalogo" className="btn btn-outline-secondary">Catalogo</Nav.Link>
                    <Nav.Link href="/categorie" className="btn btn-outline-secondary">Categorie</Nav.Link>
                    <Nav.Link href="/carrello" className="btn btn-outline-secondary">Carrello</Nav.Link>
                </Nav>
            </div>

            {/* DESTRA: Searchbar + Icone */}
            <div className="d-flex align-items-center justify-content-end gap-2 flex-wrap">

                {/* Searchbar */}
                <Form className="flex-grow-1" style={{ maxWidth: '400px' }}>
                    <Form.Control
                        type="search"
                        placeholder="Cerca.."
                    />
                </Form>

                {/* Pulsanti Icona */}
                <Button variant="outline-secondary" onClick={toggleTema} className="flex-shrink-0">
                    <i className="bi bi-moon"></i>
                </Button>

                <a href="/profilo" className="btn btn-outline-secondary flex-shrink-0">
                    <i className="bi bi-person-circle fs-4"></i>
                </a>

                <a href="/impostazioni" className="btn btn-outline-secondary flex-shrink-0">
                    <i className="bi bi-gear fs-4"></i>
                </a>
            </div>

        </div>
    );
}

export default Topbar;
