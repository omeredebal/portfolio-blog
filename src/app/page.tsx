import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 text-white">
      <Image
        src="/images/Biometrik.jpg"
        alt="Ömer Edebali"
        width={160}
        height={160}
        className="rounded-full border border-gray-700 mb-6"
        priority
      />

      <h1 className="text-3xl font-bold text-center">Ömer Edebalı</h1>
      <p className="text-center text-gray-400 mt-2">Yazılım Mühendisliği Öğrencisi · Siber Güvenlik Tutkulusu</p>

      <div className="max-w-2xl mt-6 text-center text-sm text-gray-300">
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
    </main>
  );
}
