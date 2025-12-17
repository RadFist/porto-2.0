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
      "A web-based system for managing and monitoring employee assignments efficiently. Built with Express and React, featuring secure role-based access and dynamic PDF reports.",
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
      "An interactive and visually appealing portfolio showcasing my projects and skills as a web developer. Designed with modern animations and responsive layouts.",
    tech: ["Kotlin", "XML", "Android Studio"],
    link: "#",
    images: [
      { image: "/img/Monitoring/1.webp", title: "Login Page" },
      { image: "/img/Monitoring/2.webp", title: "Dashboard" },
      { image: "/img/Monitoring/3.webp", title: "Data Tugas Luar" },
    ],
  },
  {
    title: "API Integration Dashboard",
    description:
      "A data visualization dashboard integrating multiple APIs using Axios, presenting analytics and performance metrics with Recharts.",
    tech: ["Next.js", "Axios", "Recharts"],
    link: "#",
    images: [
      { image: "/img/Monitoring/1.webp", title: "Login Page" },
      { image: "/img/Monitoring/2.webp", title: "Dashboard" },
      { image: "/img/Monitoring/3.webp", title: "Data Tugas Luar" },
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
  {
    title: "Chat Application",
    description:
      "A real-time chat app with private and group messaging features, using WebSocket for instant communication.",
    tech: ["React", "Socket.io", "Node.js"],
    link: "#",
    images: [
      { image: "/img/Monitoring/1.webp", title: "Login Page" },
      { image: "/img/Monitoring/2.webp", title: "Dashboard" },
      { image: "/img/Monitoring/3.webp", title: "Data Tugas Luar" },
    ],
  },
];
