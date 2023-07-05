import React, { useState, useEffect } from 'react';
import { useTable } from 'react-table';

function Food() {

 const data = React.useMemo(
     () => [
       {
         col1: 'Tea',
         col2: <input type='number' />,
         col3: '3.00 per attendee',
         col4: <input type='checkbox' />

       },
       {
         col1: 'Champagne',
         col2: <input type='number' />,
         col3: '4.00 per attendee',
         col4: <input type='checkbox' />
       },
       {
         col1: 'Nuts(mixed)',
         col2: <input type='number' />,
         col3: '16.00 per attendee',
         col4: <input type='checkbox' />
       },
       {
        col1: 'Mineral Water',
        col2: <input type='number' />,
        col3: '5.00 per attendee',
        col4: <input type='checkbox' />
      },
      {
        col1: 'Coffee',
        col2: <input type='number' />,
        col3: '5.00 per attendee',
        col4: <input type='checkbox' />
      },
      {
        col1: 'Chocolate cookies',
        col2: <input type='number' />,
        col3: '3.00 per attendee',
        col4: <input type='checkbox' />
      },
      {
        col1: 'Salty cookies',
        col2: <input type='number' />,
        col3: '2.00 per attendee',
        col4: <input type='checkbox' />
      },
     ],
     []
 )

 const columns = React.useMemo(
     () => [
       {
         Header: 'Title',
         accessor: 'col1', // accessor is the "key" in the data
       },
       {
         Header: 'People',
         accessor: 'col2',
       },
       {
         Header: 'Price',
         accessor: 'col3', // accessor is the "key" in the data
       },
       {
        Header: '',
        accessor: 'col4', // accessor is the "key" in the data
      },
     ],
     []
 )

 const {
   getTableProps,
   getTableBodyProps,
   headerGroups,
   rows,
   prepareRow,
 } = useTable({ columns, data })

 return (
    <>
    <h3>Food & Drinks : </h3>
     <div>
       <table {...getTableProps()} style={{ border:'solid 1px red' }}>
         <thead>
         {headerGroups.map(headerGroup => (
             <tr {...headerGroup.getHeaderGroupProps()}>
               {headerGroup.headers.map(column => (
                   <th
                       {...column.getHeaderProps()}
                       style={{
                        width: '10px',
                         borderBottom: 'solid 3px red',
                         color: 'Red',
                       }}
                   >
                     {column.render('Header')}
                   </th>
               ))}
             </tr>
         ))}
         </thead>
         <tbody {...getTableBodyProps()}>
         {rows.map(row => {
           prepareRow(row)
           return (
               <tr {...row.getRowProps()}>
                 {row.cells.map(cell => {
                   return (
                       <td
                           {...cell.getCellProps()}
                           style={{
                             padding: '10px',
                             border: 'solid 1px white',
                           }}
                       >
                         {cell.render('Cell')}
                       </td>
                   )
                 })}
               </tr>
           )
         })}
         </tbody>
       </table>
     </div>
     <br />
          <button className="btn" value= "Save">Save</button> 
</>
 );
}

export default Food;