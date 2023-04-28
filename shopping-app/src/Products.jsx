import React, { useState } from "react";
import Spinner from "./Spinner";

import useFetch from "./services/useFetch";
import { Link, useParams } from "react-router-dom";
import PageNotFound from "./PageNotFound";

export default function Products() {
  const [size, setSize] = useState("");
  const { category } = useParams();

  const {
    data: products, // alias of data as product
    error,
    loading,
  } = useFetch(`products?category=${category}`);

  function renderProduct(p) {
    return (
      <div key={p.id} className="product">
        <Link to={`/${category}/${p.id}`}>
          <img src={`/images/${p.image}`} alt={p.name} />
          <h3>{p.name}</h3>
          <p>${p.price}</p>
        </Link>
      </div>
    );
  }

  const filterProducts = size
    ? products.filter((product) => {
        return product.skus.find((s) => s.size === parseInt(size));
      })
    : products;

  if (error) throw error;
  if (loading) return <Spinner />;
  if (filterProducts.length === 0) return <PageNotFound />;

  return (
    <>
      <section id="filters">
        <label htmlFor="size">Filter by Size:</label>{" "}
        <select
          id="size"
          onChange={(e) => {
            setSize(e.target.value);
          }}
        >
          <option value="">All size</option>
          
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
        </select>
      </section>
      {size && <h2>Found {filterProducts.length} items </h2>}
      <section id="products">{filterProducts.map(renderProduct)}</section>
    </>
  );
}
