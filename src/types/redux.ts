import { ImmutableStateInvariantMiddlewareOptions, SerializableStateInvariantMiddlewareOptions } from '@reduxjs/toolkit';
import { IStory } from './models';

interface ThunkOptions<E = any> {
  extraArgument: E;
}

export interface GetDefaultMiddlewareOptions {
  thunk?: boolean | ThunkOptions;
  immutableCheck?: boolean | ImmutableStateInvariantMiddlewareOptions;
  serializableCheck?: boolean | SerializableStateInvariantMiddlewareOptions;
}

export interface INewsListState {
  newsList: {
    data: Array<IStory>,
    isFetching: boolean
  }
}

export interface ICommentsState {
  comments: {
    data: { [key: number]: Array<IStory> },
    isFetching: boolean
  }
}