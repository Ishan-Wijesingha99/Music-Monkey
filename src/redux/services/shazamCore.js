import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'a698bf713fmshffba8896bbc8a1dp140472jsnb4ab3b943420',
    'X-RapidAPI-Host': ''
  }
};

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', 'a698bf713fmshffba8896bbc8a1dp140472jsnb4ab3b943420')

      return headers
    }
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => '/charts/world'}),
    getSongDetails: builder.query({ query: ({ songid }) => `/tracks/details?track_id=${songid}` }),
    getSongRelated: builder.query({ query: ({ songid }) => `/tracks/related?track_id=${songid}` }),
    getArtistDetails: builder.query({ query: (artistId) => `/artists/details?artist_id=${artistId}` })
  })
})

export const {
  useGetTopChartsQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
  useGetArtistDetailsQuery
} = shazamCoreApi