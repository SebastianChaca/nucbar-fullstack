import React, { useContext } from 'react';
import { ListCardContext } from './ListCardProvider';

const useListContext = () => useContext(ListCardContext);

export default useListContext;
