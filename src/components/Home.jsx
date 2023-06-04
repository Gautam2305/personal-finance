import React from "react";
import styles from "../components/Home.module.css";
import { Form } from "react-router-dom";

export const Home = () => {
    return(
        <div className={`${styles.HomePage}`}>
        <h1>Control Your Money</h1>
        <h2>Save it. Spend it. Manage it.</h2>
        <p>Start your personal budgeting journey with us.</p>
        <Form method="post" className={`${styles.form}`}>
            <input 
            type="text" 
            name="userName"
            placeholder="Enter your name"
            autoComplete="given-name" 
            required 
            className={`${styles.Input}`}
             />
            <input type="hidden" name="_action" value="newUser" />
            <button type="submit" className={`${styles.createBtn}`}>Create Account</button>
        </Form>
        </div>
    )
}