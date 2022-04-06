import { Product } from "../../app/models/product";

interface Props {
    products: Product[];
    addProduct: () => void;
}


// export default function Catalog(props: Props) {
    // Re-write the above and destructure what is needed by changing it to the below
export default function Catalog({products, addProduct}: Props) {
    return (
        <>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>{product.name} - {product.price}</li>
                ))}
            </ul>
            <button onClick={addProduct}>Add Product</button>
        </>
    )
}