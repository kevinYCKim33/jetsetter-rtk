import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const itemApi = createApi({
  reducerPath: 'itemsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => {
    return {
      // what will it return, Items, and if it takes any arguments
      // void if putting nothing in
      getItems: builder.query<{ items: Item[] }, void>({
        query: () => 'items', // key is actually hitting the endpoint
      }),
    };
  },
});

export const { useGetItemsQuery } = itemApi;

// itemApi.endpoints.getItems
// redux under the hood, though you don't need redux...
// itemApi.reducer
// itemApi.reducerPath
