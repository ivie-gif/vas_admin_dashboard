import { Card, Palette, Stack, Typography, useTheme } from '@mui/material';
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
            <Typography sx={{ fontSize: { xs: 'body2.fontSize', md: 'h6.fontSize' } }}>
              {/* {currencyFormat(Number(title))} */}
              {title}
            </Typography>
          </div>
          <div>{cardData.icon}</div>
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
