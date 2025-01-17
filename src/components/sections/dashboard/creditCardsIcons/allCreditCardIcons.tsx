import { SvgIconProps } from '@mui/material';
import SmsIcon from '@mui/icons-material/Sms';
import GroupIcon from '@mui/icons-material/Group';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import UnsubscribeIcon from '@mui/icons-material/Unsubscribe';
import WalletIcon from '@mui/icons-material/Wallet';
import CreditScoreIcon from '@mui/icons-material/CreditScore';

const CustomSMSIcon = (props: SvgIconProps) => {
  return <SmsIcon {...props} />;
};

const CustomUsersIcon = (props: SvgIconProps) => {
  return <GroupIcon {...props} />;
};

const CustomSentIcon = (props: SvgIconProps) => {
  return <MarkEmailReadIcon {...props} />;
};

const CustomUndeliveredIcon = (props: SvgIconProps) => {
  return <UnsubscribeIcon {...props} />;
};

const CustomWalletIcon = (props: SvgIconProps) => {
  return <WalletIcon {...props} />;
};

const CustomSenderIDIcon = (props: SvgIconProps) => {
  return <CreditScoreIcon {...props} />;
};

export {
  CustomSMSIcon,
  CustomUsersIcon,
  CustomSentIcon,
  CustomUndeliveredIcon,
  CustomWalletIcon,
  CustomSenderIDIcon,
};
