import { Typography } from '@mui/material';
// import Image from 'components/base/Image';
import { Fragment } from 'react/jsx-runtime';

const Logo = () => {
  return (
    <Fragment>
      {/* <Image src="/home/bankdash.svg" alt="Logo" sx={{ width: 36 }} /> */}
      <Typography variant="h2" sx={{ color: '#001427', fontWeight: 'bold', textAlign: 'left' }}>
        Broadbased
      </Typography>
    </Fragment>
  );
};

export default Logo;
