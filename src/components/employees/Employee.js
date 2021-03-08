import React from "react"

export const EmployeeCard = ({employee, location}) => (
    <section className="employee">
        <h3 className="employee__name">
          { employee.name }
        </h3>
        <div className="employee__location">{location.address}</div>
        <div className="employee__status">Full time? {employee.fullTime? "Yes": "No" }</div>
        <div className="id">Manager? {employee.manager? "Yes" : "No"}</div>
        <div className="price">Hourly Rate: ${employee.hourlyRate}.00</div>
    </section>
)

// {animalId ? "Save Animal" : "Add Animal"}