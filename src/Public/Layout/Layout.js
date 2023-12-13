import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";

export default function Layout(){
    return(
        <>
            <Outlet />
        </>
        )
}