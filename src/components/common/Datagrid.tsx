import React from 'react';
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
      />
    </Box>
  );
};

export default DataTable;
