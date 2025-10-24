import { useRouter } from 'next/router'
import Navbar from '../../components/Navbar'
import { fetchTerrainById } from '../../lib/mockApi'
import useSWR from 'swr'

const fetcher = (id) => fetchTerrainById(id);

export default function TerrainPage(){
  const router = useRouter();
  const { id } = router.query;
  const { data: terrain } = useSWR(() => id ? `terrain-${id}` : null, () => fetcher(id));

  if(!terrain) return (
    <div>
      <Navbar />
      <main className="max-w-4xl mx-auto p-4">Carregando...</main>
    </div>
  )

  return (
    <div>
      <Navbar />
      <main className="max-w-4xl mx-auto p-4">
        <div className="bg-white p-6 rounded shadow">
          <img src={terrain.image} className="w-full h-72 object-cover rounded" />
          <h1 className="text-2xl font-bold mt-4">{terrain.title}</h1>
          <p className="text-gray-700 mt-2">{terrain.description}</p>
          <div className="mt-4 flex items-center justify-between">
            <div className="text-2xl font-bold">R$ {terrain.price.toLocaleString()}</div>
            <button className="px-4 py-2 bg-green-600 text-white rounded">Comprar</button>
          </div>
        </div>
      </main>
    </div>
  )
}
