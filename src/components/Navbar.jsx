import React from "react";
import styles from "../components/Navbar.module.css";
import { Form, NavLink } from "react-router-dom";
import {FaHome, FaTrash} from 'react-icons/fa'

export const Navbar = ({userName}) => {
    // const confirmDelete = confirm("Delete all user data?");
    return(
        <>
            <div className={`${styles.navlinks}`}>
                <h1 className="ms-5" style={{color: "white"}}>MoneyMinder</h1>
        <div className={`${styles.navlink} ms-auto`}>
        <NavLink style={{textDecoration:'none',color:'white'}}><FaHome className="ctr"/> Home</NavLink>
        </div>
        { userName && (
            <Form
            className={`${styles.navlink}`}
            method="post"
            action="/logout"
            >
                <button type="submit" className={`${styles.delBtn}`}> <FaTrash className="ctr1" /> Delete user</button>
            </Form>
        )}
        </div>
       
        </>
    )
}