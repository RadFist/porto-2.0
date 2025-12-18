import { useState } from "react";
import { motion } from "motion/react";

const GoogleMaps = ({ locationParam = "tangerang" }) => {
  const [isLoading, setIsLoading] = useState(true);
  const encoded = encodeURIComponent(locationParam);
  const url = `https://www.google.com/maps?q=${encoded}&output=embed`;
  return (
    <div className="relative  rounded-lg p-2 ">
      {/* Loading Overlay */}
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 flex flex-col items-center justify-center bg-[rgba(20,10,40,0.8)] backdrop-blur-sm z-10"
        >
          {/* Animasi loading (spinner glowing style) */}
          <motion.div
            className="w-10 h-10 border-4 border-violet-400 border-t-transparent rounded-full animate-spin mb-3"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          />
          <p className="text-violet-200 font-medium tracking-wide">
            Loading map...
          </p>
        </motion.div>
      )}

      <iframe
        src={url}
        width="100%"
        height="330"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps"
        className="rounded-lg"
        onLoad={() => setIsLoading(false)}
      ></iframe>
    </div>
  );
};

export default GoogleMaps;
