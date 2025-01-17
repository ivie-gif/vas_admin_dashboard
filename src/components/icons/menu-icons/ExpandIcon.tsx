import { SvgIconProps } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const CustomExpandMoreIcon = (props: SvgIconProps) => {
  return <ExpandMoreIcon {...props} />;
};

const CustomExpandLessIcon = (props: SvgIconProps) => {
  return <ExpandLessIcon {...props} />;
};

export { CustomExpandMoreIcon, CustomExpandLessIcon };
