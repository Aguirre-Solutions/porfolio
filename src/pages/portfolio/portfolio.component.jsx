import { Box, Grid } from '@mui/material';
import { StyledTypography } from '../../utils/styledComponents';
import PortfolioItem from '../../components/portfolio-item/portfolio-item.component';


const Portfolio = () => {
    const imageSrc = 'https://res.cloudinary.com/recipeb00k/image/upload/v1696527867/R_r6jv9x.jpg'
    const title = 'Recipe Book';
    const description = 'A recipe book app built with React, Redux, and Firebase.';

    return (
        <Box>
            <StyledTypography variant="h2" sx={{ textAlign: 'center' }}>
                Portfolio
            </StyledTypography>            
            <Grid container spacing={4}>
                <Grid item xs={12} md={6} lg={4}>
                    <PortfolioItem imageSrc={imageSrc} title={title} description={description} />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <PortfolioItem imageSrc={imageSrc} title={title} description={description} />        
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <PortfolioItem imageSrc={imageSrc} title={title} description={description} />        
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <PortfolioItem imageSrc={imageSrc} title={title} description={description} />        
                </Grid>
            </Grid>      
        </Box>   
    )
    
}

export default Portfolio;