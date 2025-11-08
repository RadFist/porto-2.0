import GoogleMaps from "../../components/google";
import Layout from "../layout/layout";
import { motion } from "motion/react";

const Contact = () => {
  const animateContact = {
    initial: { opacity: 0, scale: 0 },
    animate: (index) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.2 * index,
        duration: 0.5,
      },
    }),
  };

  return (
    <Layout>
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 text-white">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-linear-to-br from-[#1e0b47] via-[#2d0b63] to-[#3b0764] opacity-90 -z-10" />
        <div className="absolute inset-0 bg-[url('/src/assets/img/Space-Background.webp')] bg-cover bg-center opacity-30 -z-20" />

        {/* Header */}
        <div className="text-center max-w-3xl mb-10">
          <h1 className="text-4xl font-bold text-violet-300 mb-4 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]">
            Contact Me
          </h1>
          <p className="text-violet-100/80 leading-relaxed">
            Jika kamu ingin berkolaborasi, berdiskusi, atau sekadar menyapa —{" "}
            kamu bisa menghubungi saya melalui beberapa platform di bawah ini.
            Saya terbuka untuk kerja sama, proyek freelance, maupun konsultasi
            ringan.
          </p>
        </div>

        {/* Card Kontak */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
          {[
            {
              icon: "📧",
              color: "text-blue-400",
              title: "Email",
              link: "mailto:rifansyahaliyilbuni@gmail.com",
              text: "rifansyahaliyilbuni@gmail.com",
            },
            {
              icon: "💬",
              color: "text-green-400",
              title: "WhatsApp",
              link: "https://wa.me/6281234567890",
              text: "+62 812 3456 7890",
            },
            {
              icon: "💻",
              color: "text-gray-300",
              title: "GitHub",
              link: "https://github.com/rifansyah",
              text: "github.com/rifansyah",
            },
            {
              icon: "💼",
              color: "text-blue-300",
              title: "LinkedIn",
              link: "https://linkedin.com/in/rifansyah",
              text: "linkedin.com/in/rifansyah",
            },
          ].map(({ icon, color, title, link, text }, i) => (
            <motion.div
              key={i}
              className="bg-[rgba(255,255,255,0.08)] backdrop-blur-md border border-[rgba(147,197,253,0.3)] rounded-lg p-6 flex items-center gap-4 transition-all"
              variants={animateContact}
              initial="initial"
              whileInView="animate"
              custom={i}
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 0 25px rgba(168,85,247,0.6), 0 0 60px rgba(236,72,153,0.4)",
                border: "1px solid rgba(236,72,153,0.5)",
              }}
              viewport={{ once: true }}
            >
              <div
                className={`${color} text-3xl drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]`}
              >
                {icon}
              </div>
              <div>
                <h3 className="font-semibold text-violet-200">{title}</h3>
                <p className="text-violet-100/80">
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-400 hover:text-pink-300 transition-colors"
                  >
                    {text}
                  </a>
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lokasi dan Ketersediaan */}
        <div className="mt-16 text-center max-w-2xl">
          <h2 className="text-2xl font-semibold text-violet-300 mb-4 drop-shadow-[0_0_8px_rgba(139,92,246,0.7)]">
            Availability
          </h2>
          <div className="rounded-lg overflow-hidden shadow-[0_0_25px_rgba(168,85,247,0.4)] mb-6 border border-[rgba(147,197,253,0.3)]">
            <GoogleMaps locationParams="kab tangerang" />
          </div>
          <p className="text-violet-100/80 leading-relaxed">
            Berdomisili di <b>Tangerang, Indonesia</b> 🌏
            <br />
            Tersedia untuk kerja <b>remote</b>, <b>freelance</b>, atau{" "}
            <b>kolaborasi proyek</b>.
          </p>
          <p className="mt-4 text-violet-400/70">
            Biasanya aktif antara pukul <b>09:00 : 22:00 WIB</b>.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
