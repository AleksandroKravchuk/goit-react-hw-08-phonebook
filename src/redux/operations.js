// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// // import type { RootState } from './store'

// export const contactApi = createApi({
//   reducerPath: 'contactApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://connections-api.herokuapp.com',
//     // baseUrl: 'https://62ef7097f5521ecad582887f.mockapi.io/',
//     prepareHeaders: (headers, { getState }) => {
//       const token = getState().authSlice.token;
//       console.log(token);
//       // If we have a token set in state, let's assume that we should be passing it.
//       if (token) {
//         headers.set('authorization', `Bearer ${token}`);
//       }
//       return headers;
//     },
//   }),
//   tagTypes: ['Contacts'],
//   endpoints: builder => ({
//     getContacts: builder.query({
//       query: () => '/contacts',
//       providesTags: ['Contacts'],
//     }),
//     addContact: builder.mutation({
//       query: newContact => ({
//         url: '/contacts',
//         method: 'POST',
//         body: newContact,
//       }),
//       invalidatesTags: [{ type: 'Contacts' }],
//     }),
//     deleteContact: builder.mutation({
//       query: contactId => ({
//         url: `/contacts/${contactId}`,
//         method: 'DELETE',
//       }),
//       invalidatesTags: [{ type: 'Contacts' }],
//     }),
//     changeContact: builder.mutation({
//       query: contactId => ({
//         url: `/contacts/${contactId}`,
//         method: 'PATCH',
//       }),
//       invalidatesTags: [{ type: 'Contacts' }],
//     }),
//   }),
// });

// export const {
//   useGetContactsQuery,
//   useDeleteContactMutation,
//   useAddContactMutation,
// } = contactApi;
