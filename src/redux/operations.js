// import axios from 'axios';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import { createAsyncThunk } from '@reduxjs/toolkit';
// axios.defaults.baseURL = 'https://62ef7097f5521ecad582887f.mockapi.io';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://62ef7097f5521ecad582887f.mockapi.io/',
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => '/contacts/',
      providesTags: ['Contacts'],
    }),
    addContact: builder.mutation({
      query: newContact => ({
        url: '/contacts/',
        method: 'POST',
        body: newContact,
      }),
      invalidatesTags: [{ type: 'Contacts' }],
    }),
    deleteContact: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Contacts' }],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useDeleteContactMutation,
  useAddContactMutation,
} = contactApi;

// createAsyncThunk;

// export const fetchGetContact = createAsyncThunk(
//   'contacts/fetchGet',
//   async () => {
//     try {
//       const { data } = await axios.get('/contakts');
//       return data;
//     } catch (error) {
//       Notify.failure('Sorry, failed to make the request');
//     }
//   }
// );

// export const fetchAddContact = createAsyncThunk(
//   'contacts/fetchAdd',
//   async contact => {
//     try {
//       const { data } = await axios.post('/contakts', contact);
//       return data;
//     } catch (error) {
//       Notify.failure('Sorry, failed to make the request');
//     }
//   }
// );

// export const fetchDeleteContact = createAsyncThunk(
//   'contacts/fetchDelete',
//   async id => {
//     try {
//       const { data } = await axios.delete(`/contakts/${id}`);
//       return data;
//     } catch (error) {
//       Notify.failure('Sorry, failed to make the request');
//     }
//   }
// );
