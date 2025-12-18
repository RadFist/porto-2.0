import { image, title } from "motion/react-client";

export const skillSet = {
  frontEnd: [
    "HTML 5",
    "CSS 3",
    "JavaScript",
    "React.js",
    "Tailwind CSS",
    "bootstrap 5",
  ],
  backEnd: ["PHP", "Laravel", "Node.js", "Express.js", "REST API", "MySQL"],
  Tools: ["Git & GitHub", "VS Code", "Postman", "Figma", "XAMPP"],
};

export const projects = [
  {
    title: "Sistem Monitoring Tugas Luar Pegawai",
    description:
      "sistem berbasis web yang dirancang untuk memantau dan mengelola kegiatan pegawai saat melakukan tugas di luar kantor. Sistem ini membantu pihak manajemen atau atasan untuk mengetahui status, lokasi, dan progres tugas yang dilakukan pegawai secara real-time, sehingga pengawasan menjadi lebih efisien dan akurat.",
    tech: ["Node.js", "Express", "React", "MySQL", "Socket.io"],
    link: "https://github.com/RadFist/Monitoring-Tugas-Luar",
    images: [
      { image: "/img/Monitoring/1.webp", title: "Login Page" },
      { image: "/img/Monitoring/2.webp", title: "Dashboard" },
      { image: "/img/Monitoring/3.webp", title: "Input Data Tugas" },
      { image: "/img/Monitoring/5.webp", title: "Detail Tugas" },
      { image: "/img/Monitoring/7.webp", title: "List Tugas" },
      { image: "/img/Monitoring/8.webp", title: "Form Laporan" },
      { image: "/img/Monitoring/9.webp", title: "Manajemen Jabatan" },
    ],
  },
  {
    title: "Catatan Keuangan",
    description:
      "Sebuah aplikasi berbasis Android yang dirancang untuk membantu pengguna mencatat, memantau, dan mengelola keuangan pribadi secara sederhana dan praktis. Aplikasi ini memudahkan pengguna dalam mengetahui aliran masuk dan keluar uang, sehingga dapat membuat perencanaan keuangan yang lebih baik.",
    tech: ["Kotlin", "XML", "Android Studio"],
    link: "https://github.com/RadFist/Monney_Management",
    images: [
      { image: "/img/Keuangan/homePage.webp", title: "Home Page" },
      { image: "/img/Keuangan/inputPage.webp", title: "Input Data" },
      { image: "/img/Keuangan/pieChart.webp", title: "Pie Chart" },
      { image: "/img/Keuangan/barChart.webp", title: "Bar Chart" },
      { image: "/img/Keuangan/lineChart.webp", title: "line Chart" },
    ],
  },
  {
    title: "Warehouse Management System",
    description:
      "Sebuah sistem perangkat lunak yang dirancang untuk mengelola dan mengoptimalkan operasi gudang atau pusat distribusi secara efisien. Sistem ini membantu perusahaan dalam mengatur aliran barang masuk (inbound), penyimpanan, pengelolaan stok, hingga pengeluaran barang (outbound) dengan lebih terstruktur dan akurat.",
    tech: ["CI3", "AJAX", "Boostrap5", "Mysql"],
    link: "Forbiden",
    images: [
      { image: "/img/wms/login.webp", title: "Login Page" },
      { image: "/img/wms/dashboard.webp", title: "Dashboard" },
      { image: "/img/wms/master data item.webp", title: "master data item" },
      {
        image: "/img/wms/master data location.webp",
        title: "master data location",
      },
      { image: "/img/wms/master data user.webp", title: "master data user" },
      { image: "/img/wms/data inventory.webp", title: "data inventoriy" },
      { image: "/img/wms/inventori.webp", title: "inventoriy" },
      { image: "/img/wms/data shipment.webp", title: "Data Shipment" },
      { image: "/img/wms/order management.webp", title: "order management" },
      { image: "/img/wms/receipt entries.webp", title: "receipt entries" },
      { image: "/img/wms/receipt list.webp", title: "receipt list" },
      { image: "/img/wms/wave cycle.webp", title: "wave cycle" },
      { image: "/img/wms/cross aplication.webp", title: "cross aplication" },
      { image: "/img/wms/authority.webp", title: "authority" },
    ],
  },
  {
    title: "Inventory Toko Roti",
    description:
      "Sistem manajemen persediaan toko roti yang menerapkan metode FIFO (First In, First Out) untuk mengelola stok bahan dan produk secara efektif dan akurat.",
    tech: ["PHP", "Data Table", "MySQL", "Boostrap5"],
    link: "https://github.com/RadFist/InventoryFIFO",
    images: [
      { image: "/img/FIFO/login.webp", title: "Login Page" },
      { image: "/img/FIFO/regist.webp", title: "Registration Page" },
      { image: "/img/FIFO/dashboard.webp", title: "Dahsboard" },
      { image: "/img/FIFO/karyawan.webp", title: "List Karyawan" },
      { image: "/img/FIFO/inputKaryawan.webp", title: "Input Data Karyawan" },
      { image: "/img/FIFO/supplier.webp", title: "List Supplier" },
      { image: "/img/FIFO/inputSupplier.webp", title: "Input Data Supplier" },
      { image: "/img/FIFO/kategori.webp", title: "Kategori" },
      { image: "/img/FIFO/inputKategori.webp", title: "Input Data kategori" },
      { image: "/img/FIFO/product.webp", title: "List Product" },
      { image: "/img/FIFO/StockIn.webp", title: "Stok Masuk Bahan" },
      {
        image: "/img/FIFO/inputStockIn.webp",
        title: "Input Data Stok Masuk Bahan",
      },

      { image: "/img/FIFO/transaksi.webp", title: "Transaksi" },
      { image: "/img/FIFO/rekapData.webp", title: "Rekap Data" },
    ],
  },
];
