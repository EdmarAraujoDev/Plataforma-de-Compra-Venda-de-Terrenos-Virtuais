import Navbar from '../components/Navbar'
import MapView from '../components/MapView'
import TerrainCard from '../components/TerrainCard'
import useSWR from 'swr'
import { fetchTerrains } from '../lib/mockApi'

const fetcher = () => fetchTerrains();

export default function Home(){
  const { data: terrains, error } = useSWR('terrains', fetcher);
  return (
    <div>
      <Navbar />
      <main className="max-w-6xl mx-auto p-4">
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <h1 className="text-2xl font-bold mb-3">Mapa de Terrenos</h1>
            <MapView items={terrains || []} />
            <div className="mt-4">
              <h2 className="text-xl font-semibold">Explorar</h2>
              <p className="text-sm text-gray-500">Clique nos marcadores para ver detalhes.</p>
            </div>
          </div>
          <aside>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="font-semibold">Terrenos disponíveis</h3>
              <div className="mt-3 space-y-3">
                {terrains ? terrains.map(t => <TerrainCard key={t.id} terrain={t} />) : <div>Carregando...</div>}
              </div>
            </div>
          </aside>
        </section>
      </main>
    </div>
  )
}
