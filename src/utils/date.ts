import { MONTHS } from '../const';

export function formatDate(dateString: string): string {
  const [day, month, year] = dateString.split(' ');
  const date = new Date(Number(year), MONTHS[month], Number(day));
  return date.toLocaleDateString('ru-RU');
}
