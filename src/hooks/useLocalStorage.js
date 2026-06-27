import { useState, useEffect } from "react";
import { getLocalStorage } from "../services/getLocalStorage";
import { saveLocalStorage } from "../services/saveLocalStorage";

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const saved = getLocalStorage(key);
    return saved ?? initialValue;
  });

  useEffect(() => {
    if (value !== undefined) {
      saveLocalStorage(key, value);
    }
  }, [key, value]);

  return [value, setValue];
}
