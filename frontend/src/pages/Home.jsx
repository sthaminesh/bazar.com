import { useState } from "react";

import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import CategoryChip from "../components/CategoryChip";

import products from "../data/products";

const categories = [
  "All",
  "Electronics",
  "Fashion",
  "Furniture",
  "Vehicles",
  "Real Estate",
];

function Home() {

  const [search, setSearch] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter products

  const filteredProducts = products.filter((product) => {

    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;

  });

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Navbar */}

      <Navbar
        search={search}
        setSearch={setSearch}
      />

      <main className="max-w-7xl mx-auto px-4 py-8">

        {/* Hero section */}

        <section className="bg-green-800 text-white rounded-2xl p-8 md:p-14 mb-10">

          <div className="max-w-2xl">

            <p className="text-green-200 font-medium mb-3">
              Welcome to Bazar.com
            </p>

            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Buy and Sell Anything You Need
            </h1>

            <p className="mt-4 text-green-100">
              Discover great products and connect with sellers
              across Nepal.
            </p>

            <button
              onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
              className="mt-6 bg-white text-green-800 px-6 py-3 rounded-lg font-semibold hover:bg-green-100"
            >
              Explore Products
            </button>

          </div>

        </section>

        {/* Categories */}

        <section className="mb-10">

          <h2 className="text-2xl font-bold mb-5">
            Browse Categories
          </h2>

          <div className="flex gap-3 overflow-x-auto pb-3">

            {categories.map((category) => (

              <CategoryChip
                key={category}
                name={category}
                active={selectedCategory === category}
                onClick={() => setSelectedCategory(category)}
              />

            ))}

          </div>

        </section>

        {/* Products */}

        <section id="products">

          <div className="flex flex-wrap justify-between items-center gap-3 mb-6">

            <h2 className="text-2xl font-bold">
              Trending Products
            </h2>

            <p className="text-gray-500">
              {filteredProducts.length} products found
            </p>

          </div>

          {filteredProducts.length > 0 ? (

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

              {filteredProducts.map((product) => (

                <ProductCard
                  key={product.id}
                  product={product}
                />

              ))}

            </div>

          ) : (

            <div className="bg-white rounded-xl p-10 text-center">

              <h3 className="text-xl font-semibold">
                No products found
              </h3>

              <p className="text-gray-500 mt-2">
                Try another search or category.
              </p>

            </div>

          )}

        </section>

      </main>

    </div>
  );
}

export default Home;