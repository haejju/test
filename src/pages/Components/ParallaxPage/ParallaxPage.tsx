import React from "react";
import Spline from '@splinetool/react-spline';
import {Box,Typography,Stack} from '@mui/material';
import { rootSx } from './style';
import { Parallax,ParallaxLayer } from '@react-spring/parallax';

// https://www.youtube.com/watch?v=UgIwjLg4ONk

export default function ParallaxPage() {

  return (
    <Box className="ParallaxPage-root" sx={rootSx}>
      <Parallax pages={4} style={{top:'0', left:'0'}}>
        <ParallaxLayer offset={0} speed={0.2} factor={1}>
          <Stack className='ParallaxPage-content'>
            <Box className="ParallaxPage-title">
              <Typography variant='h1'>
                Challenges to new <br/>
                touchpoints
              </Typography>
            </Box>
            <Box className="ParallaxPage-titleText" >
              <Typography variant='body1'>
                empower your connections in the digital age with a new perspective.
                In a world where the network is constantly evolving, 
                we at VIRUN INTERACTIVE are pushing boundaries and creating
                innovative solutions to make the connection between individuals
                and businesses easier and more intuitive.
                Don't settle for the status quo, join us in challenging the norm and
                revolutionizing the way we connect. Join VIRUN INTERACTIVE and  
                discover a better way to connect in the modern world.
              </Typography>
            </Box>
          </Stack>
          {/* <Spline scene="https://prod.spline.design/XSUUkoiOBPFAWQrT/scene.splinecode" /> */}
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2}>
          <Stack className='ParallaxPage-content'>
            <Box className="ParallaxPage-title">
              <Typography variant='h2' >
                We always focus on<br/>
                software development<br/>
                methodology and consulting.
              </Typography>
            </Box>
            <Box className="ParallaxPage-titleText">
              <Typography variant='body1'>
                Transform the way you approach software development with our digital agency.
                We believe in a holistic and organic approach, where every aspect of the 
                process is seamlessly integrated. 
                Say goodbye to the fragmented and time-consuming traditional 
                method of planning, UI/UX design, development, security, and verification. 
                With our approach, you'll save time, increase efficiency, and ensure that 
                every aspect of your project is aligned with your goals.  
                Join us in advocating for a better way to develop software and bring your vision to life. 
              </Typography>
            </Box>
          </Stack>
          {/* <Spline scene="https://prod.spline.design/cvO9PavEszE-0aLK/scene.splinecode" /> */}
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0.2}>
          <Stack className='ParallaxPage-content'>
            <Box className="ParallaxPage-title">
              <Typography variant='h2' >
                We can give you <br/> 
                confidence in your platform idea.
              </Typography>
            </Box>
            <Box className="ParallaxPage-titleText">
              <Typography variant='body1'>
              Bring your platform idea to life with confidence.
              At VIRUN INTERACTIVE, we understand that taking your idea from
              concept to reality can be a daunting task.
              That's why we're here to support you every step of the way.
              Our team of experts will work with you to bring your vision to life,
              providing the guidance and expertise you need to build a 
              platform that is robust, scalable, and ready for success. 
              With VIRUN INTERACTIVE you can have confidence in your idea and
              the future of your platform. Let's bring your idea to life together.
              </Typography>
            </Box>
          </Stack>
          {/* <Spline scene="https://prod.spline.design/G15qhAySD09k1Uj2/scene.splinecode" /> */}
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={0.2}>
          <Stack className='ParallaxPage-content'>
            <Box className="ParallaxPage-title">
              <Typography variant='h2' >
                Achieving success in<br/> 
                software development<br/> 
                starts with integration
              </Typography>
            </Box>
            <Box className="ParallaxPage-titleText">
              <Typography variant='body1'>
                At VIRUN INTERACTIVE, we believe that seamless integration 
                is the key to delivering successful projects that meet your 
                goals and exceed your expectations. Our team of experts 
                uses a comprehensive approach to ensure that every aspect 
                of your project, from planning to verification, is integrated 
                and working together seamlessly. Don't settle for fragmented 
                solutions and subpar results. Choose VIRUN INTERACTIVE 
                and experience the power of integrated software 
                development.
              </Typography>
            </Box>
          </Stack>
          {/* <Spline scene="https://prod.spline.design/hw4HCf47Y8YvTmxO/scene.splinecode" /> */}
        </ParallaxLayer>
      </Parallax>
    <Spline scene="https://prod.spline.design/2nwq1cYWkTmvj6CE/scene.splinecode" />
    </Box>
  );
}
