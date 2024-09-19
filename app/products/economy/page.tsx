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

      <div className="flex min-h-screen items-center justify-center p-20 container ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link key={product.id} href={`/products/economy/${product.id}`}>
              <div className="text-center">
                {/* Container for Fixed Height Image */}
                <div className="w-full h-80 overflow-hidden">
                  <Image
                    src={product.img}
                    alt={product.name}
                    width={300}
                    height={300}
                    sizes="(max-width: 768px) 100vw, 
                           (max-width: 1200px) 33vw, 
                           33vw"
                    style={{ objectFit: "contain", width: "100%", height: "100%" , borderRadius:"20px"}}
                  />
                </div>
                <h2 className="mt-4 text-xl font-bold">{product.name}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;