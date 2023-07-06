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
    
    })
})

export const { useGetUsersQuery,
useAddUsersMutation,
useEditUserMutation,
useDeleteUserMutation,
} = rtkQueryApi