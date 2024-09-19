import React from "react";
import Image from "next/image";
import Link from "next/link";
import products from "./Data";

function Products() {
  return (
    <>
      <div className="py-8 text-center">
        <h1 className="text-4xl font-bold text-black">Economy-Products</h1>
      </div>
      
      <div className="flex min-h-screen items-center justify-center p-5">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        
          {products.map((product) => (
            <Link key={product.id} href={`/products/economy/${product.id}`}>
              <div
                className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30"
              >
                <div className="h-96 w-72 relative">
                  <Image
                    className="object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                    src={product.img}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 
                           (max-width: 1200px) 50vw, 
                           33vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="absolute rounded-md inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                  <h1 className="font-dmserif text-3xl font-bold text-white">
                    {product.name}
                  </h1>
                  {/* Description is hidden by default */}
                  <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {/* {product.description} */}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;
