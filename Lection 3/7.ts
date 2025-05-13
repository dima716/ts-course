type Coordinates = [
  latitude: number,
  longitude: number,
  ...landmarks: string[],
];

function describeLocation([lat, lon, ...landmarks]: Coordinates): string {
  return `Широта: ${lat}, Долгота: ${lon}${landmarks.length ? `. Ориентиры: ${landmarks.join(', ')}` : ''}`;
}

export {};
