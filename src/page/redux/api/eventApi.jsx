import { baseApi } from "./baseApi";

const useApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    eventAdd: builder.mutation({
      query: (data) => {
        return {
          url: "/events/create",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["updateProfile"],
    }),

    getEvent: builder.query({
      query: ({
        filterType,
        searchQuery,
        eventType,
        sortOrder,
        page,
        limit,
      }) => {
        console.log(page, limit);
        return {
          url: `/events/get-all?filterType=${filterType}&searchQuery=${searchQuery}&eventType=${eventType}&sortOrder=${sortOrder}&page=${page}&limit=${limit}`,
          method: "GET",
        };
      },
      providesTags: ["updateProfile"],
    }),

    updateSuccess: builder.query({
      query: ({ eventId, userId, type }) => {
        return {
          url: `/events/accept-request?eventId=${eventId}&userId=${userId}&type=${type}`,
          method: "PATCH",
        };
      },
      invalidatesTags: ["updateProfile"],
    }),

    updateCancel: builder.query({
      query: ({ eventId, userId, type }) => {
        return {
          url: `/events/cancel-request?eventId=${eventId}&userId=${userId}&type=${type}`,
          method: "PATCH",
        };
      },
      invalidatesTags: ["updateProfile"],
    }),

    getConfirmedDriver: builder.query({
      query: ({ eventId, types, accept }) => {
        return {
          url: `/events/get-events-driver?eventId=${eventId}&types=${types}&accept=${accept}`,
          method: "GET",
        };
      },
      providesTags: ["updateProfile"],
    }),

    getAllGroupClientEvent: builder.query({
      query: ({ searchTerm }) => {
        console.log("search", searchTerm);
        return {
          url: `/client-group/?types=client&searchTerm=${searchTerm}`,
          method: "GET",
        };
      },
      providesTags: ["updateProfile"],
    }),

    getAllGroupWarehouseEvent: builder.query({
      query: ({ searchTerm }) => {
        return {
          url: `/client-group/?types=warehouse&searchTerm=${searchTerm}`,
          method: "GET",
        };
      },
      providesTags: ["updateProfile"],
    }),

    getAllGroupDriverVolunteer: builder.query({
      query: ({ searchTerm }) => {
        return {
          url: `/client-group/?types=driver&searchTerm=${searchTerm}`,
          method: "GET",
        };
      },
      providesTags: ["updateProfile"],
    }),

    getSingleEventGroup: builder.query({
      query: ({ id }) => {
        return {
          url: `/events/get/${id}`,
          method: "GET",
        };
      },
      providesTags: ["updateProfile"],
    }),

    getSingleVolunteerAssigned: builder.query({
      query: ({ id }) => {
        return {
          url: `/events/volunteer-details/${id}`,
          method: "GET",
        };
      },
      providesTags: ["updateProfile"],
    }),

    updateAssigned: builder.mutation({
      query: ({ data, eventId, clientId, volunteerId }) => {
        
        return {
          url: `events/assigned-clients?eventId=${eventId}&clientId=${clientId}&volunteerId=${volunteerId}`,
          method: "PATCH",
          body: data,
        };
      },
      invalidatesTags: ["updateProfile"],
    }),

    updateEvent: builder.mutation({
      query: ({ id, data }) => ({
        url: `/events/update/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["updateProfile"],
    }),

    updateAddEventGroup: builder.mutation({
      query: ({ data }) => ({
        url: "/events/add-groups",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["updateProfile"],
    }),

    deleteEvent: builder.mutation({
      query: (id) => {
        return {
          url: `/events/delete/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["updateProfile"],
    }),

    deleteEventGroup: builder.mutation({
      query: (data) => {
        console.log("==============================", data);
        return {
          url: "/events/remove-groups",
          method: "PATCH",
          body: data,
        };
      },
      invalidatesTags: ["updateProfile"],
    }),
  }),
});

export const {
  useEventAddMutation,
  useGetEventQuery,
  useUpdateEventMutation,
  useDeleteEventMutation,
  useGetAllGroupClientEventQuery,
  useGetSingleEventGroupQuery,
  useUpdateAddEventGroupMutation,
  useDeleteEventGroupMutation,
  useGetAllGroupDriverVolunteerQuery,
  useGetAllGroupWarehouseEventQuery,
  useGetConfirmedDriverQuery,
  useUpdateSuccessQuery,
  useUpdateCancelQuery,
  useGetSingleVolunteerAssignedQuery,
  useUpdateAssignedMutation,
} = useApi;
