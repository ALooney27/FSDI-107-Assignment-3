import Product from "../components/product";
import DataService from "../services/dataServices";
import "./catalog.css";
import { useEffect, useState } from "react";

function Catalog() {
  const [products, setProducts] = useState([]);
  // when the component loads --> do something

  useEffect(function () {
    console.log("component loaded");
    loadCatalog();
  }, []);

  function loadCatalog() {
    //get the products from the serice
    let service = new DataService();
    let prods = service.getProducts();
    console.log(prods);
    setProducts(prods);
  }
  // when the product component is loaded
  //console.log "Hello I am a product"

  return (
    <div className="catalog">
      <h1>Check out our {products.length} new products in our catalog</h1>
      <br />
      {products.map((p) => (
        <Product data={p} />
      ))}
    </div>
  );
}
//create a product component and render the quantity picker inside of the product component
//render the <Product> component 5 times into the Catalog.

export default Catalog;
