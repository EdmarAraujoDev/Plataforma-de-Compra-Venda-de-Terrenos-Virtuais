import Navbar from '../components/Navbar'
export default function Create(){
  return (
    <div>
      <Navbar />
      <main className="max-w-3xl mx-auto p-4">
        <div className="bg-white p-6 rounded shadow">
          <h1 className="text-xl font-semibold">Criar Terreno</h1>
          <form className="mt-4 space-y-3">
            <input className="w-full border p-2 rounded" placeholder="Título" />
            <textarea className="w-full border p-2 rounded" placeholder="Descrição" />
            <div className="flex gap-2">
              <input className="flex-1 border p-2 rounded" placeholder="Preço (BRL)" />
              <input className="w-40 border p-2 rounded" placeholder="Grid X" />
              <input className="w-40 border p-2 rounded" placeholder="Grid Y" />
            </div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded">Criar</button>
          </form>
        </div>
      </main>
    </div>
  )
}
