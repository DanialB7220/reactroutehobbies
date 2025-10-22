import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="text-center shadow">
            <Card.Body>
              <Card.Title as="h1" className="display-4 text-primary mb-4">
                Welcome Home!
              </Card.Title>
              <Card.Text className="lead mb-4">
                Discover my hobbies and learn more about me in this React Router application.
              </Card.Text>
              <div className="mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=350&fit=crop&crop=center" 
                  alt="Welcome to Hobbies" 
                  className="img-fluid rounded shadow"
                  style={{ maxWidth: '100%', height: 'auto', borderRadius: '15px' }}
                />
              </div>
              <Card.Text>
                This is a simple React application built with Vite, 
                React Router v6, and React Bootstrap. Navigate through the different sections 
                to explore my hobbies and learn more about me!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
