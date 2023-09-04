import React, { useEffect, useState } from 'react'
import Product from '../Components/Product'
import Loading from '../Components/Loading';
import FilterButtons from '../Components/FilterButtons';

const Products = () => {
  const classes = "lg:w-1/4 md:w-1/2 w-full";

  const [originalProducts, setOriginalProducts] = useState([]); // Store the original product list
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchProducts = async () => {
    let url = "https://fakestoreapi.com/products";
    try {
      const res = await fetch(url);
      const data = await res.json();
      setOriginalProducts(data); // Set the original product list
      setProducts(data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleClick = (category) => {
    if (category === "All") {
      setProducts(originalProducts); // Reset to the original product list
    } else {
      const filterProducts = originalProducts.filter(
        (product) => product.category === category
      );
      setProducts(filterProducts);
    }
  };

  if (isLoading) {
    return (
      <div className="flex container mx-auto flex-wrap " style={{ minHeight: "90vh" }}>
        <Loading className={classes} />
        <Loading className={classes} />
        <Loading className={classes} />
        <Loading className={classes} />
      </div>
    );
  }

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <FilterButtons handleClick={handleClick} />
          <div className="flex flex-wrap -m-4">
            {products.map((product) => {
              return <Product key={product.id} product={product} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
