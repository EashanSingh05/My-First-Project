import {useState} from "react";



export default function AddProduct() {
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

    ) 
 }