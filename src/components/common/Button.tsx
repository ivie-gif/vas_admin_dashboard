import React from 'react';
import { SxProps, Theme } from '@mui/material';
import { Button, Box } from '@mui/material';

interface ButtonProps {
  variant?: 'text' | 'outlined' | 'contained';
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  sx?: SxProps<Theme>;
  position?: 'left' | 'center' | 'right';
}

const CustomButton: React.FC<ButtonProps> = ({
  variant = 'contained',
  onClick,
  disabled = false,
  children,
  sx,
  position = 'left',
}) => {
  // Map position to CSS justifyContent
  const justifyContent =
    position === 'center' ? 'center' : position === 'right' ? 'flex-end' : 'flex-start';

  return (
    <Box sx={{ display: 'flex', justifyContent, width: '100%' }}>
      <Button variant={variant} onClick={onClick} disabled={disabled} sx={sx}>
        {children}
      </Button>
    </Box>
  );
};

export default CustomButton;
