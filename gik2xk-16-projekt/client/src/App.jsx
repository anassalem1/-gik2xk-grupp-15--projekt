import Home from "./pages/Home";
import Shop from "./pages/shop/Shop";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import SingleProductPage from "./pages/shop/SingleProductPage";
import { createContext, useEffect, useState } from "react";
import ShoppingCart from "./pages/shop/ShoppingCart";
import RenderProducts from "./components/product/RenderProducts";
import Dashboard from "./pages/dashboard/Dashboard";
import { useMemo } from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";
import ProfilePage from "./pages/profilepage/ProfilePage";

export const AuthContext = createContext();

function App() {
  const [cart, setCart] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const updateCartHandler = (product) => {
    const existingProduct = cart.find((p) => p.id === product.id);
    if (existingProduct) {
      const updatedProduct = {
        ...existingProduct,
        quantity: existingProduct.quantity + 1,
      };
      const updatedCart = cart.map((p) =>
        p.id === existingProduct.id ? updatedProduct : p
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    console.log("set productCart to localStorage:", JSON.stringify(cart));
    localStorage.setItem("productCart", JSON.stringify(cart));
  };

  const removeProductFromCartHandler = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };

  useEffect(() => {
    const storedValue = localStorage.getItem("productCart");
    console.log("storedvalue: ", storedValue);

    try {
      if (storedValue && storedValue.length > 0) {
        setCart(JSON.parse(storedValue));
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("productCart", JSON.stringify(cart));
    }
  }, [cart]);

  const numberOfItems = useMemo(() => {
    return cart.reduce((total, product) => total + product.quantity, 0);
  }, [cart]);

  return (
    <div className="App">
      <AuthContext.Provider
        value={{
          isLoggedIn,
          setIsLoggedIn,
          currentUser,
          setCurrentUser,
        }}
      >
        <ThemeProvider theme={theme}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route
              path="products"
              element={
                <Shop
                  updateCartHandler={updateCartHandler}
                  numberOfItems={numberOfItems}
                />
              }
            >
              <Route
                index
                element={
                  <RenderProducts updateCartHandler={updateCartHandler} />
                }
              />
              <Route
                path=":id"
                element={
                  <SingleProductPage updateCartHandler={updateCartHandler} />
                }
              />
              <Route
                path="cart"
                element={
                  <ShoppingCart
                    cart={cart}
                    removeProduct={removeProductFromCartHandler}
                    setCart={setCart}
                  />
                }
              />
            </Route>

            <Route path="dashboard/*" element={<Dashboard />} />
            <Route path="profile/*" element={<ProfilePage />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </ThemeProvider>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
