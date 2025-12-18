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
    link: "#",
    images: [
      { image: "/img/Keuangan/homePage.webp", title: "Home Page" },
      { image: "/img/Keuangan/inputData.webp", title: "Input Data" },
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
    link: "#",
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
    title: "Task Management App",
    description:
      "A minimalist task management application to organize and track personal productivity. Includes authentication and real-time updates.",
    tech: ["Node.js", "Express", "React", "MongoDB"],
    link: "#",
    images: [
      { image: "/img/Monitoring/1.webp", title: "Login Page" },
      { image: "/img/Monitoring/2.webp", title: "Dashboard" },
      { image: "/img/Monitoring/3.webp", title: "Data Tugas Luar" },
    ],
  },
  {
    title: "E-Commerce Admin Panel",
    description:
      "An admin dashboard for managing products, orders, and users in an online store with clean UI and secure CRUD operations.",
    tech: ["Laravel", "Vue.js", "MySQL"],
    link: "#",
    images: [
      { image: "/img/Monitoring/1.webp", title: "Login Page" },
      { image: "/img/Monitoring/2.webp", title: "Dashboard" },
      { image: "/img/Monitoring/3.webp", title: "Data Tugas Luar" },
    ],
  },
];
