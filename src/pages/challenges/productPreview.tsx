import { BasePage } from "@/components/utils";
import { AiOutlineShoppingCart } from "react-icons/ai";

import Image from "next/image";

export default function ProductPreview() {
  return (
    <BasePage
      title="Frontend Mentor | Product preview card component"
      className="flex max-w-xl flex-col items-center justify-center p-2 sm:flex-row"
    >
      <div className="sm:hidden">
        <Image
          className="rounded-t-3xl"
          alt="perfume"
          src="/challenges/product/image-product-mobile.jpg"
          width={668}
          height={480}
        />
      </div>
      <div className="hidden sm:block">
        <Image
          className="rounded-l-3xl"
          alt="perfume"
          src="/challenges/product/image-product-desktop.jpg"
          width={668}
          height={480}
        />
      </div>
      <div className="flex flex-col gap-4 p-4">
        <h2 className="pt-2 text-sm tracking-widest text-gray-400">PERFUME</h2>
        <h1 className="text-3xl font-bold">Gabrielle Essence Eau De Parfum</h1>
        <p className="text-sm text-gray-400">
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div className="flex items-center gap-2">
          <span className="text-3xl font-bold text-green-700">$149.99</span>
          <span className="text-sm line-through">$169.99</span>
        </div>
        <button className=" rounded-md bg-green-700 p-3 hover:bg-green-900">
          <div className="flex items-center justify-center gap-2">
            <AiOutlineShoppingCart />
            Add to Cart
          </div>
        </button>
      </div>
    </BasePage>
  );
}
