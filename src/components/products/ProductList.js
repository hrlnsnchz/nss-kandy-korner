import React, { useContext, useState, useEffect } from "react"
import { ProductContext } from "./ProductProvider"
import { ProductCard } from "./Product"

export const ProductList = () => {
    const { products, getProducts } = useContext(ProductContext)

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <div className="products">
            {
                products.map(product => {
                    return <ProductCard key ={product.id}
                                product={product} />
                })
            }
        </div>
    )
}