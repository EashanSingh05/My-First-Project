import React, { useState } from 'react';

export default function ProductDashboard() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [fetched, setFetched] = useState(false);

  // Inline CSS styles
  const styles = {
    body: {
      background: '#f4f6f9',
      padding: '2rem',
      minHeight: '100vh',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      margin: 0,
    },
    container: {
      maxWidth: '1400px',
      margin: '0 auto',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '1rem',
      marginBottom: '2rem',
    },
    title: {
      fontSize: '2rem',
      color: '#1a1a2e',
      fontWeight: '700',
      margin: 0,
    },
    titleSpan: {
      color: '#0f3460',
    },
    fetchBtn: {
      padding: '14px 36px',
      fontSize: '1.1rem',
      fontWeight: '600',
      color: '#fff',
      background: 'linear-gradient(135deg, #0f3460, #16213e)',
      border: 'none',
      borderRadius: '12px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(15, 52, 96, 0.3)',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
    },
    fetchBtnHover: {
      transform: 'translateY(-2px)',
      boxShadow: '0 6px 20px rgba(15, 52, 96, 0.45)',
    },
    fetchBtnDisabled: {
      opacity: '0.6',
      cursor: 'not-allowed',
    },
    statsBar: {
      display: 'flex',
      gap: '1.5rem',
      flexWrap: 'wrap',
      marginBottom: '2rem',
    },
    statCard: {
      background: '#fff',
      padding: '1rem 1.8rem',
      borderRadius: '12px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
      flex: '1',
      minWidth: '140px',
      textAlign: 'center',
    },
    statLabel: {
      fontSize: '0.85rem',
      color: '#888',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
    },
    statValue: {
      fontSize: '1.6rem',
      fontWeight: '700',
      color: '#1a1a2e',
      marginTop: '4px',
    },
    errorMsg: {
      background: '#ffecec',
      color: '#b00020',
      padding: '1rem 1.5rem',
      borderRadius: '10px',
      marginBottom: '1.5rem',
      fontWeight: '500',
    },
    loadingContainer: {
      textAlign: 'center',
      padding: '3rem 0',
    },
    spinner: {
      width: '48px',
      height: '48px',
      border: '4px solid #e0e0e0',
      borderTop: '4px solid #0f3460',
      borderRadius: '50%',
      animation: 'spin 0.8s linear infinite',
      margin: '0 auto 1rem',
    },
    loadingText: {
      color: '#888',
    },
    productGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
      gap: '1.5rem',
    },
    productCard: {
      background: '#fff',
      borderRadius: '14px',
      padding: '1.5rem',
      boxShadow: '0 2px 12px rgba(0, 0, 0, 0.07)',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      display: 'flex',
      flexDirection: 'column',
      cursor: 'pointer',
    },
    productCardHover: {
      transform: 'translateY(-4px)',
      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.12)',
    },
    productName: {
      fontSize: '1.15rem',
      fontWeight: '700',
      color: '#1a1a2e',
      marginBottom: '8px',
    },
    productDesc: {
      fontSize: '0.9rem',
      color: '#666',
      lineHeight: '1.5',
      flexGrow: 1,
      marginBottom: '1rem',
    },
    productMeta: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: '0.8rem',
      borderTop: '1px solid #f0f0f0',
    },
    productPrice: {
      fontSize: '1.3rem',
      fontWeight: '700',
      color: '#0f3460',
    },
    productStock: {
      fontSize: '0.85rem',
      padding: '4px 12px',
      borderRadius: '20px',
      fontWeight: '600',
    },
    stockHigh: {
      background: '#e6f7e6',
      color: '#1a7d1a',
    },
    stockLow: {
      background: '#fff3e0',
      color: '#b76500',
    },
    stockOut: {
      background: '#ffecec',
      color: '#b00020',
    },
    emptyState: {
      textAlign: 'center',
      padding: '4rem 1rem',
      color: '#999',
    },
    emptyStateTitle: {
      fontSize: '1.5rem',
      color: '#666',
      marginBottom: '0.5rem',
    },
    emptyStateText: {
      fontSize: '1rem',
    },
  };

  // Stock class helper
  const getStockClass = (stock) => {
    if (stock === 0) return styles.stockOut;
    if (stock < 20) return styles.stockLow;
    return styles.stockHigh;
  };

  // Fetch products
  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    setFetched(true);

    try {
      const res = await fetch('https://dummyjson.com/products?limit=0');
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      setProducts(data.products);
    } catch (err) {
      console.error('Fetch error:', err);
      setError('Failed to fetch products. Please try again.');
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  // Calculate stats
  const totalStock = products.reduce((sum, p) => sum + p.stock, 0);
  const avgPrice =
    products.length > 0
      ? (products.reduce((sum, p) => sum + p.price, 0) / products.length).toFixed(2)
      : '0.00';

  return (
    <div style={styles.body}>
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(15, 52, 96, 0.45);
        }
        button:active {
          transform: translateY(0);
        }
        .product-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
        }
      `}</style>

      <div style={styles.container}>
        {/* Header */}
        <div style={styles.header}>
          <h1 style={styles.title}>
            📦 <span style={styles.titleSpan}>Product</span> Dashboard
          </h1>
          <button
            style={{
              ...styles.fetchBtn,
              ...(loading && styles.fetchBtnDisabled),
            }}
            onClick={fetchProducts}
            disabled={loading}
          >
            {loading ? '⏳ Loading…' : '🔄 Fetch Products'}
          </button>
        </div>

        {/* Stats Bar */}
        <div style={styles.statsBar}>
          <div style={styles.statCard}>
            <div style={styles.statLabel}>Total Products</div>
            <div style={styles.statValue}>{products.length}</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statLabel}>Total Stock</div>
            <div style={styles.statValue}>{totalStock}</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statLabel}>Avg. Price</div>
            <div style={styles.statValue}>${avgPrice}</div>
          </div>
        </div>

        {/* Error Message */}
        {error && <div style={styles.errorMsg}>⚠️ {error}</div>}

        {/* Loading Spinner */}
        {loading && (
          <div style={styles.loadingContainer}>
            <div style={styles.spinner}></div>
            <p style={styles.loadingText}>Fetching products...</p>
          </div>
        )}

        {/* Product Grid */}
        {!loading && products.length > 0 && (
          <div style={styles.productGrid}>
            {products.map((product) => (
              <div
                key={product.id}
                className="product-card"
                style={styles.productCard}
              >
                <div style={styles.productName}>{product.title}</div>
                <div style={styles.productDesc}>{product.description}</div>
                <div style={styles.productMeta}>
                  <span style={styles.productPrice}>
                    ${product.price.toFixed(2)}
                  </span>
                  <span style={{ ...styles.productStock, ...getStockClass(product.stock) }}>
                    {product.stock > 0
                      ? `📦 ${product.stock} in stock`
                      : '❌ Out of stock'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && products.length === 0 && fetched && (
          <div style={styles.emptyState}>
            <h2 style={styles.emptyStateTitle}>❌ No products found</h2>
            <p style={styles.emptyStateText}>
              There was an issue loading products. Please try again.
            </p>
          </div>
        )}

        {/* Initial Empty State */}
        {!loading && products.length === 0 && !fetched && (
          <div style={styles.emptyState}>
            <h2 style={styles.emptyStateTitle}>👋 No products yet</h2>
            <p style={styles.emptyStateText}>
              Click the <strong>"Fetch Products"</strong> button to load them.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
