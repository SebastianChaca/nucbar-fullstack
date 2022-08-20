import { useCallback, useEffect, useState } from 'react';
type Props = (
  func: () => any,
  dependencies?: string[],
  initialLoding?: boolean
) => { loading: boolean; value: unknown; error: string | null };

// export function useAsync<ValueInterface>(
//   func: (params: any) => ValueInterface,
//   dependencies: string[] = []
// ) {
//   const { execute, ...state } = useAsyncInternal<ValueInterface>(
//     func,
//     dependencies,
//     true
//   );

//   useEffect(() => {
//     execute();
//   }, [execute]);

//   return state;
// }

// export function useAsyncFn<ValueInterface>(
//   func: ()=> Promise<ValueInterface>,
//   dependencies: string[] = []
// ) {
//   return useAsyncInternal(func, dependencies, false);
// }

// function useAsyncInternal<ValueInterface>(
//   func:()=> Promise<ValueInterface>,
//   dependencies: string[] = [],
//   initialLoading = false
// ) {
//   const [loading, setLoading] = useState(initialLoading);
//   const [error, setError] = useState<string | null>(null);
//   const [value, setValue] = useState<null | ValueInterface>(null);

//   const execute = useCallback((params: any) => {
//     setLoading(true);
//     return func(params: any)
//       .then((value: ValueInterface) => {
//         setValue(value);
//         setError(null);
//         return value;
//       })
//       .catch((error: string) => {
//         setError(error);
//         setValue(null);
//         return Promise.reject(error);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, dependencies);

//   return { loading, error, value, execute };
// }
