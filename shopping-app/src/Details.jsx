import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import useFetch from "./services/useFetch";
import Spinner from "./Spinner";
import PageNotFound from "./PageNotFound";

export default function Detail({ addToCart }) {
  const { id } = useParams();
  const [sku, setSku] = useState("");

  const {
    data: product, // alias of data as product
    loading,
    error,
  } = useFetch(`products/${id}`);
  const navigate = useNavigate();

  if (loading) return <Spinner />;
  if (product.length === 0) return <PageNotFound />;
  if (error) throw error;

  return (
    <div id="detail">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p id="price">${product.price}</p>

      <select id="size" value={sku} onChange={(e) => setSku(e.target.value)}>
        <option value="">What size?</option>
        {product.skus.map((s) => (
          <option key={s.sku} value={s.sku}>
            {s.size}{" "}
          </option>
        ))}
      </select>

      <p>
        <button
          disabled={!sku}
          className="btn btn-primary"
          onClick={() => {
            addToCart(id, sku);
            navigate("/cart");
          }}
        >
          Add to cart{" "}
        </button>
      </p>
      <img src={`/images/${product.image}`} alt={product.category} />
    </div>
  );
}
