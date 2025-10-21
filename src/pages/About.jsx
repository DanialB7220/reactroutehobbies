import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';

const About = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow">
            <Card.Body className="p-5">
              <Row>
                <Col>
                  <Card.Title as="h1" className="text-primary mb-3 text-center">
                    About Me
                  </Card.Title>
                  <Card.Text className="lead mb-4 text-center">
                    Hello! I'm Danial A. Bhatti, a Computer Science student at Pace University with a passion for 
                    software engineering, AI, and full-stack development. This React application showcases some of 
                    my favorite hobbies and interests outside of coding.
                  </Card.Text>
                </Col>
              </Row>
              
              <hr className="my-4" />
              
              <Row>
                <Col md={6}>
                  <h4 className="text-primary mb-3">Personal Information</h4>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <strong>Name:</strong> Danial A. Bhatti
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Location:</strong> New York City, NY
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Education:</strong> B.S. Computer Science, Pace University (Expected May 2026)
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>CGPA:</strong> 3.62/4.0
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Interests:</strong> Software Engineering, AI/ML, Full-Stack Development
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
                <Col md={6}>
                  <h4 className="text-primary mb-3">Technical Skills</h4>
                  <ListGroup variant="flush">
                    <ListGroup.Item><strong>Languages:</strong> JavaScript, TypeScript, Python, Java, SQL, R, C++</ListGroup.Item>
                    <ListGroup.Item><strong>Frameworks:</strong> React, Node.js, Express.js, TensorFlow, LangChain.js</ListGroup.Item>
                    <ListGroup.Item><strong>Databases:</strong> MongoDB, PrismaDB, Pinecone</ListGroup.Item>
                    <ListGroup.Item><strong>Cloud & Tools:</strong> GCP, Docker, CI/CD, Git, REST APIs</ListGroup.Item>
                    <ListGroup.Item><strong>AI/ML:</strong> Machine Learning, Deep Learning, RAG Pipelines</ListGroup.Item>
                  </ListGroup>
                </Col>
              </Row>
              
              <hr className="my-4" />
              
              <Row>
                <Col>
                  <h4 className="text-primary mb-3">Professional Experience</h4>
                  <Card.Text>
                    I have gained valuable experience through multiple software engineering internships:
                  </Card.Text>
                  <ul>
                    <li><strong>KLYR Media (Software Engineer Intern):</strong> Built ML models using Python, TensorFlow, and scikit-learn. Developed full-stack tools with React, Node.js, and REST APIs, improving efficiency by 40%.</li>
                    <li><strong>StudyFetch (Software Engineer Intern):</strong> Developed 3 full-stack AI-powered educational tools using MERN stack, serving 5000+ students. Built generative AI tutoring platform with LangChain.js and RAG pipelines.</li>
                    <li><strong>Total Construction Corporation (Software Engineer Intern):</strong> Delivered full-stack MERN implementations deployed on GCP. Increased client outreach efficiency by 90% through web integrations and automation.</li>
                  </ul>
                  
                  <h4 className="text-primary mb-3 mt-4">Leadership & Projects</h4>
                  <Card.Text>
                    I co-founded the Software Engineering Club at Pace University, organizing 10+ technical workshops and increasing engagement by 200%. 
                    My notable projects include SwftT (ticketing platform), Food Recognition AI Model, and All In One GPT (AI SaaS platform).
                  </Card.Text>
                  
                  <h4 className="text-primary mb-3 mt-4">About This Project</h4>
                  <Card.Text>
                    This React application demonstrates my skills with React Router v6, React Bootstrap, and modern React development practices. 
                    It showcases my hobbies including UFC watching, Pickleball, Golf, and Table Tennis, each with detailed information pages.
                  </Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
