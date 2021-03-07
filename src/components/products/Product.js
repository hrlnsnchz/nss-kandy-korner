import React from "react"

export const ProductCard = ({product}) => (
    <section className="produt">
        <h3 className="product__name">
          { product.name }
        </h3>
        <div className="price">${product.price}.00</div>
    </section>
)