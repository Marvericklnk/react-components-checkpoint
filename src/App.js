import { Fragment } from "react";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Container from "react-bootstrap/Container";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";
import welcomeImage from "./assets/welcome.svg";
import "./App.css";

// Change this to your first name. Use "" to test the fallback greeting.
const firstName = "Marvin";

function App() {
  const hasFirstName = firstName.trim() !== "";

  return (
    <Fragment>
      <div className="App">
        <header className="page-header">
          <a className="brand" href="#product">m<span> / </span>collection</a>
          <span className="checkpoint-label">REACT COMPONENTS CHECKPOINT</span>
        </header>

        <main>
          <Container className="showcase">
            <p className="eyebrow">THE EVERYDAY EDIT / 001</p>
            <Card id="product" className="product-card">
              <div className="image-panel">
                <span className="edition-label">LISTEN. FOCUS. REPEAT.</span>
                <Image />
                <span className="image-caption">DESIGNED FOR YOUR EVERYDAY</span>
              </div>
              <Card.Body className="product-details">
                <Badge bg="light" text="dark" className="product-badge">AUDIO ESSENTIALS</Badge>
                <Name />
                <Description />
                <div className="price-area">
                  <Price />
                  <span className="price-caption">Product showcase</span>
                </div>
                <div className="detail-note">A simple favourite. A sound choice.</div>
              </Card.Body>
            </Card>

            <section className="greeting" aria-label="Personal greeting">
              {/* Only display this image when a first name is provided. */}
              {hasFirstName && (
                <img src={welcomeImage} alt="A welcoming wave" className="welcome-image" />
              )}
              <div>
                <h2>{hasFirstName ? `Hello, ${firstName.trim()}!` : "Hello, there!"}</h2>
                <p>Welcome to my first product showcase.</p>
              </div>
            </section>
          </Container>
        </main>

        <footer>Made by Marvin · React &amp; React Bootstrap</footer>
      </div>
    </Fragment>
  );
}

export default App;
