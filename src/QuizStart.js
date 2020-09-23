import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Button, Container, Jumbotron } from 'reactstrap';

export default class QuizStart extends Component {
    render() {
        return (
          
            <Container className="text-center">
              <Jumbotron className="my-4">
                <h1 className="display-3">React Quiz </h1>
                <p className="lead">
                  There will be Mcq(Multiple Choice Questions) based on the basics of React
                  
                </p>
                <hr className="my-2" />
                <p>
                 There will be +1 on each correct answer, no negative marking on incorrect answer.
                </p>
                <p className="lead">
                        <Link className=" btn btn-dark" to="/Quiz">Start the Quiz</Link>

                </p>
              </Jumbotron>
            </Container>
         
        );
    }
}
