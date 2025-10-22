import React from 'react';
import { Card } from 'react-bootstrap';
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
    <div className="hobbies-container">
      <h1 className="hobbies-title">My Hobbies</h1>
      <div className="hobbies-grid">
        {hobbies.map((hobby) => (
          <Card 
            key={hobby.id}
            className="hobby-card" 
            style={{ cursor: 'pointer' }}
            onClick={() => handleHobbyClick(hobby.id)}
          >
            <Card.Img 
              variant="top" 
              src={hobby.image} 
              alt={hobby.title}
              className="hobby-image"
            />
            <Card.Body className="hobby-card-body">
              <Card.Title className="hobby-title">{hobby.title}</Card.Title>
              <Card.Text className="hobby-description">
                {hobby.description}
              </Card.Text>
              <div className="hobby-footer">
                <small className="text-primary">Click to learn more!</small>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Hobbies;
