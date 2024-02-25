export function formatPhone(phone: string): string {
  return phone.replace('(', '').replace(')', '');
}
