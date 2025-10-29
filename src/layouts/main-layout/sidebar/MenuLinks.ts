// import { SvgIconProps } from '@mui/material';
// import HomeIcon from 'components/icons/menu-icons/HomeIcon';
// import InvestIcon from 'components/icons/menu-icons/InvestIcon';
// import SettingsIcon from 'components/icons/menu-icons/SettingsIcon';
// import SignInIcon from 'components/icons/menu-icons/SignInIcon';
// import TransferIcon from 'components/icons/menu-icons/TransferIcon';
// import UserIcon from 'components/icons/menu-icons/UserIcon';
import paths from 'routes/path';

import { AiOutlineDashboard } from 'react-icons/ai';
import { BiWalletAlt } from 'react-icons/bi';
import { BsWalletFill } from 'react-icons/bs';
import { TbReport, TbFileReport } from 'react-icons/tb';
import { FaSms, FaAddressBook } from 'react-icons/fa';
import { MdOutlinePermPhoneMsg, MdMessage } from 'react-icons/md';
import { BiMessageEdit, BiPowerOff } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';

export enum linkEnum {
  Dashboard = 'Dashboard',
  FundDeposit = 'Fund Deposit',
  UsersWallets = 'Users Wallets',
  WalletReports = 'Reports',
  WalletTransactions = 'Wallet Trans.',
  PaymentRequests = 'Payment Req.',
  AllWallets = 'All Wallets',
  SMS = 'SMS',
  SmsUsers = 'SMS Users',
  SmppAccounts = 'SMPP Accts.',
  SenderId = 'Sender ID',
  SmsTransaction = 'SMS Trans.',
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
  // icon?: JSX.Element;
  icon?: React.ElementType;
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
    available: true,
    icon: AiOutlineDashboard,
  },
  {
    id: 2,
    title: linkEnum.FundDeposit,
    link: 'FundDeposit',
    icon: BiWalletAlt,
    available: false,
  },
  {
    id: 3,
    title: linkEnum.UsersWallets,
    link: 'UsersWallets',
    icon: BsWalletFill,
    available: false,
  },
  {
    id: 4,
    title: linkEnum.WalletReports,
    // link: 'WalletReports',
    icon: TbReport,
    expandIcon: true,
    available: false,
    subMenu: [
      {
        id: 11,
        title: linkEnum.WalletTransactions,
        link: paths.walletTransactions,
        icon: BiWalletAlt,
        available: false,
      },
      {
        id: 12,
        title: linkEnum.PaymentRequests,
        link: paths.paymentRequests,
        icon: BiWalletAlt,
        available: false,
      },
      {
        id: 13,
        title: linkEnum.AllWallets,
        link: paths.allWallets,
        icon: BsWalletFill,
        available: false,
      },
    ],
  },
  {
    id: 5,
    title: linkEnum.SMS,
    // link: 'SMS',
    icon: FaSms,
    expandIcon: true,
    available: false,
    subMenu: [
      {
        id: 14,
        title: linkEnum.SmsUsers,
        link: paths.smsUsers,
        icon: FaAddressBook,
        available: false,
      },
      {
        id: 15,
        title: linkEnum.SmppAccounts,
        link: paths.smppAccounts,
        icon: FaAddressBook,
        available: false,
      },
      {
        id: 16,
        title: linkEnum.SmsTransaction,
        link: paths.smsTransaction,
        icon: MdMessage,
        available: false,
      },
      {
        id: 17,
        title: linkEnum.ScheduledSms,
        link: paths.scheduledSms,
        icon: TbFileReport,
        available: false,
      },
      {
        id: 18,
        title: linkEnum.ContactGroups,
        link: paths.contactGroups,
        icon: MdOutlinePermPhoneMsg,
        available: false,
      },
    ],
  },
  {
    id: 8,
    title: linkEnum.SenderId,
    link: 'SenderId',
    icon: BiMessageEdit,
    available: false,
  },
  {
    id: 9,
    title: linkEnum.Setting,
    link: '#!',
    icon: FiSettings,
    available: false,
  },
  {
    id: 10,
    title: linkEnum.Logout,
    link: '/authentication/logout',
    icon: BiPowerOff,
    available: false,
  },
];
