export enum StatsActionsTypes {
  START_STATS = 'START_STATS',
  GET_PRODUCTS_STATS = 'GET_PRODUCTS_STATS',
  FINISH_STATS = 'FINISH_STATS',
  FAIL_STATS = 'FAIL_STATS',
}

interface startStats {
  type: StatsActionsTypes.START_STATS;
}
export interface Stats {
  stats: any | null;
  total: number | null;
  status: any | null;
}
interface getProductsStats {
  type: StatsActionsTypes.GET_PRODUCTS_STATS;
  payload: Stats;
}

interface finishStats {
  type: StatsActionsTypes.FINISH_STATS;
}

interface failStats {
  type: StatsActionsTypes.FAIL_STATS;
  payload: string;
}

export type StatsActions =
  | startStats
  | getProductsStats
  | finishStats
  | failStats;
