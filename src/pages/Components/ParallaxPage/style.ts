import { SxProps, Theme } from "@mui/material"


export const rootSx: SxProps<Theme> = (theme)=>({
        maxWdth: '100%',
        overflowX: 'hidden',
        bgcolor:'#121212',
        height:'100vh',

        '& .MuiTypography-root':{
          color:'#fff',
          fontFamily:"Montserrat"
        },

        '& 	.ParallaxPage-title':{
          position:'absolute',
          top:'10%',
          left:'10%',
            '& .MuiTypography-h1':{
            fontWeight:600,
            // textTransform:'uppercase',
            },
        },
        '& .ParallaxPage-titleText':{
          position:'absolute',
          bottom:'15%',
          right:'10%',
          width: 640,
          '& .MuiTypography-body1':{
            fontWeight:400,
            whiteSpace:'pre-line',
            fontSize:'1.4rem',
            },
        },



    
})