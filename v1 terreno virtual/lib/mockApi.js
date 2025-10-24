export const terrains = [
  {
    id: 't1', title: 'Lote Verde', description: 'Ótimo lote perto da praça central', owner: 'user1', price: 1200, grid_x: 10, grid_y: 8, image: '/images/lot1.jpg'
  },
  {
    id: 't2', title: 'Lote Azul', description: 'Vista para o lago virtual', owner: 'user2', price: 4500, grid_x: 12, grid_y: 7, image: '/images/lot2.jpg'
  },
  {
    id: 't3', title: 'Lote Áurea', description: 'Região nobre, próximo a hub de experiências', owner: 'user3', price: 15000, grid_x: 5, grid_y: 16, image: '/images/lot3.jpg'
  }
];

export async function fetchTerrains() {
  await new Promise(r => setTimeout(r, 300));
  return terrains;
}

export async function fetchTerrainById(id) {
  await new Promise(r => setTimeout(r, 200));
  return terrains.find(t => t.id === id) || null;
}
