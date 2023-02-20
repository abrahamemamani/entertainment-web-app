import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/', }),
  endpoints: (builder) => ({
    getMovies: builder.query<void, void>({
      query: () => 'movies/',
    }),
  }),
});

export const { useGetMoviesQuery, } = moviesApi;
