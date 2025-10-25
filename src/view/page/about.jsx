import Layout from "../layout/layout";

const About = () => {
  return (
    <Layout>
      <section className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 py-20">
        <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-12 max-w-6xl">
          {/* Foto profil */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://via.placeholder.com/200" // ganti nanti dengan fotomu
              alt="Profile"
              className="rounded-full shadow-lg w-64 h-64 object-cover"
            />
          </div>

          {/* Deskripsi tentang diri */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">About Me</h1>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Halo! Saya{" "}
              <span className="font-semibold text-blue-500">
                Muhamad Rifansyah Aliyilbuni
              </span>
              , seorang lulusan <b>Teknik Informatika</b> yang tertarik pada
              dunia pengembangan web dan kecerdasan buatan. Saya senang
              mempelajari hal-hal baru dan mencari cara agar teknologi dapat
              membantu meningkatkan efisiensi serta mempermudah pekerjaan
              manusia.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Dalam perjalanan akademik saya, saya telah membuat beberapa proyek
              berbasis web — termasuk sistem informasi monitoring tugas luar
              pegawai yang membantu proses administrasi menjadi lebih efisien
              dan terstruktur. Proyek tersebut menjadi bagian penting dari
              skripsi saya dan memperdalam pemahaman saya terhadap pengembangan
              sistem.
            </p>
          </div>
        </div>

        {/* Bagian pendidikan */}
        <div className="mt-20 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Education & Background
          </h2>
          <div className="bg-white rounded-lg shadow p-6 text-gray-700">
            <h3 className="text-xl font-semibold mb-2">
              Universitas Raharja – Teknik Informatika
            </h3>
            <p className="text-gray-600 mb-2">
              <i>2021 – 2025</i>
            </p>
            <p className="leading-relaxed">
              Fokus studi pada pengembangan sistem berbasis web, integrasi AI,
              dan keamanan data. Selama kuliah, saya aktif mengembangkan
              beberapa proyek berbasis React dan Laravel, serta mempelajari
              konsep API dan pengelolaan data secara efisien.
            </p>
          </div>
        </div>

        {/* Minat pribadi */}
        <div className="mt-16 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Interests</h2>
          <p className="text-gray-600 leading-relaxed">
            Di luar dunia pemrograman, saya tertarik dengan <b>Stoikisme</b> dan
            pengembangan diri. Saya juga senang mengeksplor topik seperti{" "}
            <b>AI</b>, <b>psikologi manusia</b>, dan <b>teknologi masa depan</b>{" "}
            — karena saya percaya, keseimbangan antara logika dan filosofi dapat
            membantu membentuk cara berpikir yang lebih matang dan produktif.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default About;
