import Home from "./pages/Home";
import { Routes as ReactRouter, Route, Link } from "react-router-dom";
import Product from "./pages/Product";

type Props = {};

function Routes({}: Props) {
  return (
    <ReactRouter>
      <Route path="/" element={<Home />} />
      <Route path="/product/:productId" element={<Product />} />
    </ReactRouter>
  );
}

export default Routes;
