import { Card, Palette, Stack, Typography, useTheme, Box } from '@mui/material';
import { ReactElement } from 'react';
import BankLogoAlt from 'assets/bank-logo-alt.svg';
import BankLogo from 'assets/bank-logo.svg';
import ChipCardBlack from 'assets/chip_black.png';
import ChipCardWhite from 'assets/chip_white.png';
// import Image from 'components/base/Image';
// import { currencyFormat } from 'helpers/utils';

type IconType = ReactElement;

export interface CreditCardData {
  title?: string;
  cardHolder?: string;
  validThru?: string;
  cardNumber?: number;
  theme?: 'blue' | 'white';
  icon?: IconType;
}

interface CreditCardProps {
  theme?: 'blue' | 'white';
  cardData: CreditCardData;
}

const getThemeStyles = (theme: 'blue' | 'white', palette: Palette) => {
  switch (theme) {
    case 'blue':
      return {
        cardBg: palette.gradients.blueGradient,
        textColor: palette.common.white,
        chipCard: ChipCardWhite,
        bankLogo: BankLogo,
        cardGradient: palette.gradients.whiteGradient,
        borderStyle: 'none',
      };
    case 'white':
      return {
        cardBg: palette.common.white,
        textColor: palette.primary.darker,
        labelColor: palette.primary.light,
        chipCard: ChipCardBlack,
        bankLogo: BankLogoAlt,
        cardGradient: palette.gradients.whiteCardGradient,
        borderStyle: 1,
      };
    default:
      return {
        cardBg: palette.common.white,
        textColor: palette.common.black,
        labelColor: '',
        chipCard: ChipCardWhite,
        bankLogo: BankLogo,
        cardGradient: '',
      };
  }
};

const CreditCard = ({ theme = 'white', cardData }: CreditCardProps) => {
  const { palette } = useTheme();
  const { cardBg, textColor, cardGradient, borderStyle } = getThemeStyles(theme, palette);

  const { title, cardNumber } = cardData;

  return (
    <Card
      sx={{
        flexGrow: 1,
        overflow: 'hidden',
        background: cardBg,
        color: textColor,
        border: 1,
        boxShadow: '2px 2px 6px 0px rgba(12, 12, 13, 0.3)',
        borderColor: 'action.focus',
        width: 'calc(25% - 16px)',
        flexBasis: 'calc(25% - 16px)',
      }}
    >
      <Stack sx={{ gap: 4, px: { xs: 2.5, md: 3 }, pt: 3, pb: { xs: 2, md: 3 } }}>
        <Stack
          flexWrap="wrap"
          direction="row"
          sx={{ justifyContent: 'space-between', alignItems: 'center' }}
        >
          <div>
            <Typography
              sx={{
                fontSize: { xs: 'body2.fontSize', md: 'h5.fontSize' },
                fontWeight: 'h1.fontWeight',
              }}
            >
              {/* {currencyFormat(Number(title))} */}
              {title}
            </Typography>
          </div>
          <Box sx={{ color: '#D36128' }}>{cardData.icon}</Box>
        </Stack>
      </Stack>
      <Stack
        direction="row"
        gap={2}
        sx={{
          background: cardGradient,
          justifyContent: 'space-between',
          alignItems: 'center',
          mt: 1.25,
          px: 3,
          pt: { xs: 2, md: 3 },
          pb: { xs: 2, md: 4 },
          borderTop: borderStyle,
          borderColor: 'action.focus',
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: 'body1.fontSize', md: 'h3.fontSize' },
            fontWeight: 'h1.fontWeight',
          }}
        >
          {cardNumber}
        </Typography>
        {/* <Image src={bankLogo} alt="bank-logo" sx={{ width: 50 }} /> */}
      </Stack>
    </Card>
  );
};

export default CreditCard;
