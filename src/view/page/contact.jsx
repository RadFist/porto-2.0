import GoogleMaps from "../../components/google";
import Layout from "../layout/layout";
import { motion } from "motion/react";

const Contact = () => {
  const animateContact = {
    initial: { opacity: 0, scale: 0.9 },
    animate: (index) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.15 * index,
        duration: 0.45,
      },
    }),
  };

  return (
    <Layout>
      <section
        style={{ minHeight: "0vh" }}
        className="relative flex flex-col items-center justify-center px-4 sm:px-6 py-10 sm:py-10 text-white"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-linear-to-br from-[#1e0b47] via-[#2d0b63] to-[#3b0764] opacity-90 -z-10" />
        <div className="absolute inset-0 bg-[url('/src/assets/img/Space-Background.webp')] bg-cover bg-center opacity-25 -z-20" />

        {/* Header */}
        <div className="text-center max-w-3xl mb-10 px-2">
          <h1 className="text-3xl sm:text-4xl font-bold text-violet-300 mb-4 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]">
            Contact Me
          </h1>
          <p className="text-sm sm:text-base text-violet-100/80 leading-relaxed">
            Jika kamu ingin berkolaborasi, berdiskusi, atau sekadar menyapa —
            kamu bisa menghubungi saya melalui beberapa platform di bawah ini.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl w-full">
          {[
            {
              icon: "📧",
              color: "text-blue-400",
              title: "Email",
              link: "mailto:m.rifansyah.a@gmail.com",
              text: "m.rifansyah.a@gmail.com",
            },
            {
              icon: "💬",
              color: "text-green-400",
              title: "WhatsApp",
              link: "https://wa.me/6281386179463",
              text: "+62 813 8617 9463",
            },
            {
              icon: "💻",
              color: "text-gray-300",
              title: "GitHub",
              link: "https://github.com/radfist",
              text: "github.com/radfist",
            },
            {
              icon: "💼",
              color: "text-blue-300",
              title: "LinkedIn",
              link: "https://www.linkedin.com/in/rifansyah-aliyilbuni/",
              text: "linkedin.com/in/rifansyah",
            },
          ].map(({ icon, color, title, link, text }, i) => (
            <motion.div
              key={i}
              className="bg-[rgba(255,255,255,0.08)] backdrop-blur-md border border-[rgba(147,197,253,0.25)] rounded-xl p-4 sm:p-6 flex items-center gap-4"
              variants={animateContact}
              initial="initial"
              whileInView="animate"
              custom={i}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 0 25px rgba(168,85,247,0.6), 0 0 60px rgba(236,72,153,0.4)",
              }}
            >
              <div className={`${color} text-3xl`}>{icon}</div>
              <div>
                <h3 className="font-semibold text-sm sm:text-base text-violet-200">
                  {title}
                </h3>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm text-pink-400 hover:text-pink-300 transition-colors break-all"
                >
                  {text}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Location */}
        <div className="mt-14 sm:mt-16 text-center max-w-2xl px-2">
          <h2 className="text-xl sm:text-2xl font-semibold text-violet-300 mb-4">
            Availability
          </h2>

          <div className="rounded-lg  shadow-[0_0_25px_rgba(168,85,247,0.4)] mb-6 border border-[rgba(147,197,253,0.3)] ">
            <GoogleMaps locationParams="kab tangerang" />
          </div>

          <p className="text-sm sm:text-base text-violet-100/80 leading-relaxed">
            Berdomisili di <b>Tangerang, Indonesia</b> 🌏
            <br />
            Tersedia untuk <b>remote</b>, <b>freelance</b>, dan{" "}
            <b>kolaborasi</b>.
          </p>

          <p className="mt-3 text-xs sm:text-sm text-violet-400/70">
            Aktif pukul <b>09:00 – 22:00 WIB</b>
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
