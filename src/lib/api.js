/* React-specific entry point that automatically generates
   hooks corresponding to the defined endpoints */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const Api = createApi({
  reducerPath: "Api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api" }),
  endpoints: (build) => ({
    getAllProducts: build.query({
      query: () => `/products`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllProductsQuery } = Api;
