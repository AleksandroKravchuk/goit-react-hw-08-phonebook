import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://62ef7097f5521ecad582887f.mockapi.io/',
  }),
  tagTypes: ['User'],
  endpoints: builder => ({
    getUser: builder.query({
      query: () => '/users/',
      providesTags: ['User'],
    }),
    addUser: builder.mutation({
      query: newUser => ({
        url: '/users/',
        method: 'POST',
        body: newUser,
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
  useGetUserQuery,
  // useDeleteContactMutation,
  useAddUserMutation,
} = userApi;
