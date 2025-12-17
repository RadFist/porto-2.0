import Layout from "../layout/layout";

const About = () => {
  return (
    <Layout>
      <section className="min-h-screen flex flex-col items-center justify-center px-4 py-10 pt-16 text-gray-100">
        {/* ================= ABOUT CARD ================= */}
        <div
          className="w-full max-w-4xl
          flex flex-col items-center gap-8
          bg-[rgba(255,255,255,0.05)] backdrop-blur-md
          rounded-xl border border-[rgba(168,85,247,0.3)]
          shadow-[0_0_30px_rgba(168,85,247,0.2)]
          px-5 py-8
          transition-all duration-500
          hover:shadow-[0_0_60px_rgba(168,85,247,0.4)]"
        >
          {/* Profile Image */}
          <img
            src="/profile.webp"
            alt="Profile"
            className="
              rounded-full object-cover object-top
              shadow-[0_0_25px_rgba(139,92,246,0.4)]
              w-36 h-36
              sm:w-44 sm:h-44
              md:w-56 md:h-56
            "
          />

          {/* Text */}
          <div className="w-full text-center">
            <h1
              className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-4
              drop-shadow-[0_0_10px_rgba(56,189,248,0.6)]"
            >
              About Me
            </h1>

            <p className="text-gray-200 mb-4 leading-relaxed text-sm sm:text-base">
              Halo! Saya{" "}
              <span className="font-semibold text-pink-400">
                Muhamad Rifansyah Aliyilbuni
              </span>
              , seorang lulusan <b>Teknik Informatika</b> yang memiliki
              ketertarikan mendalam pada dunia <b>pengembangan web</b>.
            </p>

            <p className="text-gray-200 leading-relaxed text-sm sm:text-base">
              Selama kuliah, saya mengerjakan berbagai proyek berbasis web —
              salah satunya sistem informasi monitoring tugas luar pegawai.
              Proyek ini memperdalam pemahaman saya terhadap <b>React</b>,{" "}
              <b>Laravel</b>, dan integrasi <b>REST API</b>.
            </p>
          </div>
        </div>

        {/* ================= EDUCATION ================= */}
        <div
          className="w-full max-w-4xl mt-12
          bg-[rgba(255,255,255,0.05)] backdrop-blur-md
          rounded-xl border border-[rgba(139,92,246,0.3)]
          shadow-[0_0_30px_rgba(139,92,246,0.2)]
          px-5 py-7 text-center"
        >
          <h2
            className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-4
            drop-shadow-[0_0_10px_rgba(56,189,248,0.6)]"
          >
            Education & Background
          </h2>

          <h3 className="text-lg sm:text-xl font-semibold text-pink-400">
            Universitas Raharja – Teknik Informatika
          </h3>

          <p className="text-gray-400 italic text-sm mb-3">2021 – 2025</p>

          <p className="text-gray-200 leading-relaxed text-sm sm:text-base">
            Selama masa perkuliahan, saya berfokus pada pengembangan web dan
            pernah mengembangkan aplikasi Android sebagai bagian dari proses
            pembelajaran.
          </p>
        </div>

        {/* ================= INTERESTS ================= */}
        <div
          className="w-full max-w-4xl mt-10
          bg-[rgba(255,255,255,0.05)] backdrop-blur-md
          rounded-xl border border-[rgba(236,72,153,0.3)]
          shadow-[0_0_30px_rgba(236,72,153,0.2)]
          px-5 py-7 text-center"
        >
          <h2
            className="text-2xl sm:text-3xl font-bold text-pink-400 mb-4
            drop-shadow-[0_0_10px_rgba(236,72,153,0.6)]"
          >
            Interests
          </h2>

          <p className="text-gray-200 leading-relaxed text-sm sm:text-base">
            Di luar dunia pemrograman, saya memiliki ketertarikan pada{" "}
            <span className="font-semibold">Gaming</span> dan{" "}
            <span className="font-semibold">Musik</span>. Keduanya membantu saya
            menjaga fokus, emosi, dan produktivitas.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default About;
