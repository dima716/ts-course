type Order = [
  id: string,
  items: string[],
  status?: 'pending' | 'completed',
  ...meta: [string, any][],
];

function processOrder([id, items, status, ...meta]: Order): string {
  return `Заказ ${id}. Товары: ${items.join(', ')}. Статус: ${status || 'не указан'}${meta.length ? `${meta.map((meta) => `Метаданные: ${meta[0]}: ${meta[1]}`).join(', ')}` : ''}`;
}
