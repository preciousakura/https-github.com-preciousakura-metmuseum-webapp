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
  page: number;
  onChangePage: (value: number) => void;
  onChangeSearchValue: (value?: string) => void;
  onChangeFilterBy: (value: string) => void;
  onChangeFilterCheckBox: (value: CheckboxValueType[]) => void;
  onSearch: () => void;
}

const SearchContext = createContext<ISearch>({} as ISearch);

export function SearchProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<IData>();
  const [searchValue, setSearchValue] = useState<string>();
  const [filterCheckBox, setCheckbox] = useState<string[]>([]);
  const [filterBy, setFilterBy] = useState<string>("all");
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const onChangePage = (pageNumber: number) => {
    setPage(pageNumber);
  };

  useEffect(() => {
    search
      .getResults({})
      .then((results) => {
        setData(results);
        setPage(1);
      })
      .catch((err) => setError(err));
  }, []);

  const onSearch = () => {
    if (searchValue) {
      search
        .getResults({
          q: searchValue,
        })
        .then((results) => {
          setData(results);
          setPage(1);
        })
        .catch((err) => setError(err));
    }
  };

  const onChangeSearchValue = (value?: string) => {
    setSearchValue(value);
  };

  const onChangeFilterBy = (value: string) => {
    setFilterBy(value);
  };

  const onChangeFilterCheckBox = (value: CheckboxValueType[]) => {
    setCheckbox(value as string[]);
  };

  const providerValue = useMemo(
    () => ({
      onChangeSearchValue,
      onChangeFilterBy,
      onChangeFilterCheckBox,
      onChangePage,
      data,
      page,
      onSearch,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [data, page]
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
