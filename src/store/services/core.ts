// core.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { toast } from "sonner";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_BASE_API_URL as string, 
  prepareHeaders: (headers) => {
    headers.set("Content-Type", "application/json");
    return headers;
  },
});

const baseQueryWith401Handling: typeof baseQuery = async (
  args,
  api,
  extraOptions
) => {
  const result = await baseQuery(args, api, extraOptions);

  if (result.error?.status === 401 || result.error?.status === 403) {
    localStorage.clear();
    window.location.replace("/");
    toast.error(`Error ${result.error.status} - Unauthorized`);
  }

  return result;
};

export const api = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWith401Handling,
  keepUnusedDataFor: 5,
  tagTypes: ["Product", "Products"],
  endpoints: (build) => ({
    healthCheck: build.query<HealthCheck, void>({
      query: () => ({ url: "/", method: "GET" }),
    }),
  }),
});
