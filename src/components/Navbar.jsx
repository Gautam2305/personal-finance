import React from "react";
import styles from "../components/Navbar.module.css";
import { Form, NavLink } from "react-router-dom";
import {FaHome, FaTrash} from 'react-icons/fa'

export const Navbar = ({userName}) => {
    // const confirmDelete = confirm("Delete all user data?");
    return(
        <div className={`${styles.navMain}`}>
            <div className={`${styles.navlinks}`}>
                <h1 className="ms-5" style={{
                    color: "black",
                    fontWeight: '700',
                    fontFamily: 'Poppins, sans-serif'}}>Money<span style={{color:'rgb(20,131,239)'}}>Minder</span></h1>
        </div>
        <div style={{
            display: 'flex',
            flexFlow: 'row wrap'
        }}>
        <div className={`${styles.navlink} ms-auto`}>
        <NavLink style={{textDecoration:'none',color:'white',fontFamily:'Poppins,sans-serif'}}><FaHome className="ctr"/> Home</NavLink>
        </div>
        <div>
        { userName && (
            <Form
            className={`${styles.delForm}`}
            method="post"
            action="/logout"
            >
                <button type="submit" className={`${styles.delBtn}`}> <FaTrash className="ctr1" /> Delete user </button>
            </Form>
        )}
        </div>
        </div>
       
        </div>
    )
}