import { ReactElement } from 'react';
import { Card, Palette, Stack, Typography, useTheme, Box } from '@mui/material';
import { SxProps, Theme } from '@mui/material';
import BankLogoAlt from 'assets/bank-logo-alt.svg';
import BankLogo from 'assets/bank-logo.svg';
import ChipCardBlack from 'assets/chip_black.png';
import ChipCardWhite from 'assets/chip_white.png';

type IconType = ReactElement;

export interface CreditCardData {
  title?: string;
  cardHolder?: string;
  validThru?: string;
  cardNumber?: number;
  theme?: 'blue' | 'white';
  icon?: IconType;
  sx?: SxProps<Theme>;
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
        borderRadius: '10px',
        borderColor: 'action.focus',
        width: 'calc(25% - 16px)',
        flexBasis: 'calc(25% - 16px)',
        boxShadow: '5px 5px 8px rgba(0,0,0,0.15)',
        '&:hover': {
          boxShadow: 'none',
        },
      }}
    >
      <Stack sx={{ gap: 2, px: { xs: 2.5, md: 3 }, pt: 5, pb: { xs: 2, md: 1 } }}>
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
                color: '#001427',
              }}
            >
              {title}
            </Typography>
          </div>
          <Box sx={{ color: '#001427' }}>{cardData.icon}</Box>
        </Stack>
      </Stack>
      <Typography
        sx={{
          background: cardGradient,
          mt: 1.25,
          px: 3,
          pt: { xs: 2, md: 4 },
          pb: { xs: 2, md: 3 },
          borderTop: borderStyle,
          borderColor: 'action.focus',
          color: '#001427',
          fontSize: { xs: 'h6.fontSize', md: 'h6.fontSize' },
        }}
      >
        {cardNumber}
      </Typography>
    </Card>
  );
};

export default CreditCard;
