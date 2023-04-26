import { Action } from 'redux';
import { createRoutine, UnifiedRoutine } from 'redux-saga-routines';

export const getNewsListRoutine = createRoutine('GET_NEWS_LIST');

export const newsListRoutinesToNotify: UnifiedRoutine<(payload?: any) => Action>[] = [
  getNewsListRoutine
];
