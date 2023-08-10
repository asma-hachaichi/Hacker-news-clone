import React from "react";
import "./../CSS/footer.css";
import { Link } from "react-router-dom";
import { Container} from 'react-grid-system';

export default function Footer() {
    return (
      <Container className="footer">
        <div className="line"></div>
        <center>
            <ul className="menu-links">
                <Link className="menu-link" to="/newest">Guidelines</Link>|
                <Link className="menu-link" to="/newest">FAQ</Link>|
                <Link className="menu-link" to="/newest">Lists</Link>|
                <Link className="menu-link" to="https://github.com/HackerNews/API">API</Link>|
                <Link className="menu-link" to="/newest">Security</Link>|
                <Link className="menu-link" to="/newest">Legal</Link>|
                <Link className="menu-link" to="/newest">Apply to YC</Link>|
                <Link className="menu-link" to="/newest">Contact</Link>
            </ul>
        </center>
        <div className="input-container">
            <label>Search: </label>
            <input type="text" name="search" required />
        </div>
      </Container>
    );
  }