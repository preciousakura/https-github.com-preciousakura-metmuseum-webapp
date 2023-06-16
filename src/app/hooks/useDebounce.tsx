import { useRef } from "react";

export default function useDebounce(
  fn: (param: string) => void,
  delay: number
) {
  const timeoutRef = useRef<any>(null);

  function debouncedFn(param: string) {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      fn(param);
    }, delay);
  }

  return debouncedFn;
}
