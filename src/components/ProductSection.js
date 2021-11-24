/* This example requires Tailwind CSS v2.0+ */
import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from "@heroicons/react/outline";

import { products } from "../data/products.js";
import Link from "next/link";

var topProducts = products.filter((item) => item.topProduct == "1");

export default function ProductSection() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Discover Our Top Products
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Food supplements with high nutritional values that cover a large
            part of our nutritional and energy needs. They have rare and unique
            ingredients that benefit to specific body functions, contributing to
            our health.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {topProducts.map((product) => (
              <Link key={product.id} href={product.href}>
                <a className="group">
                  <div
                    key={product.name}
                    className="relative custom-top-product-section"
                  >
                    <div className="custom-top-product-image">
                      <img src={product.imageSrc}></img>
                    </div>
                    <dt className="custom-top-product-description">
                      <p className="text-lg leading-6 font-medium text-gray-900">
                        {product.name}
                      </p>
                      <dd className="mt-2 text-base text-gray-500">
                        {product.description}
                      </dd>
                    </dt>
                  </div>
                </a>
              </Link>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
