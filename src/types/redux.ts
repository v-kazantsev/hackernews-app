import { ImmutableStateInvariantMiddlewareOptions, SerializableStateInvariantMiddlewareOptions } from '@reduxjs/toolkit';

interface ThunkOptions<E = any> {
  extraArgument: E;
}

export interface GetDefaultMiddlewareOptions {
  thunk?: boolean | ThunkOptions;
  immutableCheck?: boolean | ImmutableStateInvariantMiddlewareOptions;
  serializableCheck?: boolean | SerializableStateInvariantMiddlewareOptions;
}
