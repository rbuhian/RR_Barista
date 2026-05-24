import { createContext, useContext, useState, useCallback } from 'react';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [currentPage, setCurrentPage] = useState('home');
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [cart, setCart] = useState([]);
  const [adminLoggedIn, setAdminLoggedIn] = useState(false);
  const [toast, setToast] = useState({ message: '', type: '', visible: false });

  // Navigation
  const showPage = useCallback((page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Toast
  const showToast = useCallback((message, type = '') => {
    setToast({ message, type, visible: true });
    setTimeout(() => setToast((t) => ({ ...t, visible: false })), 2800);
  }, []);

  // Cart
  const addToCart = useCallback((product) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.productId === product.id);
      if (existing) {
        return prev.map((c) =>
          c.productId === product.id ? { ...c, qty: c.qty + 1 } : c
        );
      }
      return [...prev, { productId: product.id, product, qty: 1 }];
    });
    showToast('Added to cart');
  }, [showToast]);

  const changeQty = useCallback((productId, delta) => {
    setCart((prev) => {
      const updated = prev.map((c) =>
        c.productId === productId ? { ...c, qty: c.qty + delta } : c
      );
      return updated.filter((c) => c.qty > 0);
    });
  }, []);

  const clearCart = useCallback(() => setCart([]), []);

  const cartTotal = cart.reduce((sum, c) => {
    const price = c.product.saleActive && c.product.salePrice
      ? c.product.salePrice
      : c.product.price;
    return sum + price * c.qty;
  }, 0);

  const cartCount = cart.reduce((sum, c) => sum + c.qty, 0);

  const effPrice = (product) =>
    product.saleActive && product.salePrice ? product.salePrice : product.price;

  return (
    <AppContext.Provider value={{
      currentPage, showPage,
      products, setProducts,
      orders, setOrders,
      cart, addToCart, changeQty, clearCart, cartTotal, cartCount, effPrice,
      adminLoggedIn, setAdminLoggedIn,
      toast, showToast,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used inside AppProvider');
  return ctx;
};
