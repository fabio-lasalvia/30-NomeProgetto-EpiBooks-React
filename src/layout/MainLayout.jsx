import React, { useEffect, useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';

import Topbar from "../components/Topbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

function MainLayout() {

    // const [cosaC’èDentro, funzionePerCambiarlo] = useState(valoreIniziale);
    //const [sidebarAperta, setSidebarAperta] = useState(true);

    // Carica il valore iniziale dal localStorage
    const [temaChiaro, setTemaChiaro] = useState(() => {
        const salvato = localStorage.getItem("temaChiaro");
        return salvato === null ? true : salvato === "true";
    });

    // Quando cambia temaChiaro, aggiorna il localStorage e il body
    useEffect(() => {
        localStorage.setItem("temaChiaro", temaChiaro);
        document.body.classList.remove("temaScuro", "temaChiaro");
        document.body.classList.add(temaChiaro ? "temaChiaro" : "temaScuro");
    }, [temaChiaro]);

    return (
        <div className="d-flex flex-column min-vh-100">
            {/* TOPBAR */}
            <Topbar
                toggleSidebar={() => setSidebarAperta(!sidebarAperta)}
                toggleTema={() => setTemaChiaro(!temaChiaro)}
            />

            {/* Contenuto principale con Hero */}
            <Container fluid className="flex-grow-1">
                <Row className="h-100">

                    {/* Contenuto Principale (Hero) */}
                    <Col>
                        <Hero />
                    </Col>
                </Row>
            </Container>

            <Footer />

        </div>
    )

}

export default MainLayout