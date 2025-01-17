import { SvgIconProps } from '@mui/material';
import HomeIcon from 'components/icons/menu-icons/HomeIcon';
import InvestIcon from 'components/icons/menu-icons/InvestIcon';
import SettingsIcon from 'components/icons/menu-icons/SettingsIcon';
import SignInIcon from 'components/icons/menu-icons/SignInIcon';
import TransferIcon from 'components/icons/menu-icons/TransferIcon';
import UserIcon from 'components/icons/menu-icons/UserIcon';
import { CustomExpandMoreIcon } from 'components/icons/menu-icons/ExpandIcon';

export enum linkEnum {
  Dashboard = 'dashboard',
  FundDeposit = 'Fund Deposit',
  UsersWallets = 'Users Wallets',
  WalletReports = 'Reports',
  WalletTransactions = 'Wallet Trans.',
  PaymentRequest = 'Payment Request',
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
  link: string;
  icon?: (props: SvgIconProps) => JSX.Element;
  available: boolean;
  subMenu?: Omit<MenuLinkType, 'submenu'>[];
  expandIcon?: (props: SvgIconProps) => JSX.Element;
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
    link: '#!',
    icon: TransferIcon,
    available: false,
  },
  {
    id: 3,
    title: linkEnum.UsersWallets,
    link: '#!',
    icon: UserIcon,
    available: false,
  },
  {
    id: 4,
    title: linkEnum.WalletReports,
    link: '#!',
    icon: UserIcon,
    expandIcon: CustomExpandMoreIcon,
    available: false,
    subMenu: [
      {
        id: 11,
        title: linkEnum.WalletTransactions,
        link: '#!',
        icon: TransferIcon,
        available: false,
      },
      {
        id: 12,
        title: linkEnum.PaymentRequest,
        link: '#!',
        icon: InvestIcon,
        available: false,
      },
      {
        id: 13,
        title: linkEnum.AllWallets,
        link: '#!',
        icon: UserIcon,
        available: false,
      },
    ],
  },
  {
    id: 5,
    title: linkEnum.SMS,
    link: '#!',
    icon: InvestIcon,
    expandIcon: CustomExpandMoreIcon,
    available: false,
    subMenu: [
      {
        id: 14,
        title: linkEnum.SmsUsers,
        link: '#!',
        icon: TransferIcon,
        available: false,
      },
      {
        id: 15,
        title: linkEnum.SmppAccounts,
        link: '#!',
        icon: InvestIcon,
        available: false,
      },
      {
        id: 16,
        title: linkEnum.SenderId,
        link: '#!',
        icon: UserIcon,
        available: false,
      },
      {
        id: 17,
        title: linkEnum.SmsTransaction,
        link: '#!',
        icon: TransferIcon,
        available: false,
      },
      {
        id: 18,
        title: linkEnum.ScheduledSms,
        link: '#!',
        icon: InvestIcon,
        available: false,
      },
      {
        id: 19,
        title: linkEnum.ContactGroups,
        link: '#!',
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
