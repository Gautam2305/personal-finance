import React from "react";
import { Form } from "react-router-dom";

export const Home = () => {
    return(
        <div>
        <h1>Control Your Money</h1>
        <h2>Save it. Spend it. Manage it.</h2>
        <p>Start your personal budgeting journey with us.</p>
        <Form method="post">
            <input 
            type="text" 
            name="userName"
            placeholder="Enter your name"
            autoComplete="given-name" 
            required  />
            <input type="hidden" name="_action" value="newUser" />
            <button type="submit">Create Account</button>
        </Form>
        </div>
    )
}