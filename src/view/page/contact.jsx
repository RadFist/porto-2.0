import GoogleMaps from "../../components/google";
import Layout from "../layout/layout";
import { motion } from "motion/react";

const Contact = () => {
  return (
    <Layout>
      <section className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 py-20">
        <div className="text-center max-w-3xl">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Me</h1>
          <p className="text-gray-600 mb-10 leading-relaxed">
            Jika kamu ingin berkolaborasi, berdiskusi, atau sekadar menyapa —
            kamu bisa menghubungi saya melalui beberapa platform di bawah ini.
          </p>
        </div>

        {/* Card kontak */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
          <motion.div
            className="bg-white rounded-lg shadowBox  p-6 flex items-center gap-4 "
            whileHover={{ scale: 1.1 }}
          >
            <div className="text-blue-500 text-3xl">📧</div>
            <div>
              <h3 className="font-semibold text-gray-800">Email</h3>
              <p className="text-gray-600">
                <a
                  href="mailto:rifansyahaliyilbuni@gmail.com"
                  className="text-blue-500 hover:underline"
                >
                  rifansyahaliyilbuni@gmail.com
                </a>
              </p>
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-lg shadowBox  p-6 flex items-center gap-4 "
            whileHover={{ scale: 1.1 }}
          >
            <div className="text-green-500 text-3xl">💬</div>
            <div>
              <h3 className="font-semibold text-gray-800">WhatsApp</h3>
              <p className="text-gray-600">
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  +62 812 3456 7890
                </a>
              </p>
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-lg shadowBox p-6 flex items-center gap-4 "
            whileHover={{ scale: 1.1 }}
          >
            <div className="text-gray-800 text-3xl">💻</div>
            <div>
              <h3 className="font-semibold text-gray-800">GitHub</h3>
              <p className="text-gray-600">
                <a
                  href="https://github.com/rifansyah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  github.com/rifansyah
                </a>
              </p>
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-lg shadowBox  p-6 flex items-center gap-4 hover:shadow-lg transition"
            whileHover={{ scale: 1.1 }}
          >
            <div className="text-blue-700 text-3xl">💼</div>
            <div>
              <h3 className="font-semibold text-gray-800">LinkedIn</h3>
              <p className="text-gray-600">
                <a
                  href="https://linkedin.com/in/rifansyah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  linkedin.com/in/rifansyah
                </a>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Lokasi atau waktu kerja */}
        <div className="mt-16 text-center text-gray-600 max-w-2xl">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Availability
          </h2>
          <GoogleMaps locationParams="kab tangerang" />
          <p>
            Berdomisili di <b>Tangerang, Indonesia</b> 🌏
            <br />
            Tersedia untuk kerja remote, freelance, atau kolaborasi proyek.
          </p>
          <p className="mt-4 text-gray-500">
            Biasanya aktif antara pukul <b>09:00 – 22:00 WIB</b>.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
