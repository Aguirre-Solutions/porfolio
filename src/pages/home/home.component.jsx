import {Box, Grid} from '@mui/material';

import Details from '../../components/details/details.component';
import Experience from '../../components/experience/experience.component';
import Portfolio from '../portfolio/portfolio.component';
import { useContext } from 'react';
import { ThemeValuesContext } from '../../context/theme-values.component';
import AboutSnippet from '../../components/about-snippet/about-snippet.component';
import { StyledVerticalDivider, StyledHorizontalDivider } from '../../utils/styledComponents';

const Home = () => {
    const theme = useContext(ThemeValuesContext);

    return (
        <Grid container justifyContent="center" alignItems="center" spacing={3}>
            {/* Keep consistent spacing using spacing prop */}
            
            {/* Details Component */}
            <Box component={Grid} item xs={12} md={3}>
                <Details theme={theme} />
            </Box>

            {/* Vertical Divider */}
            <Box component={Grid} item xs={12} md={1} display="flex" justifyContent="center">
                <StyledVerticalDivider />
            </Box>

            {/* AboutSnippet Component */}
            <Box component={Grid} item xs={12} md={5}>
                <AboutSnippet />
            </Box>

            <Box 
                component={Grid} 
                item xs={12} 
                display="flex" 
                justifyContent="center" 
                alignItems="center"
            >
                <StyledHorizontalDivider sx={{ margin: '20px', width:'80%' }} />
            </Box>
            
            <Box component={Grid} item xs={12} sm={12} md={12} lg={10} xl={8}>
                <Experience theme={theme}/>
            </Box>
 

            <Box 
                component={Grid} 
                item xs={12} 
                display="flex" 
                justifyContent="center" 
                alignItems="center"
            >
                <StyledHorizontalDivider sx={{ margin: '20px', width:'80%' }} />
            </Box>
            <Box component={Grid} item xs={12} sm={12} md={12} lg={10} xl={8}>
                <Portfolio />
            </Box>
        </Grid>
    );
};

export default Home;
