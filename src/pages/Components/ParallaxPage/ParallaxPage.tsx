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
          <Spline scene="https://prod.spline.design/XSUUkoiOBPFAWQrT/scene.splinecode" />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.1}>
          <Box className="ParallaxPage-title">
            <Typography variant='h3'>
              We always focus on
              software development
              methodology and consulting.
            </Typography>
          </Box>
          <Box className="ParallaxPage-titleText">
            <Typography variant='body1'>
            Transform the way you approach software development with our digital agency.
            We believe in a holistic and organic approach, where every aspect of the process is
            seamlessly integrated. Say goodbye to the fragmented and time-consuming traditional
            method of planning, UI/UX design, development, security, and verification.
            With our approach, you'll save time, increase efficiency, and ensure that
            every aspect of your project is aligned with your goals. 
            Join us in advocating for a better way to develop software and bring your vision to life. 
              </Typography>
          </Box>
          <Spline scene="https://prod.spline.design/cvO9PavEszE-0aLK/scene.splinecode" />
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
          <Spline scene="https://prod.spline.design/G15qhAySD09k1Uj2/scene.splinecode" />
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={0.1}>
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
          <Spline scene="https://prod.spline.design/hw4HCf47Y8YvTmxO/scene.splinecode" />
        </ParallaxLayer>
      </Parallax>

      {/* <Spline scene="https://prod.spline.design/c31kwQf9MYj4B8RC/scene.splinecode" /> */}
    </Box>
  );
}
