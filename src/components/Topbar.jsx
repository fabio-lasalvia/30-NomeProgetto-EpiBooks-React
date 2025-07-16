import React from "react";
import { Form, Button, Nav, InputGroup, Dropdown } from 'react-bootstrap';

function Topbar({ toggleTema, onSearchChange }) {
    return (
        <div className="topbar d-flex justify-content-between align-items-center shadow p-2 gap-3 flex-wrap mb-5">
            {/* SINISTRA: Logo + Menù */}
            <div className="d-flex align-items-center gap-4 flex-grow-1 flex-wrap">
                <a href="/home" className="flex-shrink-0">
                    <img
                        src="/img/logo/logoEpiBooks.png"
                        alt="Logo Epi Books"
                        className="rounded img-fluid ms-2"
                        style={{ width: "180px", height: "auto" }}
                    />
                </a>
                <Nav className="d-flex gap-2 flex-wrap">
                    <Nav.Link href="/home" className="btn btn-outline-secondary">Home</Nav.Link>
                    <Nav.Link href="/catalogo" className="btn btn-outline-secondary">Catalogo</Nav.Link>
                    <Nav.Link href="/categorie" className="btn btn-outline-secondary">Categorie</Nav.Link>
                    <Nav.Link href="/carrello" className="btn btn-outline-secondary">Carrello</Nav.Link>
                </Nav>
            </div>

            {/* DESTRA: Searchbar + Icone */}
            <div className="d-flex align-items-center justify-content-end gap-2">
                <InputGroup className="flex-grow-1" style={{ maxWidth: '300px' }}>
                    <Form.Control
                        type="search"
                        placeholder="Cerca..."
                        aria-label="Campo di ricerca"
                        onChange={(e) => onSearchChange(e.target.value)}
                    />
                    <Button variant="outline-secondary">
                        <i className="bi bi-search"></i>
                    </Button>
                </InputGroup>

                {/* Dropdown Profilo */}
                <Dropdown align="end">
                    <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic" className="d-flex align-items-center">
                        <i className="bi bi-person-circle fs-4"></i>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={toggleTema}>
                            <i className="bi bi-moon me-2"></i> Cambia tema
                        </Dropdown.Item>
                        <Dropdown.Item href="/profilo">
                            <i className="bi bi-person me-2"></i> Profilo
                        </Dropdown.Item>
                        <Dropdown.Item href="/impostazioni">
                            <i className="bi bi-gear me-2"></i> Impostazioni
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    );
}

export default Topbar;
