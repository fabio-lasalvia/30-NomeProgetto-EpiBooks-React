import React from "react";
import { useOutletContext } from "react-router-dom";

import Hero from "../components/Hero"
import BookSection from "../components/BookSection";

import fantasyBooks from "../data/fantasy.json"
import historyBooks from "../data/history.json"
import horrorBooks from "../data/horror.json"
import romanceBooks from "../data/romance.json"
import scifiBooks from "../data/scifi.json"



function Home() {

    const { filtroRicerca, temaChiaro } = useOutletContext()

    const filtraLibri = (listaLibri) => listaLibri.filter((libro) => libro.title.toLowerCase().includes(filtroRicerca.toLowerCase()))

    const fantasyFiltrati = filtraLibri(fantasyBooks);
    const historyFiltrati = filtraLibri(historyBooks);
    const horrorFiltrati = filtraLibri(horrorBooks);
    const romanceFiltrati = filtraLibri(romanceBooks);
    const scifiFiltrati = filtraLibri(scifiBooks);

    return (

        <>

            <Hero />

            {fantasyFiltrati.length > 0 && (<BookSection books={fantasyFiltrati} category={"Fantasy"}></BookSection>)}
            {historyFiltrati.length > 0 && (<BookSection books={historyFiltrati} category={"History"}></BookSection>)}
            {horrorFiltrati.length > 0 && (<BookSection books={horrorFiltrati} category={"Horror"}></BookSection>)}
            {romanceFiltrati.length > 0 && (<BookSection books={romanceFiltrati} category={"Romance"}></BookSection>)}
            {scifiFiltrati.length > 0 && (<BookSection books={scifiFiltrati} category={"Sci-Fi"}></BookSection>)}

        </>
    )
}

export default Home