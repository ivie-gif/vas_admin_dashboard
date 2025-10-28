import { Box, Stack, Typography } from '@mui/material';
// import Image from 'next/image';

interface TelcoCardProps {
  telco: string;
  price: number;
}

const TelcoCard = ({ telco, price }: TelcoCardProps) => {
  // const telcoIcons: Record<string, string> = {
  //   MTN: '/icons/mtn.png',
  //   Glo: '/icons/glo.png',
  //   Airtel: '/icons/airtel.png',
  //   '9Mobile': '/icons/9mobile.png',
  // };

  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={2}
      sx={{
        p: 2,
        borderBottom: '1px solid #e0e0e0',
      }}
    >
      <Box>
        {/* <Image
          src={telcoIcons[telco]}
          alt={`${telco} icon`}
          width={30}
          height={30}
        /> */}
      </Box>
      <Stack>
        <Typography variant="body1" fontWeight={600}>
          {telco}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ₦{price}/SMS
        </Typography>
      </Stack>
    </Stack>
  );
};

export default TelcoCard;
