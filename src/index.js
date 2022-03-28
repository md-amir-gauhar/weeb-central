import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { DataProvider } from "./context/DataContext";
import { WishListProvider } from "./context/wishlistContext";
import { AddressProvider } from "./context/addressContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
      <WishListProvider>
        <AddressProvider>
          <App />
        </AddressProvider>
      </WishListProvider>
    </DataProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
