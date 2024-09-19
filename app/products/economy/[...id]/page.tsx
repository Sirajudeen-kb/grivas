"use client";
import { useParams } from "next/navigation";
import products from "../Data"; // Ensure the path is correct
import Image from "next/image";
import Features from "../../Components/Features";
import Specifications from "../../Components/Specifications";
import Description from "../../Components/Description";

const ProductDetails = () => {
  const params = useParams();
  const { id } = params;
  const product = products.find(
    (product) => product.id === parseInt(id as string)
  );

  if (!product) {
    return <h1>Product Not Found</h1>;
  }

  const components = [
    product.primaryFeatures && (
      <Features
        key="primaryFeatures"
        title={product.primaryFeatures?.title}
        features={product.primaryFeatures?.features}
      />
    ),
    product.primarySpecifications && (
      <Specifications
        key="primarySpecifications"
        title={product.primarySpecifications.title}
        specs={product.primarySpecifications.specs}
      />
    ),
    product.secondaryFeatures && (
      <Features
        key="secondaryFeatures"
        title={product.secondaryFeatures.title}
        features={product.secondaryFeatures.features}
      />
    ),
    product.secondarySpecifications && (
      <Specifications
        key="secondarySpecifications"
        title={product.secondarySpecifications.title}
        specs={product.secondarySpecifications.specs}
      />
    ),
    product.primaryDescription && (
      <Description
        key="primaryDescription"
        title={product.primaryDescription?.title}
        paragraphs={product.primaryDescription?.paragraphs}
      />
    ),
    ...(product.variants?.map((variant, index) => (
      <div key={`variant-${index}`} className="space-y-6">
        {(variant.title || variant.paragraphs?.length > 0) && (
          <Description
            title={variant.title}
            paragraphs={variant.paragraphs}
          />
        )}
        <Specifications
          title={variant.heading}
          specs={variant.specs}
        />
      </div>
    )) || []),
    product.secondaryDescription && (
      <Description
        key="secondaryDescription"
        title={product.secondaryDescription.title}
        paragraphs={product.secondaryDescription.paragraphs}
      />
    ),
  ].filter(Boolean);

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">{product.name}</h1>
      <hr className="w-12 h-1 mx-auto my-4 bg-black/80 border-0 rounded md:my-10"></hr>
      <div className="flex flex-col md:flex-row md:space-x-8 mb-8">
        <div className="md:w-1/2 flex justify-center items-center mb-4 md:mb-0">
          <Image
            src={product.img}
            alt={product.name}
            width={300}
            height={300}
            className="object-contain"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">Description</h2>
          <p className="text-lg">{product.description}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {components.map((component, index) => (
          <div
            key={index}
            className={`${
              index === components.length - 1 && components.length % 2 !== 0
                ? "lg:col-span-2"
                : ""
            }`}
          >
            {component}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;