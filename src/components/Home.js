import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link to="/add-cart">
        <button type="button" class="btn btn-primary">
          Add Cart
        </button>
      </Link>
      <Link to="/view">
        <button type="button" class="btn btn-secondary">
          Add View
        </button>
      </Link>
      <Link to="/add-bond">
        <button type="button" class="btn btn-success">
          Add Bond
        </button>
      </Link>
      <Link to="/view-investment">
        <button type="button" class="btn btn-info">
          Make Investment
        </button>
      </Link> 
    </div>
  );
}

export default Home;
