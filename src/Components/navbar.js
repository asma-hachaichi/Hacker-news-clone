import React from "react";
import "./../CSS/navbar.css"
import logo from "../Images/logo.png";
import { Link } from "react-router-dom";
import {Col, Row, Container} from 'react-grid-system';

export default function NavBar(){
  return (
    <Container>
      <Row className="navbar">
        <Col sm={2} className="menu">
          <img src={logo} alt="logo"/>
          <h4>Hacker News</h4>
        </Col>
        <Col sm={8}>
            <ul className="nav-links">
              <Link className="nav-link" to="/top">Top Stories</Link>|
              <Link className="nav-link" to="/newest">New Stories</Link>
            </ul>
        </Col>
        <Col sm={2} className="login"><Link to="/login">Login</Link></Col>
      </Row>
    </Container>
  );
};
