import { StatsActionsTypes, Stats } from './ActionTypes';

export const GET_PRODUCTS_STATS = 'GET_PRODUCTS_STATS';

export const getProductsStats = (stats: Stats) => ({
  type: StatsActionsTypes.GET_PRODUCTS_STATS,
  payload: stats,
});
