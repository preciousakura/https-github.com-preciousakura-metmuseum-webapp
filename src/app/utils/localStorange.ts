export function getFavorites() {
  const fav = window.localStorage.getItem("@favorites");
  if (fav) return JSON.parse(fav);

  return null;
}

export function isFavorite(object: number) {
  let favorites = new Array();
  const fav = getFavorites();
  if (fav) favorites = fav;

  return favorites.includes(object);
}

export function setFavorite(object: number) {
  let favorites = new Array();
  const fav = getFavorites();
  if (fav) favorites = fav;

  if (favorites.includes(object)) {
    const obj = favorites.findIndex((i) => i === object);
    favorites.splice(obj, 1);
  } else {
    favorites.push(object);
  }
  window.localStorage.setItem("@favorites", JSON.stringify(favorites));
}
