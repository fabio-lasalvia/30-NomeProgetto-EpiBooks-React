import React, { useEffect, useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { Outlet } from 'react-router-dom'; // Outlet è il segnaposto dove verranno renderizzate le route figlie (routes annidate o nested routes)

import Topbar from "../components/Topbar";
import Footer from "../components/Footer";

function MainLayout() {

    // Tema
    const [temaChiaro, setTemaChiaro] = useState(() => {
        const salvato = localStorage.getItem("temaChiaro");
        return salvato === null ? true : salvato === "true";
    });

    useEffect(() => {
        localStorage.setItem("temaChiaro", temaChiaro);
        document.body.classList.remove("temaScuro", "temaChiaro");
        document.body.classList.add(temaChiaro ? "temaChiaro" : "temaScuro");
    }, [temaChiaro]);

    // Filtro di ricerca
    const [filtroRicerca, setFiltroRicerca] = useState("")

    return (
        <div className="d-flex flex-column min-vh-100">
            <Topbar
                toggleTema={() => setTemaChiaro(!temaChiaro)}
                onSearchChange={setFiltroRicerca}
            />

            <Container fluid className="flex-grow-1">
                <Row className="h-100">
                    <Col>
                        <Outlet context={{filtroRicerca, temaChiaro}} />
                    </Col>
                </Row>
            </Container>

            <Footer />
        </div>
    );
}

export default MainLayout;
