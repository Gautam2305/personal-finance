import React from "react";
import { Form, NavLink } from "react-router-dom";

export const Navbar = ({userName}) => {
    // const confirmDelete = confirm("Delete all user data?");
    return(
        <>
        <NavLink>Home button</NavLink>
        { userName && (
            <Form
            method="post"
            action="/logout"
            >
                <button type="submit">Delete user</button>
            </Form>
        )}
        </>
    )
}