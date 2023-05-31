// Our main file for making API calls
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '1559284210msh9201de8ba996a92p1b265djsn24a95e1305cf',
      'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
    }
  };
  
  fetch('https://shazam.p.rapidapi.com/charts/track', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam.p.rapidapi.com'
    })
});
