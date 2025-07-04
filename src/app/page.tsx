'use client';

import Image from 'next/image';
import { FaLinkedin, FaGithub, FaMedium } from 'react-icons/fa';
import { MdOutlineFileDownload } from 'react-icons/md';
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 text-white text-center"
    >
      <Image
        src="/images/Biometrik.jpg"
        alt="Ömer Edebalıı"
        width={160}
        height={160}
        className="rounded-full border border-gray-700 mb-6"
        priority
      />

      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold"
      >
        Ömer Edebalı
      </motion.h1>

      <p className="mt-2 text-sm sm:text-base text-gray-400">
        Yazılım Mühendisliği Öğrencisi · Siber Güvenlik Tutkulusu
      </p>

      <div className="max-w-2xl mt-6 text-sm sm:text-base text-gray-300 px-2">
        <p>
          İstanbul Sabahattin Zaim Üniversitesinde son sınıf Yazılım Mühendisliği öğrencisiyim. 
          Web programlama, mobil geliştirme, Unity, siber güvenlik, yapay zeka ve daha birçok konuda akademik bilgiye sahibim.
        </p>
        <p className="mt-4">
          Özellikle siber güvenlik alanına ilgi duyuyorum ve bu konuda uzmanlaşmayı hedefliyorum. 
        </p>
      </div>

      <div className="mt-6 flex gap-4 items-center text-xl">
        <a
          href="https://github.com/omeredebal"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
          title="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/omeredebal"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://medium.com/@omeredebal"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
          title="Medium"
        >
          <FaMedium />
        </a>
        <a
          href="/files/omeredebal-cv.pdf"
          download
          title="CV'yi indir"
          className="hover:text-blue-400 transition"
        >
          <MdOutlineFileDownload />
        </a>
      </div>
    </motion.main>
  );
}
