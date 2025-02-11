import { Fragment } from 'react/jsx-runtime';
import { Grid, Typography } from '@mui/material';
import WeeklyActivity from 'components/sections/dashboard/activity/WeeklyActivity';
import BalanceHistory from 'components/sections/dashboard/balance/BalanceHistory';
import MyCards from 'components/sections/dashboard/creditCards/MyCards';
import ExpenseStatistics from 'components/sections/dashboard/expense/ExpenseStatistics';
import InvoiceOverviewTable from 'components/sections/dashboard/invoice/InvoiceOverviewTable';
import RecentTransactions from 'components/sections/dashboard/transactions/RecentTransaction';
import QuickTransfer from 'components/sections/dashboard/transfer/QuickTransfer';
import { useLocation } from 'react-router-dom';

const Dashboard = () => {
  const location = useLocation();

  // Extract the route name from the pathname
  const pathSegments = location.pathname.split('/').filter((segment) => segment.trim() !== '');
  const routeName = pathSegments.length > 0 ? pathSegments[pathSegments.length - 1] : 'Overview';
  // Insert a space before each uppercase letter that follows a lowercase letter
  const routeDisplayName = routeName.replace(/([a-z])([A-Z])/g, '$1 $2');

  return (
    <Fragment>
      <Typography
        sx={{
          display: { xs: 'block', md: 'block' },
          fontSize: { sm: 'h6.fontSize', xl: 'h6.fontSize' },
          fontWeight: 600,
          color: '#D36128',
          pt: 5,
          pb: 2,
          flex: 1,
          textAlign: { xs: 'left', md: 'left' },
          textTransform: 'capitalize',
        }}
      >
        {routeDisplayName}
      </Typography>
      <Grid container spacing={{ xs: 2.5, sm: 3 }} mb={3}>
        {/* ------------- Card section ---------------- */}
        <Grid item xs={12} xl={8} zIndex={1}>
          <MyCards />
        </Grid>
        <Grid item xs={12} xl={4} zIndex={1}>
          <RecentTransactions />
        </Grid>

        {/* ------------- Chart section ---------------- */}
        <Grid item xs={12} lg={8} zIndex={1}>
          <WeeklyActivity />
        </Grid>
        <Grid item xs={12} lg={4}>
          <ExpenseStatistics />
        </Grid>

        {/* ------------- Slider section ---------------- */}
        <Grid item xs={12} lg={6} xxl={4} zIndex={1}>
          <QuickTransfer />
        </Grid>
        <Grid item xs={12} lg={6} xxl={8} zIndex={1}>
          <BalanceHistory />
        </Grid>

        {/* ------------- Data-Grid section ---------------- */}
        <Grid item xs={12}>
          <InvoiceOverviewTable />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Dashboard;
