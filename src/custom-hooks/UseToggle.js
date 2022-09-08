import React, { useCallback, useState } from "react";

export const useToggle = () => {
  const initialState = false;
  const [state, setState] = useState(initialState);

  const toggle = useCallback(() => {
    setState((state) => !state);
  });

  return [toggle, state];
};
