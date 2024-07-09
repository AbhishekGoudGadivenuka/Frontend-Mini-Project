
import React, { useState, useEffect } from "react";
import "./Home.css";
import Card from "../Card/Card"; 

function Home() {
  const [prod, setProd] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((product) => setProd(product));
  }, []);
  const filteredProducts = prod.filter((product) =>
    product.title.toLowerCase().includes(searchInput.toLowerCase())
  );
  console.log(filteredProducts)
  return (
    <div className="maincontainer">
      <div className="textfield">
        <input
          type="text"
          className="textfieldbar"
          placeholder="Search Products"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <div className="input-group-append">
          <button className="btn bot" type="button">
            Search
          </button>
        </div>
      </div>
      <div className="mainfield">
        <div className="container">
          <div className="row">
            {/* Map over the filtered products */}
            {filteredProducts.map((product) => (
              <div key={product.id} className="col-sm-10 col-md-5 col-lg-3">
                <Card product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
