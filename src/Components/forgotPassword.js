import React from "react";
import { Link } from "react-router-dom";

export default function ForgotPassword(){
  return (
    <div className="form">
      <center>
        <form>
            <h4>Reset your password</h4>
            <div className="input-container">
                <label>Username: </label>
                <input type="text" name="username" required />
            </div>
            <br/>
            <div className="button-container">
                <Link to="/x"><button type="button">Send reset email</button></Link>
            </div>
        </form>
        <br/>
        </center>
    </div>
  );
};