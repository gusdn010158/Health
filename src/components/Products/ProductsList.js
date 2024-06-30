import { React, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./ProductsList.css";

function ProductsList() {
  const [products, setProducts] = useState([]);
  const { apipoint } = useParams();
  useEffect(() => {
    fetch(`http://localhost:4000/${apipoint}`)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, [apipoint]);

  return (
    <div className="ProductsList">
      <div className="shopping_main">
        <div className="shopping_1">
          {products.map((product) => (
            <div className="main_1" key={product.id}>
              <Link
                to={`/Products/${apipoint}/${product.id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <img
                  className="main1_img"
                  src={product.img}
                  alt={product.name}
                />
                <div className="main1_text">
                  <h3>{product.name}</h3>
                  가격: {product.price}원
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductsList;
