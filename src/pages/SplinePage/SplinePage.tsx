import Spline from '@splinetool/react-spline';
import {Box,Container,Typography} from '@mui/material';
import { rootSx } from './style';

export default function SplinePage() {
  return (
    <Box sx={rootSx}
    >
     
            <Box className="title">
                <Typography variant='h1'>Challenges to new</Typography>
                <Typography variant='h1'>touchpoints</Typography>
            </Box>
            <Spline scene="https://prod.spline.design/c31kwQf9MYj4B8RC/scene.splinecode" />
    </Box>
  );
}
