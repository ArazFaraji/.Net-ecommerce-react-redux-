import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Catalog from "../../features/catalog/Catalog";
import { Product } from "../models/product";

const products = []

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  // adding ,[] at the end as a dependecy ensure it is only called once as opposed to everytime the component renders or re-renders.
  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])

  // ...products is a spread operator, pulls in existing state (products array) and it spreads it into a new array that is being created with addProduct. 
  function addProduct() {
    setProducts(prevState => [...products, 
      {
        id: prevState.length + 101,
        name: 'product ' + (prevState.length + 1), 
        price: (prevState.length * 100) + 100,
        brand: 'some brand',
        description: 'some description',
        pictureUrl: 'http//picsum.photos/200'
      }])
  }

  return (
    <>
      <Typography variant='h1'>King Clothing</Typography>
      <Catalog products={products} addProduct={addProduct}/>
    </>
  );
}

export default App;
