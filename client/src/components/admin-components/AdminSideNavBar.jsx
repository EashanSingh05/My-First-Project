import React, { useState } from "react";

function AdminSideNavBar() {
  const [activePage, setActivePage] = useState("dashboard");

  const [product, setProduct] = useState({
    productName: "",
    description: "",
    price: "",
    stock: "",
    imageUrls: [""],
    admin: "",
  });

  const changeHandler = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const imageChangeHandler = (index, value) => {
    const updated = [...product.imageUrls];
    updated[index] = value;

    setProduct({
      ...product,
      imageUrls: updated,
    });
  };

  const addImageField = () => {
    setProduct({
      ...product,
      imageUrls: [...product.imageUrls, ""],
    });
  };

  const removeImageField = (index) => {
    const updated = [...product.imageUrls];
    updated.splice(index, 1);

    setProduct({
      ...product,
      imageUrls: updated,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(product);

    // Backend API here
  };

  return (
    // <div
    //   style={{
    //     display: "flex",
    //     minHeight: "100vh",
    //     background: "#f5f6fa",
    //     fontFamily: "Arial",
    //   }}
    // >
      {/* Sidebar */}

      <div
        style={{
          width: "260px",
          background: "#1e293b",
          color: "white",
          padding: "25px",
        }}
      >
        <h2
          style={{
            marginBottom: "40px",
            textAlign: "center",
          }}
        >
          Admin Panel
        </h2>

        {[
          "dashboard",
          "add product",
          "products",
          "orders",
          "customers",
          "analytics",
          "settings",
        ].map((item) => (
          <div
            key={item}
            onClick={() => setActivePage(item)}
            style={{
              padding: "15px",
              marginBottom: "12px",
              borderRadius: "8px",
              cursor: "pointer",
              background:
                activePage === item ? "#3b82f6" : "transparent",
              transition: ".3s",
              textTransform: "capitalize",
            }}
          >
            {item}
          </div>
        ))}
      </div>

      {/* Content */}

      <div
        style={{
          flex: 1,
          padding: "40px",
        }}
      >
        {activePage === "dashboard" && (
          <>
            <h1>Dashboard</h1>

            <div
              style={{
                display: "flex",
                gap: "20px",
                marginTop: "30px",
                flexWrap: "wrap",
              }}
            >
              {[
                {
                  title: "Products",
                  value: 245,
                },
                {
                  title: "Orders",
                  value: 83,
                },
                {
                  title: "Customers",
                  value: 120,
                },
                {
                  title: "Revenue",
                  value: "₹58,500",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  style={{
                    background: "white",
                    width: "220px",
                    padding: "25px",
                    borderRadius: "12px",
                    boxShadow: "0 3px 12px rgba(0,0,0,.08)",
                  }}
                >
                  <h3>{card.title}</h3>

                  <h1
                    style={{
                      marginTop: "15px",
                      color: "#2563eb",
                    }}
                  >
                    {card.value}
                  </h1>
                </div>
              ))}
            </div>
          </>
        )}

        {activePage === "add product" && (
          <>
            <h1>Add Product</h1>

            <form
              onSubmit={submitHandler}
              style={{
                marginTop: "30px",
                background: "white",
                padding: "35px",
                borderRadius: "12px",
                maxWidth: "850px",
                boxShadow: "0 4px 15px rgba(0,0,0,.08)",
              }}
            >
              {/* Product Name */}

              <label>Product Name</label>

              <input
                type="text"
                name="productName"
                value={product.productName}
                onChange={changeHandler}
                required
                style={inputStyle}
              />

              {/* Description */}

              <label>Description</label>

              <textarea
                name="description"
                rows="5"
                maxLength={500}
                value={product.description}
                onChange={changeHandler}
                required
                style={{
                  ...inputStyle,
                  resize: "vertical",
                }}
              />

              {/* Price */}

              <label>Price</label>

              <input
                type="number"
                name="price"
                value={product.price}
                onChange={changeHandler}
                required
                style={inputStyle}
              />

              {/* Stock */}

              <label>Stock</label>

              <input
                type="number"
                name="stock"
                value={product.stock}
                onChange={changeHandler}
                required
                style={inputStyle}
              />

              {/* Admin ID */}

              <label>Admin ID</label>

              <input
                type="text"
                name="admin"
                value={product.admin}
                onChange={changeHandler}
                required
                style={inputStyle}
              />

              {/* Images */}

              <label>Image URLs</label>

              {product.imageUrls.map((url, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    gap: "10px",
                    marginBottom: "10px",
                  }}
                >
                  <input
                    type="text"
                    placeholder="https://image-url.com"
                    value={url}
                    onChange={(e) =>
                      imageChangeHandler(index, e.target.value)
                    }
                    style={{
                      ...inputStyle,
                      marginBottom: 0,
                      flex: 1,
                    }}
                  />

                  {product.imageUrls.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeImageField(index)}
                      style={{
                        background: "#ef4444",
                        color: "white",
                        border: "none",
                        borderRadius: "8px",
                        padding: "0 15px",
                        cursor: "pointer",
                      }}
                    >
                      X
                    </button>
                  )}
                </div>
              ))}

              <button
                type="button"
                onClick={addImageField}
                style={{
                  background: "#10b981",
                  color: "white",
                  border: "none",
                  padding: "12px 20px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  marginBottom: "25px",
                }}
              >
                + Add Image URL
              </button>

              <br />

              <button
                type="submit"
                style={{
                  background: "#2563eb",
                  color: "white",
                  border: "none",
                  padding: "15px 40px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                Add Product
              </button>
            </form>
          </>
        )}

        {activePage === "products" && <h1>Products Page</h1>}

        {activePage === "orders" && <h1>Orders Page</h1>}

        {activePage === "customers" && <h1>Customers Page</h1>}

        {activePage === "analytics" && <h1>Analytics Page</h1>}

        {activePage === "settings" && <h1>Settings Page</h1>}
      {/* </div> */}
    {/* // </div> */}
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginTop: "8px",
  marginBottom: "20px",
  border: "1px solid #ccc",
  borderRadius: "8px",
  fontSize: "15px",
  boxSizing: "border-box",
};

export default AdminSideNavBar;