import React, { useContext, useEffect } from "react"
import { LocationContext } from "../locations/LocationProvider"
import { EmployeeCard } from "./Employee"
import { EmployeeContext } from "./EmployeeProvider"

export const EmployeeList = () => {
    const { employees, getEmployees } = useContext(EmployeeContext)
    const { locations, getLocations } = useContext(LocationContext)

    useEffect(() => {
        getLocations()
        .then(getEmployees)
    }, [])

    return (
        <div className="employees">
            {
                employees.map(employee => {
                    const location = locations.find(loc => loc.id === employee.locationId)
                    return <EmployeeCard key ={employee.id}
                                location={location}
                                employee={employee} />
                })
            }
        </div>
    )
}