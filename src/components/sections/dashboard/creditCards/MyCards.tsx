// import { SvgIconProps } from '@mui/material';
import { ReactElement } from 'react';
import { Stack } from '@mui/material';
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
}
const cardData: CardData[] = [
  {
    id: 1,
    theme: 'blue',
    data: {
      title: 'Total Active Users',
      cardNumber: 14,
      icon: <CustomUsersIcon />,
    },
  },
  {
    id: 2,
    theme: 'blue',
    data: {
      title: 'Total SMSes Sent',
      cardNumber: 10,
      icon: <CustomSentIcon />,
    },
  },
  {
    id: 3,
    theme: 'blue',
    data: {
      title: 'Total Delivered SMSes',
      cardNumber: 15,
      icon: <CustomSMSIcon />,
    },
  },
  {
    id: 4,
    theme: 'blue',
    data: {
      title: 'Total Undeliv. SMSes',
      cardNumber: 13,
      icon: <CustomUndeliveredIcon />,
    },
  },
  {
    id: 5,
    theme: 'blue',
    data: {
      title: 'Total Wallet Amount',
      cardNumber: 17,
      icon: <CustomWalletIcon />,
    },
  },
  {
    id: 6,
    theme: 'blue',
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
      {/* <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ pt: 3, pb: 2.5 }}
      >
        <Typography
          sx={{
            fontSize: { xs: 'body2.fontSize', md: 'h6.fontSize', xl: 'h3.fontSize' },
            fontWeight: 600,
          }}
        >
          My Cards
        </Typography>
        <Link
          variant="h5"
          href="#!"
          sx={{
            fontSize: { xs: 'caption.fontSize', md: 'body1.fontSize', xl: 'h5.fontSize' },
            fontWeight: 600,
            pr: 1,
          }}
        >
          See All
        </Link>
      </Stack> */}
      <SimpleBar style={{ maxWidth: '100%', overflowX: 'auto', marginTop: '35px' }}>
        <Stack
          flexWrap="wrap"
          direction="row"
          justifyContent="space-between"
          gap={4}
          sx={{ minWidth: 800 }}
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
