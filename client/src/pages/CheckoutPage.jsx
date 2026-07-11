import { useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);
  const [showProducts, setShowProducts] = useState(false);

  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();

    setProducts(data);
    setShowProducts(true);
  };

  return (
    <div
      style={{
        padding: "30px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Our Products</h1>

      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <button
          onClick={fetchProducts}
          style={{
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            padding: "12px 24px",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Fetch Products
        </button>
      </div>

      {/* Conditional Rendering */}
      {showProducts ? (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              style={{
                width: "250px",
                backgroundColor: "white",
                borderRadius: "10px",
                padding: "15px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                textAlign: "center",
              }}
            >
              <img
                src={product.image}
                alt={product.title}
                style={{
                  width: "120px",
                  height: "120px",
                  objectFit: "contain",
                }}
              />

              <h3 style={{ fontSize: "16px", height: "50px" }}>
                {product.title}
              </h3>

              <p
                style={{
                  color: "#4CAF50",
                  fontWeight: "bold",
                  fontSize: "18px",
                }}
              >
                ${product.price}
              </p>

              <button
                style={{
                  backgroundColor: "#4CAF50",
                  color: "white",
                  border: "none",
                  padding: "10px 15px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      ) : (
        <h2
          style={{
            textAlign: "center",
            color: "#666",
          }}
        >
          Click "Fetch Products" to view all products.
        </h2>
      )}
    </div>
  );
}

export default Products;