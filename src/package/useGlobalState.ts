import { useCallback, useEffect, useMemo } from 'react';
import useGlobalStateContext from './useGlobalStateContext';

type IValue = unknown | undefined;

const useGlobalState = (name: string, initialValue?: IValue) => {
  const [state, dispatch] = useGlobalStateContext();

  const setItem = useCallback(
    (value: IValue) => {
      dispatch({ type: 'set', payload: { name, value } });
    },
    [dispatch, name]
  );

  const removeItem = useCallback(() => {
    dispatch({ type: 'clear', payload: { name } });
  }, [dispatch, name]);

  const value = useMemo(() => {
    return state[name];
  }, [state, name]);

  useEffect(() => {
    initialValue !== undefined && !state[name] && setItem(initialValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialValue]);

  const data = useMemo(() => {
    return [value, setItem, removeItem, state];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, state]);

  return data;
};

export default useGlobalState;
