import { lazy, Suspense } from 'react';
import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom';
import paths, { rootPaths } from './path';

/* ---------------- Lazy loads various components ------------------------- */
const App = lazy(() => import('App'));
const MainLayout = lazy(() => import('layouts/main-layout'));
const AuthLayout = lazy(() => import('layouts/auth-layout'));

const Dashboard = lazy(() => import('pages/dashboard'));
const FundDeposit = lazy(() => import('pages/fundDeposit'));
const UsersWallets = lazy(() => import('pages/usersWallet'));
const WalletTransactions = lazy(() => import('pages/walletReports/walletTransactions'));
const PaymentRequests = lazy(() => import('pages/walletReports/paymentRequests'));
const AllWallets = lazy(() => import('pages/walletReports/allWallets'));
const SmsUsers = lazy(() => import('pages/sms/smsUsers'));
const SmppAccounts = lazy(() => import('pages/sms/smppAccounts'));
const SenderId = lazy(() => import('pages/senderId'));
const SmsTransaction = lazy(() => import('pages/sms/smsTransaction'));
const ScheduledSms = lazy(() => import('pages/sms/scheduledSms'));
const ContactGroups = lazy(() => import('pages/sms/contactGroups'));

const Spinner = lazy(() => import('components/loading/Splash'));
const LoadingProgress = lazy(() => import('components/loading/LoadingProgress'));

const LoginPage = lazy(() => import('pages/authentication/login'));
const SignUpPage = lazy(() => import('pages/authentication/signup'));
const ForgetPasswordPage = lazy(() => import('pages/authentication/forget-password'));
const ResetPasswordPage = lazy(() => import('pages/authentication/reset-password'));

const NotFoundPage = lazy(() => import('pages/not-found'));
/* -------------------------------------------------------------------------- */

/**
 * @Defines the routes for the application using React Router.
 */
export const routes = [
  {
    element: (
      <Suspense fallback={<Spinner />}>
        <App />
      </Suspense>
    ),
    children: [
      {
        path: paths.default,
        element: (
          <MainLayout>
            <Suspense fallback={<LoadingProgress />}>
              <Outlet />
            </Suspense>
          </MainLayout>
        ),
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          {
            path: paths.transactions,
            element: <Dashboard />,
          },
          {
            path: paths.fundDeposit,
            element: <FundDeposit />,
          },
          {
            path: paths.usersWallets,
            element: <UsersWallets />,
          },
          {
            path: paths.walletReports,
            // element: <WalletReports />,
            children: [
              {
                path: paths.walletTransactions,
                element: <WalletTransactions />,
              },
              {
                path: paths.paymentRequests,
                element: <PaymentRequests />,
              },
              {
                path: paths.allWallets,
                element: <AllWallets />,
              },
            ],
          },

          {
            path: paths.sms,
            // element: <WalletReports />,
            children: [
              {
                path: paths.smsUsers,
                element: <SmsUsers />,
              },
              {
                path: paths.smppAccounts,
                element: <SmppAccounts />,
              },
              {
                path: paths.smsTransaction,
                element: <SmsTransaction />,
              },
              {
                path: paths.scheduledSms,
                element: <ScheduledSms />,
              },
              {
                path: paths.contactGroups,
                element: <ContactGroups />,
              },
            ],
          },
          {
            path: paths.senderId,
            element: <SenderId />,
          },
        ],
      },

      {
        path: rootPaths.authRoot,
        element: <AuthLayout />,
        children: [
          {
            path: paths.login,
            element: <LoginPage />,
          },
          {
            path: paths.signup,
            element: <SignUpPage />,
          },
          {
            path: paths.forgetPassword,
            element: <ForgetPasswordPage />,
          },
          {
            path: paths.resetPassword,
            element: <ResetPasswordPage />,
          },
        ],
      },
      {
        path: rootPaths.errorRoot,
        children: [
          {
            path: paths.notFound,
            element: <NotFoundPage />,
          },
        ],
      },

      {
        path: '*',
        element: <Navigate to={paths.notFound} replace />,
      },
    ],
  },
];

// const router = createBrowserRouter(routes, {
//   basename: '/dashboard',
// });

const router = createBrowserRouter(routes);

export default router;
