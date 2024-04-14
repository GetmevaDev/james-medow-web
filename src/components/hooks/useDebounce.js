import { useEffect, useState } from "react";

export function useDebounce(value, ms) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const id = setTimeout(() => {
      setDebouncedValue(value);
    }, ms);

    return () => clearTimeout(id);
  }, [value, ms]);

  return debouncedValue;
}
