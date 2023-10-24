import { useNavigate } from "react-router-dom";
import { Box, Grid,  } from '@mui/material';
import { StyledTypography } from '../../utils/styledComponents';
import Icons from "../icons/icons.component";

const Details = ({theme, checks}) => {

    const { isMobile, isTablet } = checks;

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
                    <StyledTypography variant={ isMobile ? 'h4': 'h2'}  textAlign={'center !important'}>
                        Ruben Aguirre
                    </StyledTypography>
                    <StyledTypography variant="h5" fontStyle={"italic"} paddingBottom={3} textAlign={'center !important'}>
                       junior full stack developer
                    </StyledTypography>

                    <Icons/>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Details;
