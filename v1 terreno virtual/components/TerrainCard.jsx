import Link from 'next/link';
export default function TerrainCard({terrain}){
  return (
    <div className="border rounded p-3 shadow-sm hover:shadow-md transition">
      <img src={terrain.image} alt="" className="h-40 w-full object-cover rounded" />
      <h3 className="mt-2 font-semibold">{terrain.title}</h3>
      <p className="text-sm text-gray-600">{terrain.description}</p>
      <div className="mt-3 flex items-center justify-between">
        <div className="text-lg font-bold">R$ {terrain.price.toLocaleString()}</div>
        <Link href={`/terrains/${terrain.id}`} className="px-3 py-1 bg-blue-600 text-white rounded text-sm">Ver</Link>
      </div>
    </div>
  )
}
