import React, { createContext, useState } from "react"

export const ProdTypeContext = createContext()

export const ProdTypeProvider = (props) => {
    const [prodTypes, setProdTypes] = useState([])

    const getProdTypes = () => {
        return fetch("http://localhost:8088/productTypes")
        .then(res => res.json())
        .then(setProdTypes)
    }

    return (
        <ProdTypeContext.Provider value={{
            prodTypes, getProdTypes
        }}>
            {props.children}
        </ProdTypeContext.Provider> 
    )
}