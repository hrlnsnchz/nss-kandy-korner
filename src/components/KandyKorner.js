import React from "react"
import { Route } from "react-router-dom"
import { LocationList } from "./locations/LocationList"
import { LocationProvider } from "./locations/LocationProvider"

export const KandyKorner = () => (
    <>
        <LocationProvider>
                <LocationList />
        </LocationProvider>
    </>
)