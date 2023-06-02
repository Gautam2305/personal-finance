import React from "react";
import { Outlet, useLoaderData } from "react-router";
import { fetchData } from "../utils/data-fetch";
import { Navbar } from "../components/Navbar";
export const mainLoader = () => {
    const userName = fetchData("userName");
    return {userName};
}

export const MainLayout = () => {
    const {userName} = useLoaderData()
    return(
        <>
            <Navbar userName={userName}/>
        <main>
            <Outlet/>
        </main>
        </>
    )
}