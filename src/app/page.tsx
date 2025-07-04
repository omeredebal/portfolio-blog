import Image from 'next/image';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdOutlineFileDownload } from 'react-icons/md';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 text-white text-center">
      <Image
        src="/images/Biometrik.jpg"
        alt="Ömer Edebalı"
        width={160}
        height={160}
        className="rounded-full border border-gray-700 mb-6"
        priority
      />

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Ömer Edebalı</h1>
      <p className="mt-2 text-sm sm:text-base text-gray-400">
        Yazılım Mühendisliği Öğrencisi · Siber Güvenlik Tutkulusu
      </p>

      <div className="max-w-2xl mt-6 text-sm sm:text-base text-gray-300 px-2">
        <p>
          İstanbul Sabahattin Zaim Üniversitesi'nde son sınıf Yazılım Mühendisliği öğrencisiyim. 
          Web programlama, mobil geliştirme, Unity, siber güvenlik, yapay zeka ve daha birçok konuda akademik bilgiye sahibim.
          Takım çalışması ve bireysel projelerle teknik becerilerimi sürekli geliştiriyorum.
        </p>
        <p className="mt-4">
          Özellikle siber güvenlik alanına ilgi duyuyorum ve bu konuda uzmanlaşmayı hedefliyorum. Yeni teknolojileri öğrenmek, 
          araştırmak ve projeye dönüştürmek benim için bir tutkudur.
        </p>
      </div>

      <div className="mt-6 flex gap-4 items-center text-xl">
        <a
          href="https://github.com/omeredebal"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/omeredebal"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
        >
          <FaLinkedin />
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
    </main>
  );
}
