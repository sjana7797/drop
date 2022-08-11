import { Link } from "react-router-dom";
import { Product } from "../../../typing/api";
import { useFirebaseImgParser } from "../../lib/firebase/useFirebaseImgParser";

type Props = { product: Product };

function ProductCard({ product }: Props) {
  const img = useFirebaseImgParser(product.images[0]);
  const discount = Math.round(
    (1 - product.price / product.original_price) * 100
  );
  return (
    <Link to={`/product/${product.id}`}>
      <div className="group flex min-w-full cursor-pointer snap-center flex-col overflow-hidden rounded-lg bg-slate-800 shadow-slate-900 ring-2 ring-slate-800 ring-offset-2 ring-offset-slate-800 transition-all duration-300 hover:bg-primary-400 hover:shadow-md hover:ring-primary-400 hover:ring-offset-primary-400 lg:hover:-translate-y-2 lg:hover:scale-[1.02]">
        <div className="h-auto w-full overflow-hidden">
          <img
            src={img}
            alt={product.name}
            className="h-full w-full transform transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className="p-2">
          <h3 className="text-lg font-medium transition-colors duration-300 group-hover:text-slate-900">
            {product.name}
          </h3>
          <div className="flex items-center gap-2 p-2">
            <span className="rounded-xl bg-primary-300 px-2 py-1 text-lg font-bold tracking-wide text-slate-900 transition-colors duration-300 group-hover:bg-slate-900 group-hover:text-primary-400">
              {product.price.toLocaleString("en-US", {
                style: "currency",
                currency: "INR",
              })}
            </span>
            <span className="line-through transition-colors duration-300 group-hover:text-slate-800">
              {product.original_price.toLocaleString("en-US", {
                style: "currency",
                currency: "INR",
              })}
            </span>
          </div>
          <div className="my-2 ml-auto w-min whitespace-nowrap rounded-xl bg-rose-500 p-2 font-bold text-slate-800 shadow-button">
            {discount} % Discount
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
