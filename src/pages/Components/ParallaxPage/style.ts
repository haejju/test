import { SxProps, Theme,createTheme } from "@mui/material"


export const rootSx: SxProps<Theme> = (theme)=>({
  position:'relative',
  maxWdth: '100%',
  overflowX: 'hidden',
  bgcolor:'#121212',
  height:'100vh',
  '& .MuiTypography-root':{
    color:'#fff',
    fontFamily:"Montserrat",
  },
  '& .MuiTypography-h1, & .MuiTypography-h2':{
    fontWeight:600,
    },
  '& .MuiTypography-body1':{
    width:740,
    fontWeight:460,
    fontSize:'1.2rem',
    lineHeight:'2rem',
    },
  '& .ParallaxPage-content':{
    position:'absolute',
    display:'flex',
    justifyContent:"space-between",
    width:'100%',
    height:'100%',
    padding: 15,
  },
  '& .ParallaxPage-titleText':{
    display:'flex',
    justifyContent:'flex-end',
    width:'100%',
    '& .MuiTypography-body1':{
      width:740,
      fontWeight:460,
      fontSize:'1.2rem',
      lineHeight:'2rem',
      },
  },
})