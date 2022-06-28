import React from "react";
import { Component } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Profile extends Component {

  render() {
    /* TODO: render information about the developers */
    return (
      <>
        <div className='d-flex flex-wrap'>
          <Card style={{ width: '18rem' }} className='h-100 card-container'>
            <Card.Img variant="top" src="./images/about-us-elaine.jpeg" />
            <Card.Body>
              <Card.Title>Elaine Huynh</Card.Title>
              <Card.Text>
                Hello! My name is Elaine Huynh, I am a critical care nurse in the process of finding a new career as a software engineer. Having graduated from Seattle Pacific University in 2020, I continued my education at Bellevue College to gain a foundation in Java. Currently, I am a student at Code Fellows working on front-end development, and soon to be designing full-stack web applications.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="./images/Stephen.jpeg" />
            <Card.Body>
              <Card.Title>Stephen Martinez</Card.Title>
              <Card.Text>
                Hello, my name is Stephen Martinez.  Before my journey here at Code Fellows, I was in the security industry.  Most recently I worked for Highline School District where I was a safety and security officer as well as a high school baseball and wrestling coach.  I was injured on the job and it got me thinking of what I could do while I was at home healing.  A family member told me I should look into what he does, which is software development.  I was very interested and when he showed me what he does and what he creates, I was hooked.  Ideally, I'd like to work in an environment where I'm helping people with the new skills that I'm learning.  I think my drive to help the people around me and my work ethic will set me in the right direction in my goals to becoming a successful Developer.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </>
    )
  }
};

export default Profile;
