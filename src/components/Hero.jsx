import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import './Hero.css';

function Hero() {
  return (
    <div className="hero-section">
      <Carousel fade controls indicators>
        {/* SLIDE 1 - Fantasy */}
        <Carousel.Item>
          <Link to="/fantasy">
            <img
              src="/img/hero/heroFantasy.png"
              alt="Copertina Libri Fantasy"
              className="carousel-img d-block w-100"
            />
            <div className="hero-overlay" />
            <Carousel.Caption>
              <h3>Fantasy</h3>
              <p>Dove la realtà finisce, comincia la magia.</p>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>

        {/* SLIDE 2 - Avventura */}
        <Carousel.Item>
          <Link to="/avventura">
            <img
              src="/img/hero/heroAdventure.png"
              alt="Copertina Libri Avventura"
              className="carousel-img d-block w-100"
            />
            <div className="hero-overlay" />
            <Carousel.Caption>
              <h3>Avventura</h3>
              <p>Brividi, mappe segrete e colpi di scena dietro ogni angolo.</p>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>

        {/* SLIDE 3 - Romantico */}
        <Carousel.Item>
          <Link to="/romantico">
            <img
              src="/img/hero/heroRomance.png"
              alt="Copertina Libri Romantici"
              className="carousel-img d-block w-100"
            />
            <div className="hero-overlay" />
            <Carousel.Caption>
              <h3>Romantico</h3>
              <p>Per chi crede nei colpi di fulmine…e nei finali scritti bene.</p>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Hero;
