import { useCallback, useState } from "react";
import { debounce } from "lodash";

export function useDebouncedValue(initialValue: string, delay: number = 800) {
  const [value, setValue] = useState(initialValue);

  const debouncedValue = useCallback(
    debounce((newValue: string) => {
      setValue(newValue);
    }, delay),
    []
  );

  return [value, debouncedValue] as const;
}
