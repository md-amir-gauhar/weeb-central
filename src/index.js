import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { DataProvider } from "./context/DataContext";
import { WishListProvider } from "./context/wishlistContext";
import { AddressProvider } from "./context/addressContext";
import { CartProvider } from "./context/cartContext";
import { AuthProvider } from "./context/AuthContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <DataProvider>
        <CartProvider>
          <WishListProvider>
            <AddressProvider>
              <App />
            </AddressProvider>
          </WishListProvider>
        </CartProvider>
      </DataProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
