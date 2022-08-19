import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().authSlice.token;
      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['User'],
  endpoints: builder => ({
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
    getContacts: builder.query({
      query: () => '/contacts',
      providesTags: ['User'],
    }),
    addContact: builder.mutation({
      query: newContact => ({
        url: '/contacts',
        method: 'POST',
        body: newContact,
      }),
      invalidatesTags: [{ type: 'User' }],
    }),
    deleteContact: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'User' }],
    }),
    changeContact: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'PATCH',
      }),
      invalidatesTags: [{ type: 'User' }],
    }),
  }),
});

export const {
  useLoginUserMutation,
  useAddUserMutation,
  useLogOutUserMutation,
  useGetContactsQuery,
  useDeleteContactMutation,
  useAddContactMutation,
} = userApi;
