import { useState } from "react";
import { product } from "../data/product";
import TypeView from "./TypeView";

// Import category images
import drinkwareImg from "../assets/Category/drinkware.png";
import bottlesImg from "../assets/Category/bottles.png";
import pillowsImg from "../assets/Category/pillows.png";
import framesImg from "../assets/Category/frames.png";
import awardsImg from "../assets/Category/awards.png";
import creativeImg from "../assets/Category/creative.png";

const categoryImages = {
  "Drinkware & Mugs": drinkwareImg,
  "Water Bottles & Metal Gifts": bottlesImg,
  "Personalized Pillows & Textiles": pillowsImg,
  "Frames & Wall Decor": framesImg,
  "Awards, Mementos & Corporate Gifts": awardsImg,
  "Creative Arts & Novelties": creativeImg,
};

function Gallery() {
  const categories = [
    ...new Set(product.map((p) => p.category)),
  ];

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section id="gallery" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">

        {/* ================= Dynamic Heading ================= */}
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
                className="cursor-pointer bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
              >
                <div className="w-full aspect-[4/3] flex items-center justify-center mb-4">
                  <img
                    src={categoryImages[cat]}
                    alt={cat}
                    className="max-h-full max-w-full object-contain"
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
              onClick={() => {
                setSelectedCategory(null);
              }}
              className="mb-8 bg-gray-800 text-white px-5 py-2 rounded-md hover:bg-gray-700 transition"
            >
              ← Back to Categories
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
              {product
                .find((cat) => cat.category === selectedCategory)
                ?.items.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedProduct(item)}
                    className="cursor-pointer bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
                  >
                    <div className="w-full aspect-[4/3] flex items-center justify-center rounded-lg">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>

                    <h3 className="mt-4 text-lg font-semibold">
                      {item.name}
                    </h3>
                  </div>
                ))}
            </div>
          </>
        )}

        {/* ================= TYPE VIEW ================= */}
        {selectedProduct && (
          <TypeView
            selectedProduct={selectedProduct}
            onBack={() => setSelectedProduct(null)}
          />
        )}

      </div>
    </section>
  );
}

export default Gallery;