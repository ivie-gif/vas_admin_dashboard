// import { SvgIconProps } from '@mui/material';
import { ReactElement } from 'react';
import { Stack } from '@mui/material';
import { SxProps, Theme } from '@mui/material';
import CreditCard, { CreditCardData } from 'components/sections/dashboard/creditCards/CreditCard';
import { Fragment } from 'react/jsx-runtime';
import SimpleBar from 'simplebar-react';
import {
  CustomSMSIcon,
  CustomUsersIcon,
  CustomSentIcon,
  CustomUndeliveredIcon,
  CustomWalletIcon,
  CustomSenderIDIcon,
} from 'components/sections/dashboard/creditCardsIcons/allCreditCardIcons';

/* ---------------------------- Credit Card Data----------------------------- */
type IconType = ReactElement;

interface CardData {
  theme: 'blue' | 'white';
  data: CreditCardData;
  id: number;
  icon?: IconType;
  sx?: SxProps<Theme>;
}
const cardData: CardData[] = [
  {
    id: 1,
    theme: 'white',
    data: {
      title: 'Total Active Users',
      cardNumber: 14,
      icon: <CustomUsersIcon />,
    },
  },
  {
    id: 2,
    theme: 'white',
    data: {
      title: 'Total SMSes Sent',
      cardNumber: 10,
      icon: <CustomSentIcon />,
    },
  },
  {
    id: 3,
    theme: 'white',
    data: {
      title: 'Total Delivered SMSes',
      cardNumber: 15,
      icon: <CustomSMSIcon />,
    },
  },
  {
    id: 4,
    theme: 'white',
    data: {
      title: 'Total Undeliv. SMSes',
      cardNumber: 13,
      icon: <CustomUndeliveredIcon />,
    },
  },
  {
    id: 5,
    theme: 'white',
    data: {
      title: 'Total Wallet Amount',
      cardNumber: 17,
      icon: <CustomWalletIcon />,
    },
  },
  {
    id: 6,
    theme: 'white',
    data: {
      title: 'Total SenderID Regist.',
      cardNumber: 116,
      icon: <CustomSenderIDIcon />,
    },
  },
];

const MyCards = () => {
  return (
    <Fragment>
      <SimpleBar style={{ maxWidth: '100%', overflowX: 'auto', marginTop: '7px' }}>
        <Stack
          flexWrap="wrap"
          direction="row"
          justifyContent="space-between"
          gap={4}
          sx={{ minWidth: 800, padding: '10px' }}
        >
          {cardData.map((card) => (
            <CreditCard key={card.id} theme={card.theme} cardData={card.data} />
          ))}
        </Stack>
      </SimpleBar>
    </Fragment>
  );
};

export default MyCards;
