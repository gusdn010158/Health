import { React, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import img from "../img/showingpage.png";
import data from "../../json-server/db.json";

const ProductsListWrapper = styled.div`
  .shopping_main {
    background-color: #ffff;
    padding-left: 15%;
    padding-top: 100px;
    background-image: url(${img});
    width: 100%;
    height: 1000px;
    display: flex;
    flex-direction: column;
  }

  .shopping_1 {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
`;

const ProductCard = styled.div`
  width: 25%;
  height: 450px;

  .main1_link {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-decoration: none;
    color: black;
  }

  .main1_img {
    box-shadow: 0px 11px 30px 8px rgba(0, 0, 0, 0.25);
    height: 380px;
    width: 80%;
    object-fit: cover;
    border-radius: 5%;
  }

  .main1_text {
    font-family: "oneFontTitle";
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

function ProductsList() {
  const [products, setProducts] = useState([]);
  const { apipoint } = useParams();

  useEffect(() => {
    if (data[apipoint]) {
      setProducts(data[apipoint]);
    }
  }, [apipoint]);

  return (
    <ProductsListWrapper>
      <div className="shopping_main">
        <div className="shopping_1">
          {products.map((product) => (
            <ProductCard key={product.id}>
              <Link
                className="main1_link"
                to={`/Products/${apipoint}/${product.id}`}
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
            </ProductCard>
          ))}
        </div>
      </div>
    </ProductsListWrapper>
  );
}

export default ProductsList;
