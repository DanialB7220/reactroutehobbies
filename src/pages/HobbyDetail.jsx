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
      description: 'I love watching UFC fights and mixed martial arts competitions. The combination of different fighting styles, the strategy, and the athleticism of the fighters makes it incredibly exciting to watch.',
      details: [
        'Follow major UFC events and pay-per-views',
        'Enjoy analyzing different fighting techniques and strategies',
        'Appreciate the dedication and training of professional fighters',
        'Watch both current fights and classic matches from the past'
      ],
      why: 'UFC combines multiple martial arts disciplines and showcases incredible athleticism and strategy. Each fight is unique and unpredictable, making it thrilling to watch.'
    },
    pickleball: {
      title: 'Pickleball',
      image: 'https://media.istockphoto.com/id/2023549916/photo/pickleball-racket-and-ball.jpg?s=612x612&w=0&k=20&c=dntQPaXY22GtnKWZYdcxQsmFkFPrgduman4KjLmbtI8=',
      description: 'Pickleball is a fun and fast-paced paddle sport that combines elements of tennis, badminton, and ping pong. It\'s easy to learn but challenging to master.',
      details: [
        'Play both singles and doubles matches',
        'Enjoy the social aspect of the game',
        'Appreciate the quick reflexes and strategy required',
        'Love the accessibility for players of all ages and skill levels'
      ],
      why: 'Pickleball is a great way to stay active while having fun. It\'s social, easy to pick up, and provides a great workout without being too physically demanding.'
    },
    golf: {
      title: 'Golf',
      image: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=600&h=400&fit=crop&crop=center',
      description: 'Golf is a precision sport that challenges both physical skill and mental focus. It\'s a great way to enjoy nature while working on technique and strategy.',
      details: [
        'Play on various courses and enjoy the beautiful landscapes',
        'Focus on improving swing technique and putting',
        'Appreciate the mental challenge and concentration required',
        'Enjoy the social aspect of playing with friends'
      ],
      why: 'Golf is a sport that can be enjoyed for a lifetime. It combines physical skill with mental strategy and provides a peaceful way to spend time outdoors.'
    },
    'table-tennis': {
      title: 'Table Tennis',
      image: 'https://www.paralympic.org/sites/default/files/images/150413103127066_LON_0109_4685.jpg',
      description: 'Table tennis, also known as ping pong, is a fast-paced indoor sport that requires quick reflexes, precision, and strategic thinking.',
      details: [
        'Play both recreational and competitive matches',
        'Enjoy the fast-paced nature of the game',
        'Appreciate the technical skills and spin techniques',
        'Love the quick rallies and exciting points'
      ],
      why: 'Table tennis is an excellent way to improve hand-eye coordination and reflexes. It\'s also a great indoor activity that can be played year-round.'
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
