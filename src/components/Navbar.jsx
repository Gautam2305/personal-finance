import React from "react";
import styles from "../components/Navbar.module.css";
import { Form, NavLink } from "react-router-dom";

export const Navbar = ({userName}) => {
    // const confirmDelete = confirm("Delete all user data?");
    return(
        <>
        <div className={`${styles.navlinks}`}>
        <div className={`${styles.navlink}`}>
        <NavLink style={{textDecoration:'none',color:'white'}}>Home</NavLink>
        </div>
        { userName && (
            <Form
            className={`${styles.navlink}`}
            method="post"
            action="/logout"
            >
                <button type="submit" className={`${styles.delBtn}`}>Delete user</button>
            </Form>
        )}
        </div>
       
        </>
    )
}