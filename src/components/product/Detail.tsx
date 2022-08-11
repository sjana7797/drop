import { useState } from "react";
import { Product } from "../../../typing/api";
import { Category } from "../../../typing/category";
import { useFirebaseImgParser } from "../../lib/firebase/useFirebaseImgParser";
import { currencyFormatter } from "../../utils/currencyFormatter";

type Props = { product: Product };

const sizes = ["s", "m", "l", "xl", "2xl", "3xl"];

function Detail({ product }: Props) {
  const { name, original_price, price, category } = product;
  const images = product.images.map((image) => useFirebaseImgParser(image));
  console.log(images);
  const [img, setImg] = useState(0);
  const [selectedSize, setSelectedSize] = useState(sizes[2]);

  return (
    <div className="flex gap-5 p-5">
      <div className="w-full">
        <img
          src={images[img]}
          alt=""
          className="h-[700px] w-[700px] rounded-lg object-contain"
        />
      </div>
      <div className="flex w-full flex-col gap-4">
        <h1 className="text-4xl font-bold tracking-wide">{name}</h1>
        <div className="h-px w-full bg-slate-600" />
        <div className="flex items-center gap-4">
          <div className="rounded-lg bg-primary-400 px-4 py-2 text-2xl font-semibold text-slate-900">
            {currencyFormatter(price)}
          </div>
          <div className="text-xl line-through">
            {currencyFormatter(original_price)}
          </div>
        </div>

        {category === Category.CLOTHING && (
          <div className="flex flex-wrap gap-3">
            {sizes.map((size, index) => {
              return (
                <>
                  <label
                    htmlFor={size}
                    className={`flex h-14 w-14 cursor-pointer items-center justify-center  rounded-lg p-2 text-xl font-semibold uppercase shadow-button transition-colors duration-300 ${
                      selectedSize === size
                        ? "bg-emerald-400 text-slate-900"
                        : "bg-slate-400"
                    }`}
                  >
                    {size}
                  </label>
                  <input
                    key={index}
                    name="size"
                    value={size}
                    type="radio"
                    id={size}
                    checked={selectedSize === size}
                    onChange={(event) => {
                      setSelectedSize(event.target.value);
                    }}
                    className="hidden"
                  />
                </>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Detail;
