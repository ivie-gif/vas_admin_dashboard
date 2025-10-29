// import React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { SxProps, Theme } from '@mui/material';

interface DataTableProps<T> {
  rows: T[];
  columns: GridColDef[];
  pageSize?: number;
  checkboxSelection?: boolean;
  disableRowSelectionOnClick?: boolean;
  height?: number | string;
  sx?: SxProps<Theme>;
}

const DataTable = <T extends object>({
  rows,
  columns,
  pageSize = 5,
  checkboxSelection = false,
  disableRowSelectionOnClick = true,
  height = 'auto',
  sx,
}: DataTableProps<T>) => {
  return (
    <Box sx={{ height, width: '100%', ...sx }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize,
            },
          },
        }}
        pageSizeOptions={[pageSize]}
        checkboxSelection={checkboxSelection}
        disableRowSelectionOnClick={disableRowSelectionOnClick}
        sx={{
          '& .MuiDataGrid-columnHeader': {
            color: '#212529',
            fontWeight: 'bold',
            fontSize: '14px',
            textAlign: 'left',
          },
          '& .MuiDataGrid-columnSeparator': {
            color: 'red',
          },
          '& .MuiDataGrid-cell': {
            fontSize: '14px',
            textAlign: 'left',
            width: '10px',
          },
          ...sx,
        }}
      />
    </Box>
  );
};

export default DataTable;

// import * as React from 'react';
// import {
//   Paper,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TablePagination,
//   TableRow,
//   SxProps,
//   Theme,
// } from '@mui/material';

// interface Column {
//   id: 'name' | 'code' | 'population' | 'size' | 'density';
//   label: string;
//   minWidth?: number;
//   align?: 'right';
//   format?: (value: number) => string;
// }

// interface StickyTableProps<T> {
//   rows: T[];
//   columns: T[];
//   rowsPerPageOptions?: number[];
//   defaultRowsPerPage?: number;
//   height?: number;
//   sx?: SxProps<Theme>;
// }

// const DataTable = <T extends { [key: string]: any }>({
//   rows,
//   columns,
//   rowsPerPageOptions = [5, 10, 25],
//   defaultRowsPerPage = 10,
//   height = 440,
//   sx,
// }: StickyTableProps<T>) => {
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(defaultRowsPerPage);

//   const handleChangePage = (event: unknown, newPage: number) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };

//   return (
//     <Paper sx={{ width: '100%', overflow: 'hidden', ...sx }}>
//       <TableContainer sx={{ maxHeight: height }}>
//         <Table stickyHeader>
//           <TableHead>
//             <TableRow>
//               {columns.map((column) => (
//                 <TableCell
//                   key={String(column.id)}
//                   align={column.align}
//                   style={{ minWidth: column.minWidth }}
//                 >
//                   {column.label}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rows
//               .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//               .map((row, idx) => (
//                 <TableRow hover role="checkbox" tabIndex={-1} key={idx}>
//                   {columns.map((column) => {
//                     const value = row[column.id];
//                     return (
//                       <TableCell key={String(column.id)} align={column.align}>
//                         {column.format ? column.format(value) : value}
//                       </TableCell>
//                     );
//                   })}
//                 </TableRow>
//               ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <TablePagination
//         rowsPerPageOptions={rowsPerPageOptions}
//         component="div"
//         count={rows.length}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         onPageChange={handleChangePage}
//         onRowsPerPageChange={handleChangeRowsPerPage}
//       />
//     </Paper>
//   );
// };

// export default DataTable;
