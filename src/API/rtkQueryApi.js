import {createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const rtkQueryApi = createApi({
    reducerPath:"rtkQueryApi",
    baseQuery:fetchBaseQuery({baseUrl:"http://localhost:3007/"}),
    endpoints:(builder)=> ({
        getAllUsers:builder.query({
            query:()=>"/addUserForm"
        }),
        getUsersById:builder.query({
            query:(id) => '/addUserForm/${id}'
        }),

        addUsers:builder.mutation({
            query:(users)=>({
                url:'/addUserForm',
                method:'POST',
                body:users
            }),
            editUsers:builder.mutation({
                query:({id,...rest})=>({
                    url:'/addUserForm/${id}',
                    method:'PUT',
                    body:rest
                })
            })
        })
    })
})

export const { useGetAllUsersQuery,
usegetUsersByIdQuery,
useAddUsersMutation,
useEditUsersMutation
} = rtkQueryApi