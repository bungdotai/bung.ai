const WINGDOME_LOCATIONS = [
  { name: "Wingdome Seattle", lat: 47.6062, lng: -122.3321 },
  { name: "Wingdome Bellevue", lat: 47.6101, lng: -122.2015 },
  { name: "Wingdome Lynnwood", lat: 47.8209, lng: -122.3151 },
];

function haversineDistance(
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number
): number {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

export function findNearestWingdome(lat: number, lng: number): string {
  let nearest = WINGDOME_LOCATIONS[0];
  let minDist = Infinity;
  for (const loc of WINGDOME_LOCATIONS) {
    const dist = haversineDistance(lat, lng, loc.lat, loc.lng);
    if (dist < minDist) {
      minDist = dist;
      nearest = loc;
    }
  }
  return nearest.name;
}
