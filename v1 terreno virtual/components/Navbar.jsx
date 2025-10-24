import Link from 'next/link';
export default function Navbar(){
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-semibold text-xl">TerrenosVR</Link>
        <nav className="space-x-4">
          <Link href="/" className="text-sm">Mapa</Link>
          <Link href="/create" className="text-sm">Criar terreno</Link>
          <Link href="/dashboard" className="text-sm">Dashboard</Link>
        </nav>
      </div>
    </header>
  )
}
