import { useQuery } from "@tanstack/react-query";
import { Category } from "../../../typing/category";
import { FirebaseClient } from "../../lib/firebase/Client";
import ProductCollection from "./ProductCollection";

type Props = { fireBaseClient: FirebaseClient; searchKey: string };

const ClothingCollection = ({ fireBaseClient, searchKey }: Props) => {
  const { data, error, isLoading } = useQuery([searchKey], () =>
    fireBaseClient.getProducts(searchKey)
  );

  return isLoading ? (
    <div>Loading...</div>
  ) : data ? (
    <ProductCollection title={searchKey} products={data} />
  ) : (
    <div>Error</div>
  );
};

export default ClothingCollection;
