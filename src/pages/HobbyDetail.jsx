import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';

const HobbyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const hobbyDetails = {
    ufc: {
      title: 'Watching UFC',
      image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=600&h=400&fit=crop&crop=center',
      description: 'I love watching UFC fights. The action is crazy and you never know what will happen.',
      details: [
        'Watch all the UFC events',
        'Love seeing different fighting styles',
        'My top 3 favorite fighters:',
        '• Khabib Nurmagomedov (29-0) - The Eagle, undefeated champ with amazing wrestling',
        '• Islam Makhachev (25-1) - Current lightweight champ, Khabib\'s teammate',
        '• Dustin Poirier (29-8) - The Diamond, always puts on exciting fights'
      ],
      why: 'UFC is just awesome. Every fight is different and the fighters are so skilled. It is the best sport to watch.'
    },
    pickleball: {
      title: 'Pickleball',
      image: 'https://media.istockphoto.com/id/2023549916/photo/pickleball-racket-and-ball.jpg?s=612x612&w=0&k=20&c=dntQPaXY22GtnKWZYdcxQsmFkFPrgduman4KjLmbtI8=',
      description: 'Pickleball is like tennis but easier and more fun. It is super addictive once you start playing.',
      details: [
        'Play singles and doubles',
        'Great way to meet people',
        'Quick games and fast action',
        'Anyone can play, young or old'
      ],
      why: 'Pickleball is just fun. You get exercise without even realizing it and the games are always exciting.'
    },
    golf: {
      title: 'Golf',
      image: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=600&h=400&fit=crop&crop=center',
      description: 'Golf is relaxing and frustrating at the same time. One good shot makes you forget all the bad ones.',
      details: [
        'Play on different courses',
        'Try to improve my swing',
        'Enjoy being outside',
        'Play with friends'
      ],
      why: 'Golf is peaceful and you get to be outside. Plus it is a game you can play your whole life.'
    },
    'table-tennis': {
      title: 'Table Tennis',
      image: 'https://www.paralympic.org/sites/default/files/images/150413103127066_LON_0109_4685.jpg',
      description: 'Table tennis is ping pong but more serious. It is super fast and you need quick reflexes.',
      details: [
        'Play for fun and competition',
        'Love the fast rallies',
        'Try different spins and shots',
        'Great indoor sport'
      ],
      why: 'Table tennis is fast and exciting. It helps with hand eye coordination and you can play it inside anytime.'
    }
  };

  const hobby = hobbyDetails[id];

  if (!hobby) {
    return (
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <Card className="text-center">
              <Card.Body>
                <Card.Title>Hobby Not Found</Card.Title>
                <Card.Text>The hobby you're looking for doesn't exist.</Card.Text>
                <Button variant="primary" onClick={() => navigate('/hobbies')}>
                  Back to Hobbies
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={10}>
          <Card className="shadow">
            <Row className="g-0">
              <Col md={6}>
                <Card.Img 
                  src={hobby.image} 
                  alt={hobby.title}
                  style={{ height: '100%', objectFit: 'cover' }}
                />
              </Col>
              <Col md={6}>
                <Card.Body className="p-4">
                  <Card.Title as="h1" className="text-primary mb-3">
                    {hobby.title}
                  </Card.Title>
                  <Card.Text className="lead mb-4">
                    {hobby.description}
                  </Card.Text>
                  
                  <h5 className="text-primary mb-3">What I Do:</h5>
                  <ul className="mb-4">
                    {hobby.details.map((detail, index) => (
                      <li key={index} className="mb-2">{detail}</li>
                    ))}
                  </ul>
                  
                  <h5 className="text-primary mb-3">Why I Love It:</h5>
                  <Card.Text className="mb-4">
                    {hobby.why}
                  </Card.Text>
                  
                  <div className="d-flex gap-2">
                    <Button 
                      variant="outline-primary" 
                      onClick={() => navigate('/hobbies')}
                    >
                      Back to Hobbies
                    </Button>
                    <Button 
                      variant="primary" 
                      onClick={() => navigate('/')}
                    >
                      Go Home
                    </Button>
                  </div>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HobbyDetail;
