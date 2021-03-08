import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./locations/LocationProvider"
import { LocationList } from "./locations/LocationList"
import { ProductProvider } from "./products/ProductProvider"
import { ProductList } from "./products/ProductList"
import { ProdTypeProvider } from "./products/ProdTypeProvider"
import { EmployeeProvider } from "./employees/EmployeeProvider"
import { EmployeeList } from "./employees/EmployeeList"

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
                <LocationProvider>
                        <Route exact path="/locations">
                            <LocationList />
                        </Route>
                </LocationProvider>
                <ProductProvider>
                    <ProdTypeProvider>
                        <Route exact path="/products">
                            <ProductList />
                        </Route>
                    </ProdTypeProvider>
                </ProductProvider>
                <EmployeeProvider>
                    <LocationProvider>
                        <Route exact path="/employees">
                            <EmployeeList />
                        </Route>
                    </LocationProvider>
                </EmployeeProvider>
                
        </>
    )
}