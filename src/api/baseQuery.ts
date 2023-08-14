import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { BASE_API_URL } from "@src/constants/BASE_API_URL";

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_API_URL,
  prepareHeaders(headers, api) {
    console.log(api);
    return headers;
  },
});

const baseQUeryWithAuth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (args, api, extraOptions = {}) => {
  const result = await baseQuery(args, api, extraOptions);

  if (result?.error) console.log(result?.error);

  if (result?.error?.status === 401) {
    // 401
  }
  return result;
};

export default baseQUeryWithAuth;
