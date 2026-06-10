export function getLocalStorage(key) {
  const saved = localStorage.getItem(key);
  return saved ? JSON.parse(saved) : null;
}
