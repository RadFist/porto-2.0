import { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

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
      className="
        fixed inset-0 z-50
        bg-black/60 backdrop-blur-sm
        flex items-end md:items-center justify-center
      "
      onClick={close}
    >
      {/* MODAL */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          bg-white w-full md:max-w-5xl
          max-h-100dvh md:max-h-[90vh]
          rounded-t-2xl md:rounded-2xl
          flex flex-col
          overflow-hidden
        "
      >
        {/* HEADER — TIDAK IKUT SCROLL */}
        <div className="relative p-4 border-b shrink-0  top-0 bg-white z-10">
          <h2 className="text-base font-semibold text-gray-800 md:hidden">
            Project Detail
          </h2>

          <button
            onClick={close}
            className="
              absolute right-4 top-4
              bg-black/70 text-white
              w-9 h-9 rounded-full
              flex items-center justify-center
              text-lg
            "
          >
            ✕
          </button>
        </div>

        {/* BODY — INI YANG SCROLL */}
        <div
          className="
            flex-1
            overflow-y-auto
            overscroll-contain
            p-4 sm:p-6
          "
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      className="
                    absolute left-2 top-1/2 -translate-y-1/2
                    z-10
                    bg-black/60 hover:bg-black/80
                    text-white
                    w-9 h-9
                    rounded-full
                    flex items-center justify-center
                  "
                    >
                      {"<"}
                    </button>

                    <button
                      onClick={next}
                      className="
                        absolute right-2 top-1/2 -translate-y-1/2
                        bg-black/50 hover:bg-black/70
                        text-white
                        w-9 h-9
                        rounded-full
                        flex items-center justify-center
                        transition
                      "
                    >
                      {">"}
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
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                {data.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {data.description}
              </p>

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
    </div>
  );
}
