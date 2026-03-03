import { useState } from "react";
import { products } from "../data/Product";

function Gallery() {
  const categories = [
    "All",
    "Frames",
    "LED & Lights",
    "Gift Items",
    "Printing",
    "Special",
  ];

  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Our Categories</h2>

        {/* CATEGORY CARD VIEW */}
        {!selectedCategory && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {categories.map((cat) => (
              <div
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className="cursor-pointer bg-white p-10 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
              >
                <h3 className="text-xl font-semibold">{cat}</h3>
              </div>
            ))}
          </div>
        )}

        {/* PRODUCT VIEW */}
        {selectedCategory && (
          <>
            <button
              onClick={() => setSelectedCategory(null)}
              className="mb-8 bg-gray-800 text-white px-5 py-2 rounded-md"
            >
              ← Back to Categories
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="rounded-lg w-full h-60 object-cover"
                  />
                  <h3 className="mt-4 text-xl font-semibold">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mt-1">{product.price}</p>

                  <a
                    href="https://wa.me/917708260129"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
                  >
                    Order on WhatsApp
                  </a>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default Gallery;