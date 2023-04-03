export const storage = (storage: string) => {
  const localStorageMovie = localStorage.getItem(storage);
  let data;

  if (!localStorageMovie) {
    localStorage.setItem(storage, JSON.stringify([]));
    data = [];
  } else {
    data = JSON.parse(localStorageMovie);
  }

  return data;
}