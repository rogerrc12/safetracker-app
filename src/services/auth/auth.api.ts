import baseApi from "@src/api/baseApi";

interface ILoginCredentials {
  username: string;
  password: string;
}

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<string, ILoginCredentials>({
      query: (credentials) => {
        return {
          url: "/Account/login",
          method: "POST",
          body: credentials,
        };
      },
      transformResponse: (rawResult: { token: string }) => {
        return rawResult.token;
      },
    }),
  }),
  overrideExisting: true,
});

export const { useLoginMutation } = authApi;
