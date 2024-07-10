import { useState } from 'react'

type ReturnType = {
  value: boolean;
  toggle: () => void;
  setTrue: () => void;
  setFalse: () => void;
};

const useBoolean = (initialValue: boolean): ReturnType => {
  const [value, setValue] = useState<boolean>(initialValue);

  const toggle = (): void => {
    setValue(prevValue => !prevValue);
  };

  const setTrue = (): void => {
    setValue(true);
  };

  const setFalse = (): void => {
    setValue(false);
  };

  return {
    value,
    toggle,
    setTrue,
    setFalse,
  };
};

export default useBoolean;