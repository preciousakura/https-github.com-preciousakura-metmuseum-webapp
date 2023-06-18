import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export interface IFavorites {
  favorites: number[];
  getFavorites: () => void;
  isFavorite: (object: number) => boolean;
  setFavorite: (object: number) => void;
}

const FavoritesContext = createContext<IFavorites>({} as IFavorites);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    const fav = getFavorites();
    if (fav) setFavorites(fav);
    else setFavorites([]);
  }, [flag]);

  const getFavorites = () => {
    const fav = window.localStorage.getItem("@favorites");
    if (fav) return JSON.parse(fav);

    return null;
  };

  const isFavorite = (object: number) => {
    let f = new Array();
    const fav = getFavorites();
    if (fav) f = fav;

    return f.includes(object);
  };

  const setFavorite = (object: number) => {
    let f = new Array();
    const fav = getFavorites();
    if (fav) f = fav;

    if (f.includes(object)) {
      const obj = f.findIndex((i) => i === object);
      f.splice(obj, 1);
    } else {
      f.push(object);
    }
    window.localStorage.setItem("@favorites", JSON.stringify(f));
    setFlag(!flag);
  };

  const providerValue = useMemo(
    () => ({
      favorites,
      getFavorites,
      isFavorite,
      setFavorite,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [favorites]
  );

  return (
    <FavoritesContext.Provider value={providerValue}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}
