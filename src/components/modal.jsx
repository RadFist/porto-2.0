import { useState, useEffect } from "react";

export default function ProjectModal({ data, isOpen, close }) {
  const dummyImages = [
    "https://via.placeholder.com/600x400?text=Image+1",
    "https://via.placeholder.com/600x400?text=Image+2",
    "https://via.placeholder.com/600x400?text=Image+3",
  ];

  // Pakai gambar dari project atau dummy
  const images = data?.images?.length > 0 ? data.images : dummyImages;

  const [index, setIndex] = useState(0);

  // Reset slide ke 0 setiap kali modal buka project baru
  useEffect(() => {
    if (isOpen) setIndex(0);
  }, [isOpen, data]);

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!isOpen || !data) return null; // aman dari error

  return (
    <div
      className="fixed inset-0 backdrop-blur-md bg-black/40 flex items-center justify-center z-50 p-6"
      onClick={(e) => {
        close(e);
      }}
    >
      <div
        className="bg-white rounded-2xl shadow-xl w-full max-w-5xl p-6 relative animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={(e) => close(e)}
          className="absolute top-3 right-3 text-gray-600 hover:text-black text-2xl font-bold"
        >
          ✕
        </button>

        {/* 2 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* LEFT — IMAGE + CAROUSEL */}
          <div className="relative w-full h-80 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
            <img
              src={images[index]}
              alt="Portfolio"
              className="object-cover w-full h-full"
            />

            {/* Prev Button */}
            <button
              onClick={prev}
              className="absolute left-3 bg-black/40 text-white px-3 py-2 rounded-full text-xl"
            >
              ‹
            </button>

            {/* Next Button */}
            <button
              onClick={next}
              className="absolute right-3 bg-black/40 text-white px-3 py-2 rounded-full text-xl"
            >
              ›
            </button>
          </div>

          {/* RIGHT — TEXT */}
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold text-black mb-3">{data.title}</h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              {data.description}
            </p>

            {/* Tech Stack */}
            {data?.tech && (
              <div className="flex flex-wrap gap-2">
                {data.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700 border"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
