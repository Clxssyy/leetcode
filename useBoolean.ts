import { useState } from 'react';

/**
 * @param boolean initialValue
 * @return Object
 */
export default function useBoolean(initialValue = false) {
  const [bool, setBool] = useState(initialValue);

  const setTrue = () => setBool(true);
  const setFalse = () => setBool(false);

  return { value: bool, setTrue, setFalse };
}
