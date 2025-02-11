import React from 'react';
import TextField from '@mui/material/TextField';
import { SxProps, Theme } from '@mui/material';

interface InputFieldProps {
  id?: string;
  label?: string;
  variant?: 'outlined' | 'filled' | 'standard';
  type?: string;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  helperText?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  placeholder?: string;
  sx?: SxProps<Theme>;
}

const CustomInputField: React.FC<InputFieldProps> = ({
  id = 'custom-input',
  label,
  variant = 'outlined',
  type = 'text',
  value,
  onChange,
  error = false,
  helperText = '',
  fullWidth = false,
  disabled = false,
  placeholder = '',
  sx,
}) => {
  return (
    <TextField
      id={id}
      label={label}
      variant={variant}
      type={type}
      value={value}
      onChange={onChange}
      error={error}
      helperText={helperText}
      fullWidth={fullWidth}
      disabled={disabled}
      placeholder={placeholder}
      sx={sx}
    />
  );
};

export default CustomInputField;
