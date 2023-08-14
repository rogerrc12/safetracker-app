import { createApi } from "@reduxjs/toolkit/query/react";
import baseQUeryWithAuth from "./baseQuery";

const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQUeryWithAuth,
  endpoints: () => ({}),
});

export default baseApi;
