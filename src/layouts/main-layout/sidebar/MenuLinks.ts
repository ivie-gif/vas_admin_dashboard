import { SvgIconProps } from '@mui/material';
import HomeIcon from 'components/icons/menu-icons/HomeIcon';
import InvestIcon from 'components/icons/menu-icons/InvestIcon';
import SettingsIcon from 'components/icons/menu-icons/SettingsIcon';
import SignInIcon from 'components/icons/menu-icons/SignInIcon';
import TransferIcon from 'components/icons/menu-icons/TransferIcon';
import UserIcon from 'components/icons/menu-icons/UserIcon';
// import { CustomExpandMoreIcon } from 'components/icons/menu-icons/ExpandIcon';
import paths from 'routes/path';

export enum linkEnum {
  Dashboard = 'dashboard',
  FundDeposit = 'Fund Deposit',
  UsersWallets = 'Users Wallets',
  WalletReports = 'Reports',
  WalletTransactions = 'Wallet Trans.',
  PaymentRequests = 'Payment Request',
  AllWallets = 'All Wallets',
  SMS = 'SMS',
  SmsUsers = 'SMS Users',
  SmppAccounts = 'SMPP Accounts',
  SenderId = 'Sender ID',
  SmsTransaction = 'SMS Transaction',
  ScheduledSms = 'Scheduled SMS',
  ContactGroups = 'Contact Groups',
  Credit = 'credit-cards',
  Loans = 'loans',
  Services = 'Services',
  Setting = 'Setting',
  Logout = 'Logout',
  Signup = 'sign-up',
  ForgetPassword = 'forget-password',
  ResetPassword = 'reset-password',
}

export interface MenuLinkType {
  id: number;
  title: string;
  link?: string;
  icon?: (props: SvgIconProps) => JSX.Element;
  available: boolean;
  subMenu?: Omit<MenuLinkType, 'submenu'>[];
  // expandIcon?: (props: SvgIconProps) => JSX.Element;
  expandIcon?: boolean;
}
export const menuLinks: MenuLinkType[] = [
  {
    id: 1,
    title: linkEnum.Dashboard,
    link: '/',
    icon: HomeIcon,
    available: true,
  },
  {
    id: 2,
    title: linkEnum.FundDeposit,
    link: 'FundDeposit',
    icon: TransferIcon,
    available: false,
  },
  {
    id: 3,
    title: linkEnum.UsersWallets,
    link: 'UsersWallets',
    icon: UserIcon,
    available: false,
  },
  {
    id: 4,
    title: linkEnum.WalletReports,
    // link: 'WalletReports',
    icon: UserIcon,
    expandIcon: true,
    available: false,
    subMenu: [
      {
        id: 11,
        title: linkEnum.WalletTransactions,
        link: paths.walletTransactions,
        icon: TransferIcon,
        available: false,
      },
      {
        id: 12,
        title: linkEnum.PaymentRequests,
        link: paths.paymentRequests,
        icon: InvestIcon,
        available: false,
      },
      {
        id: 13,
        title: linkEnum.AllWallets,
        link: paths.allWallets,
        icon: UserIcon,
        available: false,
      },
    ],
  },
  {
    id: 5,
    title: linkEnum.SMS,
    // link: 'SMS',
    icon: InvestIcon,
    expandIcon: true,
    available: false,
    subMenu: [
      {
        id: 14,
        title: linkEnum.SmsUsers,
        link: paths.smsUsers,
        icon: TransferIcon,
        available: false,
      },
      {
        id: 15,
        title: linkEnum.SmppAccounts,
        link: paths.smppAccounts,
        icon: InvestIcon,
        available: false,
      },
      {
        id: 16,
        title: linkEnum.SenderId,
        link: paths.senderId,
        icon: UserIcon,
        available: false,
      },
      {
        id: 17,
        title: linkEnum.SmsTransaction,
        link: paths.smsTransaction,
        icon: TransferIcon,
        available: false,
      },
      {
        id: 18,
        title: linkEnum.ScheduledSms,
        link: paths.scheduledSms,
        icon: InvestIcon,
        available: false,
      },
      {
        id: 19,
        title: linkEnum.ContactGroups,
        link: paths.contactGroups,
        icon: UserIcon,
        available: false,
      },
    ],
  },
  // {
  //   id: 5,
  //   title: linkEnum.Credit,
  //   link: '#!',
  //   icon: CreditCardIcon,
  //   available: false,
  // },
  // {
  //   id: 6,
  //   title: linkEnum.Loans,
  //   link: '#!',
  //   icon: LoanIcon,
  //   available: false,
  // },
  // {
  //   id: 7,
  //   title: linkEnum.Services,
  //   link: '#!',
  //   icon: ServiceIcon,
  //   available: false,
  // },
  {
    id: 8,
    title: linkEnum.Setting,
    link: '#!',
    icon: SettingsIcon,
    available: false,
  },
  {
    id: 9,
    title: linkEnum.Logout,
    link: '/authentication/logout',
    icon: SignInIcon,
    available: false,
  },
];
