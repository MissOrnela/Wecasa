export function formatEuroFromCents(cents: number): string {
  const euros = cents / 100;
  return euros.toLocaleString("fr-FR", { style: "currency", currency: "EUR" });
}

export function formatDuration(minutes: number): string {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  if (h <= 0) return `${m}min`;
  if (m === 0) return `${h}h`;
  return `${h}h${String(m).padStart(2, "0")}`;
}

export function isValidDate(value: string): boolean {
  const result =
    new Date(value) > new Date() &&
    new Date(value).getHours() >= 7 &&
    new Date(value).getHours() <= 22;
  return result;
}
