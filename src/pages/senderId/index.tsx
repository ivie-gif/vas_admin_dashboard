import { useState } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Fragment } from 'react/jsx-runtime';
import DataTable from 'components/common/Datagrid';
import { GridColDef } from '@mui/x-data-grid';
import { Box, Typography, Button, Grid, Stack } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { useBreakpoints } from 'providers/useBreakpoints';
import { SxProps, Theme } from '@mui/material';
import CardContainer from 'components/common/CardContainter';
import CustomModal from 'components/common/Modal';
import CustomButton from 'components/common/Button';
import CustomInputField from 'components/common/Input';
import mtn from 'assets/mtn.png';
import airtel from 'assets/airtel.jpg';
import glo from 'assets/glo.png';
import nineMobile from 'assets/9mobile.png';

// type IconType = ReactElement;

interface PromCardData {
  theme: 'blue' | 'white';
  id: number;
  data: {
    color: string;
    telco: string;
    price: number;
    icon: string;
  };
  sx?: SxProps<Theme>;
}

interface TransCardData {
  theme: 'blue' | 'white';
  id: number;
  data: {
    color: string;
    telco: string;
    price: number;
    icon: string;
  };
  sx?: SxProps<Theme>;
}

const PromotionalData: PromCardData[] = [
  {
    id: 1,
    theme: 'white',
    data: {
      color: '#EE1C25',
      telco: 'Airtel',
      price: 2.75,
      icon: airtel,
    },
  },
  {
    id: 2,
    theme: 'white',
    data: {
      color: '#FFC403',
      telco: 'MTN',
      price: 2.8,
      icon: mtn,
    },
  },
  {
    id: 3,
    theme: 'white',
    data: {
      color: '#18920C',
      telco: 'Glo',
      price: 2.75,
      icon: glo,
    },
  },
  {
    id: 4,
    theme: 'white',
    data: {
      color: '#006F54',
      telco: '9Mobile',
      price: 2.4,
      icon: nineMobile,
    },
  },
];

const TransactionalData: TransCardData[] = [
  {
    id: 1,
    theme: 'white',
    data: {
      color: '#EE1C25',
      telco: 'Airtel',
      price: 2.75,
      icon: airtel,
    },
  },
  {
    id: 2,
    theme: 'white',
    data: {
      color: '#FFC403',
      telco: 'MTN',
      price: 2.8,
      icon: mtn,
    },
  },
  {
    id: 3,
    theme: 'white',
    data: {
      color: '#18920C',
      telco: 'Glo',
      price: 2.75,
      icon: glo,
    },
  },
  {
    id: 4,
    theme: 'white',
    data: {
      color: '#006F54',
      telco: '9Mobile',
      price: 2.4,
      icon: nineMobile,
    },
  },
];

const SenderId = () => {
  const location = useLocation();
  const { up } = useBreakpoints();
  const upSM = up('sm');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSenderIdModalOpen, setIsSenderIdModalOpen] = useState(false);
  // const [selectedRows] = useState([]);

  // Extract the route name from the pathname
  const pathSegments = location.pathname.split('/').filter((segment) => segment.trim() !== '');
  const routeName = pathSegments.length > 0 ? pathSegments[pathSegments.length - 1] : 'Overview';
  // Insert a space before each uppercase letter that follows a lowercase letter
  const routeDisplayName = routeName.replace(/([a-z])([A-Z])/g, '$1 $2');

  const transactionalSchema = Yup.object().shape({
    senderId: Yup.string().required('Sender ID is required'),
    userId: Yup.string().required('User ID is required'),
    type: Yup.string().required('Type is required'),
  });

  const columns: GridColDef<(typeof rows)[number]>[] = [
    {
      field: 'reference',
      headerName: 'Id',
      width: 200,
      editable: true,
    },
    {
      field: 'createdAt',
      headerName: 'Created At',
      width: 200,
      editable: true,
    },
    {
      field: 'amount',
      headerName: 'Amount',
      width: 100,
      editable: true,
    },
    {
      field: 'transactionType',
      headerName: 'Transaction Type',
      width: 160,
      editable: true,
    },

    {
      field: 'purpose',
      headerName: 'Purpose',
      width: 160,
      editable: true,
    },
    {
      field: 'narration',
      headerName: 'Narration',
      width: 160,
      editable: true,
    },
    {
      field: 'balanceAfter',
      headerName: 'Balance Aft.',
      width: 100,
      editable: true,
    },
    {
      field: 'balanceBefore',
      headerName: 'Balance Bef.',
      width: 100,
      editable: true,
    },
  ];

  const rows = [
    {
      id: 1,
      reference: '98692767792398462966',
      transactionType: 'Jon',
      amount: 14,
      purpose: 'credit',
      narration: 'credit',
      balanceAfter: 31000,
      balanceBefore: 30000,
      createdAt: '2024-11-15 15:48:35',
    },
    {
      id: 2,
      reference: '98692767792398462966',
      transactionType: 'Cersei',
      amount: 31,
      purpose: 'credit',
      narration: 'credit',
      balanceAfter: 31000,
      balanceBefore: 30000,
      createdAt: '2024-11-15 15:48:35 ',
    },
    {
      id: 3,
      reference: '98692767792398462966',
      transactionType: 'Jaime',
      amount: 31,
      purpose: 'credit',
      narration: 'credit',
      balanceAfter: 31000,
      balanceBefore: 30000,
      createdAt: '2024-11-15 15:48:35',
    },
    {
      id: 4,
      reference: '98692767792398462966',
      transactionType: 'Arya',
      amount: 11,
      purpose: 'credit',
      narration: 'credit',
      balanceAfter: 31000,
      balanceBefore: 30000,
      createdAt: '2024-11-15 15:48:35 ',
    },
    {
      id: 5,
      reference: '98692767792398462966',
      transactionType: 'Daenerys',
      amount: null,
      purpose: 'credit',
      narration: 'credit',
      balanceAfter: 31000,
      balanceBefore: 30000,
      createdAt: '2024-11-15 15:48:35 ',
    },
    {
      id: 6,
      reference: '98692767792398462966',
      transactionType: null,
      amount: 150,
      purpose: 'credit',
      narration: 'credit',
      balanceAfter: 31000,
      balanceBefore: 30000,
      createdAt: '2024-11-15 15:48:35',
    },
    {
      id: 7,
      reference: '98692767792398462966',
      transactionType: 'Ferrara',
      amount: 44,
      purpose: 'credit',
      narration: 'credit',
      balanceAfter: 31000,
      balanceBefore: 30000,
      createdAt: '2024-11-15 15:48:35',
    },
    {
      id: 8,
      reference: '98692767792398462966',
      transactionType: 'Rossini',
      amount: 36,
      purpose: 'credit',
      narration: 'credit',
      balanceAfter: 31000,
      balanceBefore: 30000,
      createdAt: '2024-11-15 15:48:35',
    },
    {
      id: 9,
      reference: '98692767792398462966',
      transactionType: 'Harvey',
      amount: 65,
      purpose: 'credit',
      narration: 'credit',
      balanceAfter: 31000,
      balanceBefore: 30000,
      createdAt: '2024-11-15 15:48:35 ',
    },
  ];

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSenderIdModalOpen = () => {
    setIsSenderIdModalOpen(true);
  };

  const handleSenderIdModalClose = () => {
    setIsSenderIdModalOpen(false);
  };

  return (
    <Fragment>
      <Typography
        sx={{
          display: { xs: 'block', md: 'block' },
          fontSize: { sm: 'h6.fontSize', xl: 'h6.fontSize' },
          fontWeight: 'bold',
          color: '#212529',
          pt: 5,
          pb: 1,
          flex: 1,
          textAlign: { xs: 'left', md: 'left' },
          textTransform: 'capitalize',
        }}
      >
        {routeDisplayName}
      </Typography>
      <Box
        gap={5}
        sx={{
          display: { xs: 'block', md: 'flex' },
          mb: 8,
          textAlign: { xs: 'center', md: 'center' },
        }}
      >
        <CardContainer>
          <Box sx={{ px: 1, py: 1.5 }}>
            <Typography sx={{ pb: 2, fontSize: 'h6.fontSize', fontWeight: 600 }}>
              Transactional Rates
            </Typography>
            <Grid container>
              {TransactionalData.map(({ id, data }) => (
                <Grid key={id} item xs={6} sx={{ py: 3 }}>
                  <Stack spacing={0.5}>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <img src={data.icon} alt={data.telco} width={30} height={30} />
                      <Typography color={data.color} fontWeight={600}>
                        {data.telco}
                      </Typography>
                    </Stack>
                    <Typography fontWeight={600}>₦{data.price}/SMS</Typography>
                  </Stack>
                </Grid>
              ))}
            </Grid>

            <Box sx={{ mt: 3 }}>
              <Button
                onClick={handleModalOpen}
                variant="contained"
                sx={{
                  backgroundColor: '#FFD000',
                  color: '#000',
                  textTransform: 'none',
                  fontWeight: 600,
                  borderRadius: 999,
                  px: 4,
                  '&:hover': {
                    backgroundColor: '#e6bb00',
                  },
                }}
              >
                Edit Rates
              </Button>
            </Box>
          </Box>
        </CardContainer>

        <CardContainer>
          <Box sx={{ px: 1, py: 1.5 }}>
            <Typography sx={{ pb: 2, fontSize: 'h6.fontSize', fontWeight: 600 }}>
              Promotional Rates
            </Typography>
            <Grid container>
              {PromotionalData.map(({ id, data }) => (
                <Grid key={id} item xs={6} sx={{ py: 3 }}>
                  <Stack spacing={0.5}>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <img src={data.icon} alt={data.telco} width={30} height={30} />
                      <Typography color={data.color} fontWeight={600}>
                        {data.telco}
                      </Typography>
                    </Stack>
                    <Typography fontWeight={600}>₦{data.price}/SMS</Typography>
                  </Stack>
                </Grid>
              ))}
            </Grid>

            <Box sx={{ mt: 3 }}>
              <Button
                onClick={handleModalOpen}
                variant="contained"
                sx={{
                  backgroundColor: '#FFD000',
                  color: '#000',
                  textTransform: 'none',
                  fontWeight: 600,
                  borderRadius: 999,
                  px: 4,
                  '&:hover': {
                    backgroundColor: '#e6bb00',
                  },
                }}
              >
                Edit Rates
              </Button>
            </Box>
          </Box>
        </CardContainer>
      </Box>

      {isModalOpen && (
        <Formik
          initialValues={{
            senderId: '',
            userId: '',
            type: '',
          }}
          validationSchema={transactionalSchema}
          onSubmit={() => console.log('Clicked')}
        >
          <CustomModal
            open={isModalOpen}
            onClose={handleCloseModal}
            title="Transactional Rates : Promotional Rates"
          >
            <CustomInputField
              label="Airtel"
              placeholder="Amount"
              variant="outlined"
              fullWidth
              type="number"
              sx={{ mb: 2 }}
            />
            <CustomInputField
              label="MTN"
              placeholder="Amount"
              variant="outlined"
              fullWidth
              type="text"
              sx={{ mb: 2 }}
            />
            <CustomInputField
              label="Glo"
              placeholder="Amount"
              variant="outlined"
              fullWidth
              type="text"
              sx={{ mb: 2 }}
            />
            <CustomInputField
              label="9Mobile"
              placeholder="Amount"
              variant="outlined"
              fullWidth
              type="text"
              sx={{ mb: 2 }}
            />
            <CustomButton
              variant="contained"
              position="center"
              sx={{
                color: (theme) => theme.palette.common.white,
                backgroundColor: (theme) => theme.palette.primary.light,
                pointer: 'cursor',
                mt: 3,
              }}
            >
              Submit
            </CustomButton>
          </CustomModal>
        </Formik>
      )}

      {/* Form for sender ID creation */}
      {isSenderIdModalOpen && (
        <Formik
          initialValues={{
            senderId: '',
            userId: '',
            type: '',
          }}
          validationSchema={transactionalSchema}
          onSubmit={() => console.log('Clicked')}
        >
          <CustomModal
            open={isSenderIdModalOpen}
            onClose={handleSenderIdModalClose}
            title="Create New Sender ID"
          >
            <CustomInputField
              placeholder="Sender Id"
              variant="outlined"
              fullWidth
              type="number"
              sx={{ mb: 2 }}
            />
            <CustomInputField
              placeholder="User ID"
              variant="outlined"
              fullWidth
              type="text"
              sx={{ mb: 2 }}
            />
            <CustomInputField
              placeholder="SMS Route Type"
              variant="outlined"
              fullWidth
              type="text"
              sx={{ mb: 2 }}
            />
            <CustomButton
              variant="contained"
              position="center"
              sx={{
                color: (theme) => theme.palette.common.white,
                backgroundColor: (theme) => theme.palette.primary.light,
                pointer: 'cursor',
                mt: 3,
              }}
            >
              Submit
            </CustomButton>
          </CustomModal>
        </Formik>
      )}

      <Grid item xs={6} md={3} gap={2}>
        <Button
          onClick={handleSenderIdModalOpen}
          variant="contained"
          type="submit"
          size={upSM ? 'medium' : 'medium'}
          sx={{
            marginRight: '7px',
            borderRadius: '7px',
            color: '#ffffff',
            backgroundColor: '#1677FF',
            '&: hover': {
              backgroundColor: '#4096FF',
            },
            fontSize: '14px',
          }}
        >
          Create New Sender ID
        </Button>
        <Button
          variant="contained"
          type="submit"
          size={upSM ? 'medium' : 'medium'}
          sx={{
            marginRight: '7px',
            borderRadius: '7px',
            color: '#ffffff',
            backgroundColor: '#1677FF',
            '&: hover': {
              backgroundColor: '#4096FF',
            },
            fontSize: '14px',
          }}
          // onClick={handleModalOpen}
        >
          Enable / Disable Sender ID
        </Button>
      </Grid>
      <Box sx={{ py: 2 }}>
        <DataTable rows={rows} columns={columns} checkboxSelection={true} />
      </Box>
    </Fragment>
  );
};
export default SenderId;
