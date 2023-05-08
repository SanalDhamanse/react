import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="jumbotron">
      <h1>HomePage</h1>
      <p> Web page with redux and webPack</p>
      <Link to="/about" className="btn btn-primary btn-lg">
        Learn more
      </Link>
    </div>
  );
}
