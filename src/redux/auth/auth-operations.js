import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    // baseUrl: 'https://62ef7097f5521ecad582887f.mockapi.io/',
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
    // deleteContact: builder.mutation({
    //   query: id => ({
    //     url: `/contacts/${id}`,
    //     method: 'DELETE',
    //   }),
    //   invalidatesTags: [{ type: 'Contacts' }],
    // }),
  }),
});

export const {
  // useGetUserQuery,
  // useDeleteContactMutation,
  useLoginUserMutation,
  useAddUserMutation,
} = userApi;
