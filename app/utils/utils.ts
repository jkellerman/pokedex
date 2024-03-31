export function formatId(id: number) {
  const paddedId = String(id).padStart(4, "0");
  return `#${paddedId}`;
}
