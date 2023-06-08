/** @format */

import React, { useEffect } from "react";
import productApi from "./api/productApi";
import CounterFeature from "./feature/Counter";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import { Button } from "@mui/material";
import { useSnackbar } from "notistack";

function App() {
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const productList = await productApi.getAll();
  //     console.log(productList);
  //   };
  //   fetchProducts();
  // }, []);

  return (
    <div>
      <Header />

      <CounterFeature></CounterFeature>
    </div>
  );
}

export default App;
