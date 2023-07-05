import React, { useState, useEffect } from 'react';
import { useTable } from 'react-table';

function Equipment() {

 const data = React.useMemo(
     () => [
       {
         col1: 'Projector & Screen',
         col2: '1',
         col3: '99.00 per booking',
         col4: <input type='checkbox' />

       },
       {
         col1: 'Wi-Fi',
         col2: '1',
         col3: '0.0 per booking',
         col4: <input type='checkbox' />
       },
       {
         col1: 'Flipchart',
         col2: '1',
         col3: '5.00 per hours',
         col4: <input type='checkbox' />
       },
       {
        col1: 'Video conference',
        col2: '1',
        col3: '49.00 per hours',
        col4: <input type='checkbox' />
      },
      {
        col1: 'TV',
        col2: '1',
        col3: '9.00 per hours',
        col4: <input type='checkbox' />
      },
      {
        col1: 'Printer',
        col2: '1',
        col3: '2.99 per hours',
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
         Header: 'Unit(s)',
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
    <h3>Equipments : </h3>
     <div>
       <table {...getTableProps()} style={{ border:'solid 1px red' }}>
         <thead>
         {headerGroups.map(headerGroup => (
             <tr {...headerGroup.getHeaderGroupProps()}>
               {headerGroup.headers.map(column => (
                   <th
                       {...column.getHeaderProps()}
                       style={{
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

export default Equipment;