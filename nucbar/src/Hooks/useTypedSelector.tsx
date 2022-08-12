import { useSelector, TypedUseSelectorHook } from 'react-redux';

import { RootState } from '../Redux/Store/rootReducer';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;