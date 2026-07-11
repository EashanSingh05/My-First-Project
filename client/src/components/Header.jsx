import { ShoppingCart } from "lucide-react";
import { Link } from "react-router";

function Header() {
  return (
    <header
      style={{
        backgroundColor: "#222",
        color: "#fff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 40px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
      }}
    >
      {/* Logo */}
      <h2
        style={{
          margin: 0,
          color: "#4CAF50",
          cursor: "pointer",
        }}
      >
        ShopEase
      </h2>

      {/* Navigation */}
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <button
          style={{
            background: "transparent",
            border: "none",
            color: "#fff",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Home
        </button>

        <button
          style={{
            background: "transparent",
            border: "none",
            color: "#fff",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          About
        </button>

        <Link
          to='/auth'
          style={{
            backgroundColor: "#4CAF50",
            border: "none",
            color: "#fff",
            padding: "8px 16px",
            borderRadius: "6px",
            fontSize: "15px",
            cursor: "pointer",
          }}
        >
          Login
        </Link>

        <button
          style={{
            backgroundColor: "#4CAF50",
            border: "none",
            color: "#fff",
            padding: "8px",
            borderRadius: "6px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ShoppingCart size={20} />
        </button>
      </nav>
    </header>
  );
}

export default Header;