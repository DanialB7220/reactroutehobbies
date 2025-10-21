import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Hobbies = () => {
  const navigate = useNavigate();
  
  const hobbies = [
    {
      id: 'ufc',
      title: 'Watching UFC',
      image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=300&h=200&fit=crop&crop=center',
      description: 'Mixed martial arts and combat sports'
    },
    {
      id: 'pickleball',
      title: 'Pickleball',
      image: 'https://media.istockphoto.com/id/2023549916/photo/pickleball-racket-and-ball.jpg?s=612x612&w=0&k=20&c=dntQPaXY22GtnKWZYdcxQsmFkFPrgduman4KjLmbtI8=',
      description: 'Fast-paced paddle sport'
    },
    {
      id: 'golf',
      title: 'Golf',
      image: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=300&h=200&fit=crop&crop=center',
      description: 'Precision sport on the green'
    },
    {
      id: 'table-tennis',
      title: 'Table Tennis',
      image: 'https://www.paralympic.org/sites/default/files/images/150413103127066_LON_0109_4685.jpg',
      description: 'Fast-paced indoor sport'
    }
  ];

  const handleHobbyClick = (hobbyId) => {
    navigate(`/hobby/${hobbyId}`);
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-center text-primary mb-5">My Hobbies</h1>
        </Col>
      </Row>
      <Row>
        {hobbies.map((hobby) => (
          <Col key={hobby.id} md={6} lg={3} className="mb-4">
            <Card 
              className="h-100 shadow-sm hover-card" 
              style={{ cursor: 'pointer' }}
              onClick={() => handleHobbyClick(hobby.id)}
            >
              <Card.Img 
                variant="top" 
                src={hobby.image} 
                alt={hobby.title}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="text-center">{hobby.title}</Card.Title>
                <Card.Text className="text-center text-muted">
                  {hobby.description}
                </Card.Text>
                <div className="mt-auto text-center">
                  <small className="text-primary">Click to learn more!</small>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Hobbies;
