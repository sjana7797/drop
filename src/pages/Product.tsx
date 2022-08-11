import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product as ProductInterface } from "../../typing/api";
import Detail from "../components/product/Detail";

import { FirebaseClient } from "../lib/firebase/Client";

function Product() {
  const { productId } = useParams();
  console.log(productId);
  const fireBaseClient = new FirebaseClient();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<ProductInterface | null>(null);
  useEffect(() => {
    const getProduct = async () => {
      fireBaseClient.getProduct(productId as string).then((product) => {
        setData(product);
        setIsLoading(false);
      });
    };
    getProduct();
  }, []);

  return isLoading ? (
    <div>Loading...</div>
  ) : data ? (
    <Detail product={data} />
  ) : (
    <div>Error</div>
  );
}

export default Product;
