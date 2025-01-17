export const rootPaths = {
  root: '/',
  pagesRoot: '/',
  authRoot: '/authentication',
  errorRoot: '/error',
};

/**
 * Object containing various paths used in the application.
 */
const paths = {
  default: `${rootPaths.root}`,
  transactions: `${rootPaths.pagesRoot}transactions`,
  creditCards: `${rootPaths.pagesRoot}credit-cards`,
  investments: `${rootPaths.pagesRoot}investments`,
  loans: `${rootPaths.pagesRoot}loans`,
  accounts: `${rootPaths.pagesRoot}accounts`,
  login: `${rootPaths.authRoot}/login`,
  signup: `${rootPaths.authRoot}/sign-up`,
  forgetPassword: `${rootPaths.authRoot}/forget-password`,
  resetPassword: `${rootPaths.authRoot}/reset-password`,
  notFound: `${rootPaths.errorRoot}/404`,

  // new paths
  fundDeposit: `${rootPaths.pagesRoot}fundDeposit`,
  // for wallet
  usersWallets: `${rootPaths.pagesRoot}usersWallets`,
  walletTransactions: `${rootPaths.pagesRoot}walletReports/walletTransactions`,
  walletReports: `${rootPaths.pagesRoot}walletReports`,
  paymentRequest: `${rootPaths.pagesRoot}walletReports/paymentRequest`,
  allWallets: `${rootPaths.pagesRoot}walletReports/allWallets`,
  // for sms
  sms: `${rootPaths.pagesRoot}sms`,
  smsUsers: `${rootPaths.pagesRoot}sms/smsUsers`,
  smppAccounts: `${rootPaths.pagesRoot}sms/smppAccounts`,
  senderId: `${rootPaths.pagesRoot}sms/senderId`,
  smsTransaction: `${rootPaths.pagesRoot}sms/smsTransaction`,
  scheduledSms: `${rootPaths.pagesRoot}sms/scheduledSms`,
  contactGroups: `${rootPaths.pagesRoot}sms/contactGroups`,
};

export default paths;
