// Our main file for making API calls
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam.p.rapidapi.com',
        prepareHeaders:() => {
            headers.set('X-RapidAPI-Key','1559284210msh9201de8ba996a92p1b265djsn24a95e1305cf');

            return headers;
        }, 
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({query: '/cahrts/world'}),
    }),
});

export const {
    useGetTopChartsQuery,
} = shazamCoreApi
