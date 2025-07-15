import React, { useEffect, useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { Outlet } from 'react-router-dom'; // Outlet è il segnaposto dove verranno renderizzate le route figlie (routes annidate o nested routes)

import Topbar from "../components/Topbar";
import Footer from "../components/Footer";

function MainLayout() {
    const [temaChiaro, setTemaChiaro] = useState(() => {
        const salvato = localStorage.getItem("temaChiaro");
        return salvato === null ? true : salvato === "true";
    });

    useEffect(() => {
        localStorage.setItem("temaChiaro", temaChiaro);
        document.body.classList.remove("temaScuro", "temaChiaro");
        document.body.classList.add(temaChiaro ? "temaChiaro" : "temaScuro");
    }, [temaChiaro]);

    return (
        <div className="d-flex flex-column min-vh-100">
            <Topbar toggleTema={() => setTemaChiaro(!temaChiaro)} />

            <Container fluid className="flex-grow-1">
                <Row className="h-100">
                    <Col>
                        <Outlet />
                    </Col>
                </Row>
            </Container>

            <Footer />
        </div>
    );
}

export default MainLayout;
