"use client";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { IData } from "../types/data";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import { search } from "../services/search";

export interface ISearch {
  data?: IData;
  loading?: boolean;
  error: any;

  isSearch: boolean;

  onChangeSearchValue: (value?: string) => void;
  onChangeFilterBy: (value: string) => void;
  onChangeFilterCheckBox: (value: CheckboxValueType[]) => void;
  clearSearch: (value: string) => void;
}

const SearchContext = createContext<ISearch>({} as ISearch);

export function SearchProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<IData>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchValue, setSearchValue] = useState<string>();
  const [filterCheckBox, setCheckbox] = useState<string[]>([]);
  const [filterBy, setFilterBy] = useState<string>("all");

  const [isSearch, setIsSearch] = useState(false);

  const params = useMemo(() => {
    return {
      q: filterBy === "locale" || searchValue === "" ? undefined : searchValue,
      hasImages: filterCheckBox.includes("hasImages"),
      isHighlight: filterCheckBox.includes("isHighlight"),
      artistOrCulture: filterBy === "artist",
      title: filterBy === "title",
      geoLocation:
        filterBy !== "locale" || searchValue === "" ? undefined : searchValue,
    };
  }, [filterCheckBox, filterBy, searchValue]);

  useEffect(() => {
    if (isSearch) {
      setData(undefined);
      setLoading(true);
      search
        .getResults(params)
        .then((results) => setData(results))
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    }
  }, [params, isSearch]);

  const clearSearch = (value: string) => {
    setSearchValue(value);
    if (filterCheckBox.length > 0) setIsSearch(true);
    else setIsSearch(false);
  };

  const onChangeSearchValue = (value?: string) => {
    setSearchValue(value);
    setIsSearch(true);
  };

  const onChangeFilterBy = (value: string) => {
    setFilterBy(value);
  };

  const onChangeFilterCheckBox = (value: CheckboxValueType[]) => {
    if (!isSearch) {
      if (value.length > 0) setIsSearch(true);
      else setIsSearch(false);
    }
    setCheckbox(value as string[]);
  };

  const providerValue = useMemo(
    () => ({
      onChangeSearchValue,
      onChangeFilterBy,
      onChangeFilterCheckBox,
      clearSearch,
      data,
      loading,
      error,
      isSearch,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [data, loading, error, isSearch]
  );

  return (
    <SearchContext.Provider value={providerValue}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  return useContext(SearchContext);
}
