import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().authSlice.token;
      console.log(token);
      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['User'],
  endpoints: builder => ({
    // getUser: builder.query({
    //   query: () => '/users/current',
    //   providesTags: ['User'],
    // }),
    addUser: builder.mutation({
      query: newUser => ({
        url: '/users/signup',
        method: 'POST',
        body: newUser,
      }),
      invalidatesTags: [{ type: 'User' }],
    }),
    loginUser: builder.mutation({
      query: logUser => ({
        url: '/users/login',
        method: 'POST',
        body: logUser,
      }),
      invalidatesTags: [{ type: 'User' }],
    }),
    logOutUser: builder.mutation({
      query: () => ({
        url: '/users/logout',
        method: 'POST',
      }),
      invalidatesTags: [{ type: 'User' }],
    }),
  }),
});

export const {
  // useGetUserQuery,
  // useDeleteContactMutation,
  useLoginUserMutation,
  useAddUserMutation,
  useLogOutUserMutation,
} = userApi;
// Authorization
