import { products } from "../../data/products.js";
import Link from "next/link";

export default function ProductsList({
  checkedCategories,
  checkedVendors,
  sortOptions,
}) {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products
            .filter(
              (item) =>
                item.isAvailable == 1 &&
                (checkedCategories.includes("all") ||
                  checkedCategories.includes(item.category)) &&
                (checkedVendors.includes("all") ||
                  checkedVendors.includes(item.vendor))
            )
            .sort(
              (a, b) =>
                (sortOptions == "rating" && b.rating - a.rating) ||
                (sortOptions == "newest" && a.newest - b.newest) ||
                a.id - b.id
            )
            .reverse()

            .map((product) => (
              <Link key={product.id} href={product.href}>
                <a className="group">
                  <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="w-full h-full object-center object-cover group-hover:opacity-75"
                    />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                  <p className="mt-1 text-sm font-medium text-gray-900">
                    <span className="round-tag">{product.category}</span>
                    <span className="round-tag">{product.vendor}</span>
                  </p>
                </a>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
