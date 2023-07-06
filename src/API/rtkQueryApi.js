import {createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const rtkQueryApi = createApi({
    reducerPath:"rtkQueryApi",
    baseQuery:fetchBaseQuery({baseUrl:"http://localhost:3007/"}),
    endpoints:(builder)=> ({
        getUsers : builder.query({
            query: () => "/users"
        }),
        addUsers : builder.mutation({
            query: (user) => ({
                url: "/users",
                method:"POST",
                body: user
            })
        }),
        editUser : builder.mutation({
            query: (user) => ({
                url: `/users/${user.id}`,
                method: 'PUT',
                body: user
            })
        }),
        deleteUser: builder.mutation({
            query: (id) => ({
                url: `/users/${id}`,
                method: 'DELETE',
            })
        }),
        rooms: builder.query({
            query: () => '/rooms'
        }),
        addRooms: builder.mutation({
            query: (room) => ({
                url: "/rooms",
                method: "POST",
                body: room,
            })
        }),
        editRoom: builder.mutation({
            query: (room) => ({
                url: `/rooms/${room.id}`,
                method: 'PUT',
                body: room
            })
        }),
        deleteRoom: builder.mutation({
            query: (id) => ({
                url: `/rooms/${id}`,
                method: 'DELETE',
            })
        }),
    
    })
})

export const { useGetUsersQuery,
useAddUsersMutation,
useEditUserMutation,
useDeleteUserMutation, 
useRoomsQuery, 
useAddRoomsMutation,
useEditRoomMutation,
useDeleteRoomMutation,
} = rtkQueryApi