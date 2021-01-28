import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import pizza1 from '../images/pizza1.jpg';

const Styles = styled.div`
  .jumbo {
    background: url(${pizza1}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 400px;
    position: relative;
    z-index: -2;
  }
  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container> 
        <h1 style = {{margin: "auto", width: "70%"}}>Welcome to Jordan's Homemade Pizza!</h1>
        <div className="introtext" style = {{marginTop:"10%", width: "40%"}}>
          <p>We use only natural ingredients <br></br>to keep the unparalleled flavor <br></br> 
          that y'all love us for!</p>
        </div>
      </Container>
    </Jumbo>
  </Styles>
)