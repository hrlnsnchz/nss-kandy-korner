import React from "react"

export const ProductCard = ({product}) => (
    <section className="produt">
        <h3 className="product__name">
          { product.name }
        </h3>
        <div className="id">ID: {product.id}</div>
        <div className="price">${product.price}.00</div>
        <div className="categoryId">Category ID: {product.productTypeId}</div>
    </section>
)