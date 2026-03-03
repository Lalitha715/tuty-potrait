import { useState } from "react";
import { products } from "../data/Product";

import framesImg from "../assets/Category/Frames.png";
import ledImg from "../assets/Category/Led.png";
import giftImg from "../assets/Category/Gift.png";
import printingImg from "../assets/Category/Printing.png";

const categoryImages = {
  Frames: framesImg,
  "LED & Lights": ledImg,
  "Gift Items": giftImg,
  Printing: printingImg,
};

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
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts =
    !selectedCategory || selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">

        {/* Dynamic Heading */}
        <h2 className="text-3xl font-bold mb-12">
          {selectedProduct
            ? selectedProduct.name
            : selectedCategory
            ? selectedCategory
            : "Our Categories"}
        </h2>

        {/* ================= CATEGORY VIEW ================= */}
        {!selectedCategory && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {categories.map((cat) => (
              <div
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className="cursor-pointer bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
              >
                <div className="overflow-hidden rounded-lg mb-4">
                  <img
                    src={
                      categoryImages[cat] ||
                      "https://placehold.co/400x300?text=View+All"
                    }
                    alt={cat}
                    className="w-full h-48 object-cover hover:scale-105 transition duration-300"
                  />
                </div>

                <h3 className="text-xl font-bold text-gray-800">
                  {cat}
                </h3>
              </div>
            ))}
          </div>
        )}

        {/* ================= PRODUCT VIEW ================= */}
        {selectedCategory && !selectedProduct && (
          <>
            <button
              onClick={() => setSelectedCategory(null)}
              className="mb-8 bg-gray-800 text-white px-5 py-2 rounded-md hover:bg-gray-700 transition"
            >
              ← Back to Categories
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  onClick={() => setSelectedProduct(product)}
                  className="cursor-pointer bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="rounded-lg w-full h-60 object-cover"
                  />

                  <h3 className="mt-4 text-xl font-semibold">
                    {product.name}
                  </h3>

                  <p className="text-gray-600 mt-1">
                    {product.price}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}

        {/* ================= TYPE VIEW ================= */}
        {selectedProduct && (
          <>
            <button
              onClick={() => setSelectedProduct(null)}
              className="mb-8 bg-gray-800 text-white px-5 py-2 rounded-md hover:bg-gray-700 transition"
            >
              ← Back to Products
            </button>

            {/* If product has types */}
            {selectedProduct.types ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
                {selectedProduct.types.map((type) => (
                  <div
                    key={type.id}
                    className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
                  >
                    <img
                      src={type.image}
                      alt={type.typeName}
                      className="rounded-lg w-full h-60 object-cover"
                    />

                    <h3 className="mt-4 text-lg font-semibold">
                      {type.typeName}
                    </h3>

                    <a
                      href={`https://wa.me/917708260129?text=Hi, I'm interested in ${selectedProduct.name} - ${type.typeName}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
                    >
                      Order on WhatsApp
                    </a>
                  </div>
                ))}
              </div>
            ) : (
              /* If product has no types */
              <div className="bg-white p-5 rounded-xl shadow-md max-w-md mx-auto">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="rounded-lg w-full h-60 object-cover"
                />

                <p className="text-gray-600 mt-4">
                  {selectedProduct.price}
                </p>

                <a
                  href={`https://wa.me/917708260129?text=Hi, I'm interested in ${selectedProduct.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
                >
                  Order on WhatsApp
                </a>
              </div>
            )}
          </>
        )}

      </div>
    </section>
  );
}

export default Gallery;