import {
  StatsActions,
  StatsActionsTypes,
  Stats,
} from '../Actions/Stats/ActionTypes';

interface State {
  productsStats: Stats;
  loading: boolean;
  error: string | null;
}
const INITIAL_STATE = {
  productsStats: {
    stats: null,
    total: null,
    status: null,
  },
  loading: false,
  error: null,
};

const statsReducer = (state: State = INITIAL_STATE, action: StatsActions) => {
  switch (action.type) {
    case StatsActionsTypes.GET_PRODUCTS_STATS:
      return {
        ...state,
        productsStats: {
          stats: action.payload.stats,
          total: action.payload.total,
          status: action.payload.status,
        },
        loading: false,
      };
    case StatsActionsTypes.START_STATS:
      return { ...state, loading: true };
    case StatsActionsTypes.FAIL_STATS:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export default statsReducer;
