import { ShoppingBag } from "lucide-react";

function HomePage() {
    
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      {/* Hero Section */}
      <section
        style={{
          backgroundColor: "#4CAF50",
          color: "white",
          textAlign: "center",
          padding: "80px 20px",
        }}
      >
        <ShoppingBag size={60} />
        <h1 style={{ fontSize: "42px", margin: "20px 0 10px" }}>
          Welcome to ShopEase
        </h1>
        <p style={{ fontSize: "18px", marginBottom: "30px" }}>
          Discover amazing products at unbeatable prices.
        </p>

        <button
          style={{
            backgroundColor: "white",
            color: "#4CAF50",
            border: "none",
            padding: "12px 28px",
            borderRadius: "6px",
            fontSize: "16px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Shop Now
        </button>
      </section> 
      
      {/* Why Choose Us */}
      <section
        style={{
          backgroundColor: "white",
          padding: "50px 30px",
          textAlign: "center",
        }}
      >
        <h2>Why Shop With Us?</h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            marginTop: "30px",
            flexWrap: "wrap",
          }}
        >
          <div style={{ width: "220px" }}>
            <h3>🚚 Fast Delivery</h3>
            <p>Get your orders delivered quickly and safely.</p>
          </div>

          <div style={{ width: "220px" }}>
            <h3>💳 Secure Payments</h3>
            <p>100% secure payment methods for every purchase.</p>
          </div>

          <div style={{ width: "220px" }}>
            <h3>⭐ Best Quality</h3>
            <p>We offer premium quality products at affordable prices.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "#222",
          color: "white",
          textAlign: "center",
          padding: "20px",
          marginTop: "40px",
        }}
      >
        © 2026 ShopEase. All Rights Reserved.
      </footer>
    </div>
  );
}

export default HomePage;





