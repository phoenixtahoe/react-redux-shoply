import React from "react";
import { useSelector } from "react-redux";

import Product from "./Product"

function ProductList() {
    const products = useSelector(store => store.products);
    const itemList = Object.keys(products).map(e => (
        <Product 
            id={e}
            name={products[e].name}
            price={products[e].price}
            description={products[e].description}
            image_url={products[e].image_url}
        />
    ))
    
    return (
        <div className="container my-5">
            <h2>Product List</h2>
            <div className="m-5">
                {itemList}
            </div>
        </div>
    )
}

export default ProductList