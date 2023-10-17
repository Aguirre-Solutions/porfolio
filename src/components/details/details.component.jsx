import { useNavigate } from "react-router-dom";
import { Box, Grid } from '@mui/material';
import { StyledVerticalDivider, StyledHorizontalDivider, StyledTypography, StyledButton } from '../../utils/styledComponents';
import {TbBrandNodejs} from 'react-icons/tb';
import {SiMongodb, SiFirebase, SiReact, SiTypescript, SiGithub, SiRedux, SiMui} from 'react-icons/si';

const Details = () => {
    const navigate = useNavigate();

    const goToAbout = () => {
        navigate('/About');
    }

    const goToResume = () => {
        navigate('/Resume');
    }

    const goToPortfolio = () => {
        navigate('/Portfolio');
    }


    return (
        <Box>
            <Grid container justifyContent="center" alignItems="center">
                <Grid item xs={12} sm={12} md={12} align="center">
                    {/* Box for Image */}
                    <Box 
                        width={140} 
                        height={140} 
                        borderRadius="50%" 
                        overflow="hidden" 
                        mb={2}
                    >
                        <img src="https://res.cloudinary.com/recipeb00k/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,b_rgb:262c35/v1697509646/IMG_20180515_153635186_npoe2j.jpg" alt="Profile" width="100%" />
                    </Box>

                    <Grid container direction="row" alignItems="center" justifyContent="center">
                        <Grid item>
                            <StyledTypography variant="h2" >
                                Ruben Aguirre
                            </StyledTypography>
                        </Grid>
                        <Grid item>
                            <StyledVerticalDivider />
                        </Grid>
                    </Grid>

                    <StyledTypography variant="h5" fontStyle={"italic"} paddingBottom={3} textAlign={'center !important'}>
                       junior full stack developer
                    </StyledTypography>

                    <Box mt={3} display="flex" justifyContent="center" gap={2}>
                        <SiTypescript size={40} />
                        <SiReact size={40} />
                        <SiMui size={40} />
                        <SiRedux size={40} />
                        <TbBrandNodejs size={40} />
                        <SiMongodb size={40} />
                        <SiFirebase size={40} />
                        <SiGithub size={40} />
                    </Box>
                    <StyledHorizontalDivider sx={{margin: '20px'}} />
                    <Box mt={3} justifyContent='space-between' display='flex'>
                        <StyledButton variant="contained" color="primary" size="large" onClick={goToAbout}> About Me</StyledButton>
                        <StyledButton variant="contained" color="primary" size="large" onClick={goToResume}> Resume</StyledButton>
                        <StyledButton variant="contained" color="primary" size="large" onClick={goToPortfolio}> Portfolio</StyledButton>
                    </Box>    
                 </Grid>
            </Grid>
        </Box>
    );
}

export default Details;
