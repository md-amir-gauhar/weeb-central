import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { DataProvider } from "./context/DataContext";
import { WishListProvider } from "./context/wishlistContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
      <WishListProvider>
        <App />
      </WishListProvider>
    </DataProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
