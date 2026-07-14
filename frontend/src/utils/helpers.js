export const cn = (...classes) => classes.filter(Boolean).join(' ');

export function normalizeText(value) {
  return String(value || '').toLowerCase().trim();
}
