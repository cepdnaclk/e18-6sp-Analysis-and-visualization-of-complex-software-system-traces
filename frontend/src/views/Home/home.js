import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './HomePage.css'; // Import your custom CSS for styling

const HomePage = () => {
const imageUrl = 'https://static.semrush.com/lfa/static/media/AdvantageSection.3b6d7d05.svg'; // Replace with your image URL

  return (
    <div className="home-page">
      <header className="hero-section">
        <Container>
          <Row>
            <Col md={8} className="text-center text-md-left">
              <h1 className="display-4">Welcome to Exactsoft Analyser </h1>
              <p className="lead">
              Empower Q&A engineers with AI-driven trace analysis for fintech apps.</p>
              <Button variant="primary" size="lg">
                Get Started
              </Button>
            </Col>
            <Col md={4} className="d-none d-md-block">
            <img src={imageUrl} alt="My Image" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </header>

      <section className="features-section">
        <Container>
          <Row>
            <Col lg={4}>
              <div className="feature">
                <i className="fas fa-code fa-3x"></i>
                <h3>Log Analysis</h3>
                <p>
                  Upload your log files and get detailed analysis reports.
                </p>
              </div>
            </Col>
            <Col lg={4}>
              <div className="feature">
                <i className="fas fa-tools fa-3x"></i>
                <h3>Log Optimization</h3>
                <p>
                  Receive suggestions for optimizing your logs for higer readability.
                </p>
              </div>
            </Col>
            <Col lg={4}>
              <div className="feature">
                <i className="fas fa-check-circle fa-3x"></i>
                <h3>Graphical Representation</h3>
                <p>
                  Get a better understanding using different types of charts
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default HomePage;
