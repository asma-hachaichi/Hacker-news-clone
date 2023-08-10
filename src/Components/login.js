import React from "react";
import { Link } from "react-router-dom";

export default function Login(){
  return (
    <div className="form">
        <center>
            <form>
                <h4>Login</h4>
                <div className="input-container">
                    <label>Username: </label>
                    <input type="text" name="username" required />
                </div>
                <div className="input-container">
                    <label>Password: </label>
                    <input type="password" name="password" required />
                </div>
                <br/>
                <div className="button-container">
                    <input type="submit" />
                </div>
                <br/>
            </form>
            <Link to="/forgot">Forgot your password?</Link>
            <br/>
            <form>
                <h4>Create account</h4>
                <div className="input-container">
                    <label>Username: </label>
                    <input type="text" name="username" required />
                </div>
                <div className="input-container">
                    <label>Password: </label>
                    <input type="password" name="password" required />
                </div>
                <br/>
                <div className="button-container">
                    <input type="submit" />
                </div>
            </form>
            <br/>
        </center>
    </div>
  );
};