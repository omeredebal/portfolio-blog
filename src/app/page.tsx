import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdOutlineFileDownload } from 'react-icons/md';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 text-white">
      <Image
        src="/images/Biometrik.jpg"
        alt="Ömer Edebalı"
        width={160}
        height={160}
        className="rounded-full border border-gray-700 mb-6"
        priority
      />

      <h1 className="text-3xl font-bold text-center">Ömer Edebalı</h1>
      <p className="text-center text-gray-400 mt-2">
        Yazılım Mühendisliği Öğrencisi · Siber Güvenlik Tutkulusu
      </p>

      <div className="max-w-2xl mt-6 text-center text-sm text-gray-300">
        <p>
          İstanbul Sabahattin Zaim Üniversitesi'nde son sınıf Yazılım Mühendisliği öğrencisiyim.
          Web programlama, mobil geliştirme, Unity, siber güvenlik, yapay zeka ve daha birçok konuda
          akademik bilgiye sahibim. Takım çalışması ve bireysel projelerle teknik becerilerimi sürekli geliştiriyorum.
        </p>
        <p className="mt-4">
          Özellikle siber güvenlik alanına ilgi duyuyorum ve bu konuda uzmanlaşmayı hedefliyorum.
          Yeni teknolojileri öğrenmek, araştırmak ve projeye dönüştürmek benim için bir tutkudur.
        </p>
      </div>

      <div className="flex gap-4 mt-6 text-2xl text-gray-300">
        <a
          href="https://github.com/omeredebal"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/omeredebal/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          <FaLinkedin />
        </a>
        <a
          href="/files/omeredebal-cv.pdf"
          download
          className="hover:text-white"
        >
          <MdOutlineFileDownload />
        </a>
      </div>

      <Link
        href="/about"
        className="mt-8 text-sm text-blue-400 underline hover:text-blue-300"
      >
        Daha fazla bilgi →
      </Link>
    </main>
  );
}
