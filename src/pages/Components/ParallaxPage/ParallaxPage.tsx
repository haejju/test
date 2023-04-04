import Spline from '@splinetool/react-spline';
import {Box,Container,Typography} from '@mui/material';
import { rootSx } from './style';
import { Parallax,ParallaxLayer } from '@react-spring/parallax';


export default function ParallaxPage() {
  return (
    <Box className="ParallaxPage-root" sx={rootSx}>
      <Parallax pages={4} style={{top:'0', left:'0'}}>
        <ParallaxLayer offset={0} speed={0.1}>
          <Box className="ParallaxPage-title">
            <Typography variant='h1'>Challenges to new</Typography>
            <Typography variant='h1'>touchpoints</Typography>
          </Box>
          <Box className="ParallaxPage-titleText">
            <Typography variant='body1'>
              empower your connections in the digital age with a new 
              perspective. In a world where the network is constantly 
              evolving, we at VIRUN INTERACTIVE are pushing boundaries 
              and creating innovative solutions to make the connection 
              between individuals and businesses easier and more intuitive. 
            </Typography>
          </Box>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.1}>
          <Box className="ParallaxPage-title">
            <Typography variant='h1'>Challenges to new</Typography>
            <Typography variant='h1'>touchpoints</Typography>
          </Box>
          <Box className="ParallaxPage-titleText">
            <Typography variant='body1'>
              Don't settle the status quo,
              join us in challenging the norm and revolutionizing
              the way we connect. Join VIRUN INTERACTIVE and
              discover a better way to connect in the modern world. 
              </Typography>
          </Box>
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0.1}>
          <Box className="ParallaxPage-title">
            <Typography variant='h3'>
              We always focus on
              software development
              methodology and consulting.
            </Typography>
          </Box>
          <Box className="ParallaxPage-titleText">
            <Typography variant='body1'>
            join us in challenging the norm and revolutionizing
            the way we connect. Join VIRUN INTERACTIVE and
            discover a better way to connect in the modern world. 
            </Typography>
          </Box>
        </ParallaxLayer>
      </Parallax>

      <Spline scene="https://prod.spline.design/c31kwQf9MYj4B8RC/scene.splinecode" />
    </Box>
  );
}
