import { tokens } from "../theme";

import { useGetUsersQuery } from "../API/rtkQueryApi"


 export const mockDataTeam =()  => {

  const {data, error} = useGetUsersQuery();
 console.log(data);
  // {data.map((data) => {
  //   return(
  //     id : {data.id},
  //     name:{data.name},
  //     role :{data.role},
  //     status:{data.status}
  //   )
  // };
 }
 
// const {data:getAllUsers,error,isLoading,isSuccess} = useGetAllUsersQuery();

// return(
//   {
//     id: {getAllUsers.id},
//     name: {getAllUsers.name},
//     email: {getAllUsers.email},
//     role: {getAllUsers.role},
//     status: {getAllUsers.status},
//   }
//   },
  
//   {
//     id: 3,
//     name: "madhu",
//     email: "madhu@gmail.com",
//     age: "Active",
//     phone: "1234567890",
//     access: "user",
//   },
//   {
//     id: 4,
//     name: "Leo",
//     email: "Leo@gmail.com",
//     age: "In-Active",
//     phone: "1234567890",
//     access: "user",
//   }
 
//  )
 


export const mockDataContacts = [
  {
    id: 1,
    name: "Small Conference Room",
    age: 5,
    phone: "1",
    address: "Active",
    registrarId: "https://supersourcing.com/blog/5-most-popular-free-and-open-source-meeting-room-booking-system/",
  },
  {
    id: 2,
    name: "Large Conference Room",
    age: 10,
    phone: "2",
    address: "Active",
    registrarId: "https://supersourcing.com/blog/5-most-popular-free-and-open-source-meeting-room-booking-system/",
  }
    
 ];

export const mockDataInvoices = [
 {
    id: 1,
    room: "Small Conference Room",
    date: "02/02/2023",
    cost: "200.00",
    name: "Madhuraj",
    status: "Confirmed",
  },
  {
    id: 2,
    room: "Large Conference Room",
    date: "02/03/2023",
    cost: "100.00",
    name: "Leo",
    status: "Confirmed",
  },
];