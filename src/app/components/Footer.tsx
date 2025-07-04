export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-400 py-6 mt-12">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 text-sm">
        <p>&copy; {new Date().getFullYear()} Ömer Edebalı. Tüm hakları saklıdır.</p>  
      </div>
    </footer>
  );
}
