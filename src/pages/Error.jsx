import React from "react";
import { useRouteError } from "react-router";
import { Link } from "react-router-dom";

export const Error = () => {
    const error = useRouteError();

    return(
        <div>
            <h1>Oops! We got a problem.</h1>
            <p>{error.message || error.statusText}</p>
            <div>
                <Link to="/">Home </Link>
            </div>
        </div>
    )
}