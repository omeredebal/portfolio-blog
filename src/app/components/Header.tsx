export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex gap-4 justify-center">
        <a href="/" className="hover:underline">Anasayfa</a>
        <a href="/projects" className="hover:underline">Projeler</a>
        <a href="/blog" className="hover:underline">Makaleler</a>
        <a href="/contact" className="hover:underline">İletişim</a>
      </nav>
    </header>
  );
}
