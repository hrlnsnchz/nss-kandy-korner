import React from "react"
import { Route } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"
import "./KandyKorner.css"

export const KandyKorner = () => (
    <>
        <Route>
            <NavBar />
            <ApplicationViews />
        </Route>
    </>
)