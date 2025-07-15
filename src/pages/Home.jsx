import React from "react";

import Hero from "../components/Hero"
import BookSection from "../components/BookSection";

import fantasyBooks from "../data/fantasy.json"
import historyBooks from "../data/history.json"
import horrorBooks from "../data/horror.json"
import romanceBooks from "../data/romance.json"
import scifiBooks from "../data/scifi.json"


function Home() {

    return (

        <>

            <Hero />

            <BookSection books={fantasyBooks} category={"Fantasy"}></BookSection>
            <BookSection books={historyBooks} category={"History"}></BookSection>
            <BookSection books={horrorBooks} category={"Horror"}></BookSection>
            <BookSection books={romanceBooks} category={"Romance"}></BookSection>
            <BookSection books={scifiBooks} category={"Sci-Fi"}></BookSection>

        </>
    )
}

export default Home