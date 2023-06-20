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
  page: number;
  isSearch: boolean;

  onChangeSearchValue: (value: string) => void;
  onChangeFilterBy: (value: string) => void;
  onChangeFilterCheckBox: (value: CheckboxValueType[]) => void;
  clearSearch: () => void;
  onChangePage: (value: number) => void;

  searchValue: string;
  filterCheckBox: string[];
  filterBy: string;
}

const SearchContext = createContext<ISearch>({} as ISearch);

export function SearchProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<IData>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchValue, setSearchValue] = useState<string>("");
  const [filterCheckBox, setCheckbox] = useState<string[]>([]);
  const [filterBy, setFilterBy] = useState<string>("all");

  const [isSearch, setIsSearch] = useState(false);

  const [page, setPage] = useState(1);

  const params = useMemo(() => {
    return {
      q: filterBy === "locale" || searchValue === "" ? undefined : searchValue,
      hasImages: filterCheckBox.includes("hasImages"),
      isHighlight: filterCheckBox.includes("isHighlight"),
      artistOrCulture: filterBy === "artist",
      title: filterBy === "title",
      geoLocation:
        filterBy !== "locale" || searchValue === ""
          ? undefined
          : searchValue.charAt(0).toUpperCase() + searchValue.slice(1),
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

  const clearSearch = () => {
    setPage(1);
    setSearchValue("");
    onChangeFilterBy("all");
    onChangeFilterCheckBox([]);
    setIsSearch(false);
  };

  const onChangeSearchValue = (value: string) => {
    setSearchValue(value);
    setIsSearch(true);
    setPage(1);
  };

  const onChangeFilterBy = (value: string) => {
    setFilterBy(value);
    setPage(1);
  };

  const onChangeFilterCheckBox = (value: CheckboxValueType[]) => {
    if (searchValue === "") {
      if (value.length > 0) setIsSearch(true);
      else setIsSearch(false);
    }
    setCheckbox(value as string[]);
    setPage(1);
  };

  const onChangePage = (pageNumber: number) => {
    setPage(pageNumber);
  };

  const providerValue = useMemo(
    () => ({
      onChangeSearchValue,
      onChangeFilterBy,
      onChangeFilterCheckBox,
      clearSearch,
      onChangePage,
      filterCheckBox,
      searchValue,
      filterBy,
      data,
      loading,
      error,
      isSearch,
      page,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      filterCheckBox,
      searchValue,
      filterBy,
      data,
      loading,
      error,
      isSearch,
      page,
    ]
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
