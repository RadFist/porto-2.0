import Layout from "../layout/layout";

const About = () => {
  return (
    <Layout>
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-10 pt-12 text-gray-100">
        <div className="flex flex-col items-center justify-center gap-12 max-w-4xl bg-[rgba(255,255,255,0.05)] backdrop-blur-md rounded-xl border border-[rgba(168,85,247,0.3)] shadow-[0_0_30px_rgba(168,85,247,0.2)] py-10 transition-all duration-500 hover:shadow-[0_0_60px_rgba(168,85,247,0.4)]">
          {/* img profile */}
          <div className="flex justify-center">
            <img
              src="/profile.webp"
              alt="Profile"
              className="rounded-full shadow-[0_0_30px_rgba(139,92,246,0.4)] w-64 h-64 object-cover  object-top"
            />
          </div>

          {/* Deskripsi tentang diri */}
          <div className="md:w-1/2 text-center ">
            <h1 className="text-4xl font-bold text-cyan-400 mb-4 drop-shadow-[0_0_10px_rgba(56,189,248,0.6)]">
              About Me
            </h1>
            <p className="text-gray-200 mb-4 leading-relaxed">
              Halo! Saya{" "}
              <span className="font-semibold text-pink-400">
                Muhamad Rifansyah Aliyilbuni
              </span>
              , seorang lulusan <b>Teknik Informatika</b> yang memiliki
              ketertarikan mendalam pada dunia <b>pengembangan web</b>. Saya
              menikmati proses belajar hal-hal baru dan mencari cara agar
              teknologi bisa membantu meningkatkan efisiensi, efektif, dan
              kualitas hidup manusia.
            </p>
            <p className="text-gray-200 mb-6 leading-relaxed">
              Selama kuliah, saya mengerjakan berbagai proyek berbasis web —
              salah satunya sistem informasi monitoring tugas luar pegawai yang
              saya rancang untuk membantu proses administrasi menjadi lebih
              efisien dan terstruktur. Proyek tersebut memperdalam pemahaman
              saya terhadap pengembangan sistem berbasis <b>React</b> dan{" "}
              <b>Laravel</b>, serta integrasi data melalui <b>REST API</b>.
            </p>
          </div>
        </div>

        {/* Bagian pendidikan */}
        <div className="mt-20 max-w-4xl text-center bg-[rgba(255,255,255,0.05)] backdrop-blur-md rounded-xl border border-[rgba(139,92,246,0.3)] shadow-[0_0_30px_rgba(139,92,246,0.2)] p-8">
          <h2 className="text-3xl font-bold text-cyan-400 mb-6 drop-shadow-[0_0_10px_rgba(56,189,248,0.6)]">
            Education & Background
          </h2>
          <div className="text-gray-200">
            <h3 className="text-xl font-semibold mb-2 text-pink-400">
              Universitas Raharja – Teknik Informatika
            </h3>
            <p className="text-gray-400 mb-3">
              <i>2021 – 2025</i>
            </p>
            <p className="leading-relaxed">
              {" "}
              Selama masa perkuliahan, saya berfokus pada projek-projek
              pengembangan web (web development) dan juga pernah mengembangkan
              aplikasi Android sebagai bagian dari proses pembelajaran dan
              pengembangan keterampilan teknis saya.
            </p>
          </div>
        </div>

        {/* Minat pribadi */}
        <div className="mt-16 max-w-4xl text-center bg-[rgba(255,255,255,0.05)] backdrop-blur-md rounded-xl border border-[rgba(236,72,153,0.3)] shadow-[0_0_30px_rgba(236,72,153,0.2)] p-8">
          <h2 className="text-3xl font-bold text-pink-400 mb-6 drop-shadow-[0_0_10px_rgba(236,72,153,0.6)]">
            Interests
          </h2>
          <p className="text-gray-200 leading-relaxed">
            Di luar dunia pemrograman, saya memiliki ketertarikan pada{" "}
            <span className="font-semibold">Gaming</span>
            dan <span className="font-semibold">Musik</span>. Melalui gaming,
            saya belajar melatih fokus, strategi, serta kemampuan mengambil
            keputusan secara cepat. Sementara itu, musik menjadi sarana bagi
            saya untuk menjaga keseimbangan emosi, meningkatkan konsentrasi, dan
            membantu saya tetap produktif, terutama saat mengerjakan proyek atau
            mempelajari hal-hal baru.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default About;
