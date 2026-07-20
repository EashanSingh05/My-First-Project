
import React, { useState } from "react";

function AdminSideNavBar() {


  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#f5f6fa",
        fontFamily: "Arial",
      }}
    >
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
        {/* {activePage === "dashboard" && (
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
        )} */}

       

        {/* {activePage === "products" && <h1>Products Page</h1>}

        {activePage === "orders" && <h1>Orders Page</h1>}

        {activePage === "customers" && <h1>Customers Page</h1>}

        {activePage === "analytics" && <h1>Analytics Page</h1>}

        {activePage === "settings" && <h1>Settings Page</h1>} */}
      </div>
    </div>
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