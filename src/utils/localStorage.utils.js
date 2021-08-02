export function saveToLocalStorage(itemName, item) {
  window.localStorage.setItem(itemName, item);
}

export function getFromLocalStorage(itemName) {
  return window.localStorage.getItem(itemName);
}

export function removeFromLocalStorage(itemName) {
  window.localStorage.removeItem(itemName);
}
