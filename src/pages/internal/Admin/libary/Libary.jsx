import React from 'react';
import { useTable } from 'react-table';
import searchIcon from "../../../../assets/search-icon.svg";
import printIcon from "../../../../assets/print-icon.png";
import exportIcon from "../../../../assets/Export -icon.png";
import { useFetch } from "../../../../hooks/useFetch";

const Library = () => {
  const { content: data, error } = useFetch('/api/v1/resources');
  
  const columns = React.useMemo(
    () => [
      {
        Header: 'Course Name',
        accessor: 'title',
      },
      {
        Header: 'Category',
        accessor: 'category',
      },
      {
        Header: 'Unit Sold',
        accessor: 'unitSold',
      },
      {
        Header: 'Date',
        accessor: 'createdAt',
        Cell: ({ value }) => new Date(value).toLocaleDateString(),
      },
      {
        Header: 'Client',
        accessor: 'client',
      },
      {
        Header: 'Price',
        accessor: 'price',
      },
    ],
    []
  );

  const tableInstance = useTable({ columns, data });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  return (
    <div className="w-11/12 mx-auto container">
      <div className="px-0 py-3 flex justify-between items-center ">
        <h1 className="text-2xl text-[#0027BA] font-bold">All Course</h1>
        <div className="flex gap-5 py-8">
          <button className="bg-white border border-[#0226B066] border-1 px-5 py-2 rounded-md text-[#0027BA] flex gap-3 items-center">
            {" "}
            <img src={exportIcon} alt="" /> Export
          </button>
          <button className="bg-white border border-[#0226B066] border-1 px-5 py-2 rounded-md text-[#0027BA] flex gap-3 items-center">
            {" "}
            <img src={printIcon} alt="" /> Print
          </button>
          <button className="bg-[#0027BA] text-white px-5 py-2 rounded-md ">
            + Create New Course
          </button>
        </div>
      </div>
      <table {...getTableProps()} className="w-full border-collapse border-0">
        <thead className="bg-light-blue-50">
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()} className="px-4 py-2 text-left font-semibold text-gray-800">{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="hover:bg-gray-50">
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()} className=" px-4 py-2">{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      {error && <h1 className="text-red-500 text-center">{error}</h1>}
    </div>
  );
};

export default Library;
