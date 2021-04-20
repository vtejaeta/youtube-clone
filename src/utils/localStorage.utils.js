export function saveToLocalStorage(itemName, item) {
  localStorage.setItem(itemName, item);
}

export function getFromLocalStorage(itemName) {
  return localStorage.getItem(itemName);
}

export function removeFromLocalStorage(itemName) {
  localStorage.removeItem(itemName);
}
