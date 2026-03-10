import React from "react";

function TypeView({ selectedProduct, onBack }) {
  return (
    <div>
      <button
        onClick={onBack}
        className="mb-8 bg-gray-800 text-white px-5 py-2 rounded-md hover:bg-gray-700 transition"
      >
        ← Back to Products
      </button>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {selectedProduct.types.map((type, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
          >
            <div className="w-full aspect-[4/3] flex items-center justify-center">
              <img
                src="https://placehold.co/300x250?text=Type"
                alt={type}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            <h3 className="mt-4 text-lg font-semibold">
              {type}
            </h3>

            <a
              href={`https://wa.me/917708260129?text=Hi, I'm interested in ${selectedProduct.name} - ${type}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
            >
              Order on WhatsApp
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TypeView;