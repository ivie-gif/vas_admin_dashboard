import { useState } from 'react';
import { Fragment } from 'react/jsx-runtime';
// import DataTable from 'components/common/Datagrid';
// import { GridColDef } from '@mui/x-data-grid';
import { Box, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import DataTable, { TableColumn } from 'react-data-table-component';
// import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';

const PaymentRequests = () => {
  const location = useLocation();

  // chnges to be made
  const [loading] = useState(false);
  const [items] = useState([]);
  // const [totalRows, setTotalRows] = useState(0);
  // const [perPage, setPerPage] = useState(10);
  // const [filteredItem, setFilteredItem] = useState();
  // const [filterDate, setFilterDate] = useState();
  // const [searchedItem, setSearchedItem] = useState();

  // Extract the route name from the pathname
  const pathSegments = location.pathname.split('/').filter((segment) => segment.trim() !== '');
  const routeName = pathSegments.length > 0 ? pathSegments[pathSegments.length - 1] : 'Overview';
  // Insert a space before each uppercase letter that follows a lowercase letter
  const routeDisplayName = routeName.replace(/([a-z])([A-Z])/g, '$1 $2');

  // const columns: GridColDef<(typeof rows)[number]>[] = [
  //   {
  //     field: 'transactionReference',
  //     headerName: 'Transaction Reference',
  //     width: 200,
  //     editable: true,
  //   },
  //   {
  //     field: 'amount',
  //     headerName: 'Amount',
  //     width: 160,
  //     editable: true,
  //   },
  //   {
  //     field: 'paymentMethod',
  //     headerName: 'Payment Method',
  //     width: 160,
  //     editable: true,
  //   },
  //   {
  //     field: 'totalAmountPaid',
  //     headerName: 'Total Amount Paid',
  //     type: 'number',
  //     width: 160,
  //     editable: true,
  //   },
  //   {
  //     field: 'feesAdded',
  //     headerName: 'Fees Added',
  //     type: 'number',
  //     width: 160,
  //     editable: true,
  //   },
  //   {
  //     field: 'status',
  //     headerName: 'Status',
  //     type: 'number',
  //     width: 160,
  //     editable: true,
  //   },
  //   {
  //     field: 'createdAt',
  //     headerName: 'Created At',
  //     type: 'number',
  //     width: 160,
  //     editable: true,
  //   },
  // ];

  const dataRowStyles = {
    color: loading ? 'gray' : 'black', // Apply conditional color
  };

  interface PaymentRequestRow {
    transactionReference: string;
    paymentReference: string;
    paymentMethod: string;
    status: string;
    amount: number;
    feesAdded: number;
    totalAmountPaid: number;
    createdAt: string;
  }

  const columns: TableColumn<PaymentRequestRow>[] = [
    {
      name: 'Trans Ref',
      selector: (row) => row.transactionReference,
      // width: "150px",
      cell: (row) => (
        <div
          style={{
            wordBreak: 'break-word',
            whiteSpace: 'normal',
            textAlign: 'left',
            padding: '3px',
          }}
        >
          {row.transactionReference}
          {/* transactionReference */}
        </div>
      ),
    },
    {
      name: 'Pay Ref',
      selector: (row) => row.paymentReference,
      // width: "150px",
      cell: (row) => (
        <div
          style={{
            wordBreak: 'break-word',
            whiteSpace: 'normal',
            textAlign: 'left',
            padding: '3px',
          }}
        >
          {row.paymentReference}
        </div>
      ),
    },
    {
      name: 'Method',
      selector: (row) => row.paymentMethod,
      width: '100px',
      sortable: true,
    },
    {
      name: 'Status',
      selector: (row) => row.status,
      // width: "150px",
      sortable: true,
    },
    {
      name: 'Amount',
      selector: (row) => row.amount,
      width: '95px',
    },
    {
      name: 'Fees Added',
      selector: (row) => row.feesAdded,
      width: '90px',
    },
    {
      name: 'Total',
      selector: (row) => row.totalAmountPaid,
      width: '100px',
    },
    {
      name: 'Created At',
      selector: (row) => row.createdAt,
      // width: "150px",
    },
  ];

  // const rows = [
  //   {
  //     id: 1,
  //     transactionReference: '98692767792398462966',
  //     amount: 14,
  //     paymentMethod: 'Jon',
  //     totalAmountPaid: 'credit',
  //     feesAdded: 31000,
  //     status: 30000,
  //     createdAt: '2024-11-15 15:48:35',
  //   },
  //   {
  //     id: 2,
  //     transactionReference: '98692767792398462966',
  //     amount: 14,
  //     paymentMethod: 'Jon',
  //     totalAmountPaid: 'credit',
  //     feesAdded: 31000,
  //     status: 30000,
  //     createdAt: '2024-11-15 15:48:35',
  //   },
  //   {
  //     id: 3,
  //     transactionReference: '98692767792398462966',
  //     amount: 14,
  //     paymentMethod: 'Jon',
  //     totalAmountPaid: 'credit',
  //     feesAdded: 31000,
  //     status: 30000,
  //     createdAt: '2024-11-15 15:48:35',
  //   },
  //   {
  //     id: 4,
  //     transactionReference: '98692767792398462966',
  //     amount: 14,
  //     paymentMethod: 'Jon',
  //     totalAmountPaid: 'credit',
  //     feesAdded: 31000,
  //     status: 30000,
  //     createdAt: '2024-11-15 15:48:35',
  //   },
  //   {
  //     id: 5,
  //     transactionReference: '98692767792398462966',
  //     amount: 14,
  //     paymentMethod: 'Jon',
  //     totalAmountPaid: 'credit',
  //     feesAdded: 31000,
  //     status: 30000,
  //     createdAt: '2024-11-15 15:48:35',
  //   },
  //   {
  //     id: 6,
  //     transactionReference: '98692767792398462966',
  //     amount: 14,
  //     paymentMethod: 'Jon',
  //     totalAmountPaid: 'credit',
  //     feesAdded: 31000,
  //     status: 30000,
  //     createdAt: '2024-11-15 15:48:35',
  //   },
  //   {
  //     id: 7,
  //     transactionReference: '98692767792398462966',
  //     amount: 14,
  //     paymentMethod: 'Jon',
  //     totalAmountPaid: 'credit',
  //     feesAdded: 31000,
  //     status: 30000,
  //     createdAt: '2024-11-15 15:48:35',
  //   },
  //   {
  //     id: 8,
  //     transactionReference: '98692767792398462966',
  //     amount: 14,
  //     paymentMethod: 'Jon',
  //     totalAmountPaid: 'credit',
  //     feesAdded: 31000,
  //     status: 30000,
  //     createdAt: '2024-11-15 15:48:35',
  //   },
  //   {
  //     id: 9,
  //     transactionReference: '98692767792398462966',
  //     amount: 14,
  //     paymentMethod: 'Jon',
  //     totalAmountPaid: 'credit',
  //     feesAdded: 31000,
  //     status: 30000,
  //     createdAt: '2024-11-15 15:48:35',
  //   },
  // ];

  return (
    <Fragment>
      <Typography
        sx={{
          display: { xs: 'block', md: 'block' },
          fontSize: { sm: 'h6.fontSize', xl: 'h6.fontSize' },
          fontWeight: 600,
          color: '#D36128',
          pt: 5,
          flex: 1,
          textAlign: { xs: 'left', md: 'left' },
          textTransform: 'capitalize',
        }}
      >
        {routeDisplayName}
      </Typography>
      <Box sx={{ py: 2 }}>
        {/* <DataTable rows={rows} columns={columns} checkboxSelection={true} /> */}

        <DataTable
          columns={columns}
          data={items}
          fixedHeader
          pagination
          // highlightOnHover="true"
          paginationRowsPerPageOptions={[10, 15, 20, 25, 30, 50, 100]}
          // paginationServer
          // paginationTotalRows={totalRows}
          onChangePage={() => {}}
          onChangeRowsPerPage={() => {}}
          customStyles={{
            rows: {
              style: dataRowStyles,
            },
          }}
        />
      </Box>
    </Fragment>
  );
};

export default PaymentRequests;
