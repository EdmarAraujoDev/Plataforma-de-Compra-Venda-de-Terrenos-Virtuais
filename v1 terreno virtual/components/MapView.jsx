import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

export default function MapView({items}){
  const center = [ -23.55052, -46.633308 ];
  return (
    <div className="rounded overflow-hidden">
      <MapContainer center={center} zoom={13} scrollWheelZoom={false} className="leaflet-container">
        <TileLayer
          attribution='&copy; OpenStreetMap'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {items.map(it => (
          <Marker key={it.id} position={[center[0] + (0.01 * (it.grid_x-10)), center[1] + (0.01 * (it.grid_y-10))]}>
            <Popup>
              <div className="w-48">
                <strong>{it.title}</strong>
                <div>R$ {it.price.toLocaleString()}</div>
                <a href={`/terrains/${it.id}`} className="text-blue-600">Ver</a>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}
