import { useCallback, useEffect, useState } from 'react';
type Props = (
  func: () => any,
  dependencies?: string[],
  initialLoding?: boolean
) => { loading: boolean; value: unknown; error: string | null };

export const useAsync: Props = (func, dependencies = []) => {
  const { execute, ...state } = useAsyncInternal(func, dependencies, true);

  useEffect(() => {
    execute();
  }, [execute]);

  return state;
};

export function useAsyncFn<Async>(
  func: () => any,
  dependencies: string[] = []
) {
  return useAsyncInternal<Async>(func, dependencies, false);
}

function useAsyncInternal<Async>(
  func: (...params: any) => any,
  dependencies: string[] = [],
  initialLoading = false
) {
  const [loading, setLoading] = useState(initialLoading);
  const [error, setError] = useState<string | null>(null);
  const [value, setValue] = useState<null | Async>(null);

  const execute = useCallback((...params) => {
    setLoading(true);
    return func(...params)
      .then((data: any) => {
        setValue(data);
        setError(null);
        return data;
      })
      .catch((error: string) => {
        setError(error);
        setValue(null);
        return Promise.reject(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, dependencies);

  return { loading, error, value, execute };
}
