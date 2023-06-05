import React from "react";
import styles from "../components/Home.module.css";
import { Form } from "react-router-dom";

export const Home = () => {
    return(
        <div className={`${styles.HomePage}`}>
        <h1 className={`${styles.head}`}>Control Your <span className={`${styles.colorText}`}>Money.</span></h1>
        <h2 className={`${styles.head1}`}>Save it. Spend it. Manage it.</h2>
        <p className={`${styles.head2}`}>Start your personal budgeting journey with us.</p>
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