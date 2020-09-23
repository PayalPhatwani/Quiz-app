import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, ButtonGroup, Col, Container, Jumbotron, Progress, Row } from "reactstrap";
import "./App.css";

function Quiz() {
  const Questions = [
    {
      question: "What is Reactjs?",
      answers: [
        { answerText: "Server-side Framework", iscorrect: false },
        { answerText: "User-interface", iscorrect: false },
        { answerText: "Both", iscorrect: true },
        { answerText: "None", iscorrect: false },
      ],
    },
    {
      question: "What are the limitations of ReactJS?",
      answers: [
        {
          answerText:
            "React is only for view layer of the app so we still need the help of other technologies to get a complete tooling set for development",
          iscorrect: false,
        },
        {
          answerText:
            "React is using inline templating and JSX. This can seem awkward to some developers",
          iscorrect: false,
        },
        { answerText: "The library of react is too large", iscorrect: false },
        { answerText: "All of these", iscorrect: true },
      ],
    },
    {
      question:
        "How can you access the state of a component from inside of a member function?",
      answers: [
        { answerText: "this.getState()", iscorrect: false },
        { answerText: " this.prototype.stateValue", iscorrect: false },
        { answerText: "this.state", iscorrect: true },
        { answerText: "this.values", iscorrect: false },
      ],
    },
    {
      question:
        "Which of the following API is a MUST for every ReactJS component?",
      answers: [
        { answerText: "getInitialState", iscorrect: false },
        { answerText: "render", iscorrect: false },
        { answerText: "renderComponent", iscorrect: true },
        { answerText: "None", iscorrect: false },
      ],
    },
    {
      question:
        "At the highest level, React components have lifecycle events that fall into",
      answers: [
        { answerText: "Initialization", iscorrect: false },
        { answerText: "State/Property Updates", iscorrect: false },
        { answerText: "Destruction", iscorrect: false },
        { answerText: "All of these", iscorrect: true },
      ],
    },
  ];

  const [currentQuestion, setcurrentQuestion] = useState(0);
  const [showScore, setshowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [incorrect, setincorrect] = useState(0);
  
  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
       setScore(score + 1);
       
    }else{
      setincorrect(incorrect+1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < Questions.length) {
      setcurrentQuestion(nextQuestion);
    } else {
      setshowScore(true);
      
    }
  };

  return (
    <Container className="p-5 my-5">
      {showScore ? (
        <Jumbotron>
          <Progress multi>
            <Progress
              animated
              bar
              color="success"
              value={(score / Questions.length) * 100}
            >
              {(score / Questions.length) * 100}% correct
            </Progress>

            <Progress animated bar color="danger" value={incorrect/Questions.length*100}>
              {incorrect/Questions.length*100}% Incorrect
            </Progress>
          </Progress>
          <h1 className="display-3">
            {" "}
            You scored {score} out of {Questions.length}
            <p className="lead text-center">
              <Link className=" btn btn-dark" to="/">
                Take the Quiz again
              </Link>
            </p>
          </h1>
        </Jumbotron>
      ) : (
        <Container className="col-sm-8 border-top border-bottom  border-primary">
          <Row className="bg-white p-5 ">
            <Col>
              <h2 className="font-weight-bold  text-info">
                Question {currentQuestion + 1}/{Questions.length}
              </h2>
              <h5 className="text-info">
                {Questions[currentQuestion].question}
              </h5>
            </Col>
            <Col>
              <ButtonGroup vertical>
                {Questions[currentQuestion].answers.map((option) => (
                  <Button
                    color="white"
                    className="border btn btn-outline-info"
                    onClick={() => handleAnswerOptionClick(option.iscorrect)}
                  >
                    {option.answerText}
                  </Button>
                ))}
              </ButtonGroup>
            </Col>
          </Row>
        </Container>
      )}
    </Container>
  );
}

export default Quiz;
