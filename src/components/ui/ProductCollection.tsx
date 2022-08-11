import { Product } from "../../../typing/api";
import { imageURLParser } from "../../lib/firebase/addTokenToImage";
import ProductCard from "./ProductCard";

type Props = {
  title: string;
  products: Product[];
};

function ProductCollection({ title, products }: Props) {
  return (
    <div className="mx-5 my-5 rounded-lg bg-slate-700 p-5 shadow-md shadow-slate-900 md:my-8">
      <h2 className="text-2xl font-semibold capitalize tracking-wide">
        {title}
      </h2>
      <div className="mt-4 flex snap-x snap-mandatory gap-4 overflow-scroll p-2 scrollbar-hide md:grid md:grid-cols-2 lg:grid-cols-4 lg:gap-5 lg:p-5">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default ProductCollection;
