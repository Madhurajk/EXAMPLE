import {createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const rtkQueryApi = createApi({
    reducerPath:"rtkQueryApi",
    baseQuery:fetchBaseQuery({baseUrl:"http://localhost:3007/"}),
    endpoints:(builder)=> ({
        getAllUsers:builder.query({
            query:()=>"/addUserForm"
        })
    })
})

export const {useGetAllUsersQuery} = rtkQueryApi