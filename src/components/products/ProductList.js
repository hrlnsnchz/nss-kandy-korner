import React, { useContext, useEffect } from "react"
import { ProductContext } from "./ProductProvider"
import { ProductCard } from "./Product"
import { ProdTypeContext } from "./ProdTypeProvider"

export const ProductList = () => {
    const { products, getProducts } = useContext(ProductContext)
    const { prodTypes, getProdTypes } = useContext(ProdTypeContext)

    useEffect(() => {
        getProdTypes()
        .then(getProducts)
    }, [])

    return (
        <div className="products">
            {
                products.map(product => {
                    const prodType = prodTypes.find(pT => pT.id === product.productTypeId)
                    return <ProductCard key ={product.id}
                                prodType={prodType}
                                product={product} />
                })
            }
        </div>
    )
}