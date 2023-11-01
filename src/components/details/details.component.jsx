import { useNavigate } from "react-router-dom";
import { Box, Grid, Tooltip, Link  } from '@mui/material';
import { StyledTypography, StyledIconButton } from '../../utils/styledComponents';
import Contact from "../contact/contact.component";
import Icons from "../icons/icons.component";


const Details = ({checks, theme }) => {

    const {isMobile} = checks;



    return (
        <>
            <Grid container justifyContent="center" alignItems="center">
                <Grid item xs={12} sm={12} md={12} align="center">
                    <Box 
                        width={140} 
                        height={140} 
                        borderRadius="50%" 
                        overflow="hidden" 
                        mb={2}
                    >
                        <img src="https://res.cloudinary.com/recipeb00k/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,b_rgb:262c35/v1697509646/IMG_20180515_153635186_npoe2j.jpg" alt="Profile" width="100%" />
                    </Box>
                    <StyledTypography variant={ isMobile ? 'h5': 'h4'}  textAlign={'center !important'}>
                        Ruben Aguirre
                    </StyledTypography>
                    <StyledTypography variant="h6" fontStyle={"italic"}  textAlign={'center !important'}>
                       junior full stack developer
                    </StyledTypography>
                    
                    <Icons checks={checks}/>
                    <Contact theme={theme}/>

                    

                </Grid>
            </Grid>
        </>
    );
}

export default Details;
