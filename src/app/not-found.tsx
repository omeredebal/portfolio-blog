'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center text-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-6xl font-bold text-white">404</h1>
      <p className="mt-4 text-gray-400 text-lg">
        Üzgünüz, aradığınız sayfa bulunamadı.
      </p>
      <Link
        href="/"
        className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition duration-300"
      >
        Anasayfaya Dön
      </Link>
    </motion.div>
  );
}
