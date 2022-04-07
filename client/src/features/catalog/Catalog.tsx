import { useState, useEffect } from "react";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";

export default function Catalog() {
    const [products, setProducts] = useState<Product[]>([]);

    // adding ,[] at the end as a dependecy ensure it is only called once as opposed to everytime the component renders or re-renders.
    useEffect(() => {
        fetch("http://localhost:5000/api/products")
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <>
            <ProductList products={products}/>
        </>
    )
}