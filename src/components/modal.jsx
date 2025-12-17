import { useState, useEffect } from "react";

export default function ProjectModal({ data, isOpen, close }) {
  const dummyImages = [
    {
      image: "https://via.placeholder.com/600x400?text=Preview",
      title: "Preview Image",
    },
  ];

  const images = data?.images?.length ? data.images : dummyImages;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (isOpen) setIndex(0);
  }, [isOpen, data]);

  if (!isOpen || !data) return null;

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-end md:items-center justify-center"
      onClick={close}
    >
      {/* Modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          bg-white w-full md:max-w-5xl
          h-[90vh] md:h-auto
          rounded-t-2xl md:rounded-2xl
          overflow-y-auto
          relative
        "
      >
        {/* Close */}
        <button
          onClick={close}
          className="
            absolute top-3 right-3 z-20
            bg-black/70 text-white
            w-9 h-9 rounded-full
            flex items-center justify-center
            text-lg
          "
        >
          ✕
        </button>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 sm:p-6">
          {/* IMAGE */}
          <div>
            <div className="relative w-full h-56 sm:h-64 md:h-80 bg-gray-100 rounded-xl overflow-hidden">
              <img
                src={images[index].image}
                alt={images[index].title}
                className="w-full h-full object-contain"
              />

              {images.length > 1 && (
                <>
                  <button
                    onClick={prev}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white w-8 h-8 rounded-full"
                  >
                    ‹
                  </button>
                  <button
                    onClick={next}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white w-8 h-8 rounded-full"
                  >
                    ›
                  </button>
                </>
              )}
            </div>

            <p className="text-center text-xs text-gray-500 mt-2">
              {images[index].title}
            </p>
          </div>

          {/* TEXT */}
          <div className="flex flex-col">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
              {data.title}
            </h2>

            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              {data.description}
            </p>

            {/* Tech */}
            {data.tech && (
              <div className="flex flex-wrap gap-2 mb-6">
                {data.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs sm:text-sm bg-gray-100 border rounded-full text-gray-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}

            {/* Action */}
            {data.link && (
              <a
                href={data.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-auto
                  w-full
                  bg-black text-white
                  py-3 rounded-lg
                  text-center text-sm font-medium
                  hover:bg-gray-800 transition
                "
              >
                See Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
