import React from 'react';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Divider } from '@mui/material';
import { theme } from 'theme/theme';

const modalStyle = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface ReusableModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children?: React.ReactNode;
}

const CustomModal: React.FC<ReusableModalProps> = ({
  open,
  onClose,
  title,
  description,
  children,
}) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="reusable-modal-title"
      aria-describedby="reusable-modal-description"
    >
      <Box sx={modalStyle}>
        <Typography
          id="reusable-modal-title"
          variant="h6"
          component="h2"
          sx={{ textAlign: { xs: 'center', md: 'center' }, fontWeight: 'bold', mb: 1 }}
        >
          {title}
        </Typography>
        <Divider sx={{ border: `1px solid ${theme.palette.neutral.main}`, mb: 3 }} />
        <Typography id="reusable-modal-description" sx={{ mt: 2 }}>
          {description}
        </Typography>
        {children}
      </Box>
    </Modal>
  );
};

export default CustomModal;
