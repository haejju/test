import { SxProps, Theme } from "@mui/material"

export const rootSx: SxProps<Theme> = (theme)=>({
        // display:'flex',
        // justifyContent:'center',
        // alignItems:'center',
        maxWdth: '100vw',
        overflowX: 'hidden',
        bgcolor:'#121212',
        height:'100vh',
        '& 	.title':{
          position:'absolute',
          pt:16,
          pl:16,
            '& .MuiTypography-h1':{
            color:'#fff',
            fontWeight:600,
            },
        }
})