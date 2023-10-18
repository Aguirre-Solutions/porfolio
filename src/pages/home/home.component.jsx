import {Box, Grid, useMediaQuery} from '@mui/material';

import Details from '../../components/details/details.component';
import Experience from '../../components/experience/experience.component';
import Portfolio from '../portfolio/portfolio.component';
import { useContext } from 'react';
import { ThemeValuesContext } from '../../context/theme-values.component';
import AboutSnippet from '../../components/about-snippet/about-snippet.component';
import { StyledVerticalDivider, StyledHorizontalDivider } from '../../utils/styledComponents';
import Skills from '../../components/skills/skills.component';

const Home = () => {
    const theme = useContext(ThemeValuesContext);
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Grid container justifyContent="center" alignItems="center" spacing={3}>
            {/* Keep consistent spacing using spacing prop */}
            
            {/* Details Component */}
            <Box component={Grid} item xs={12} md={3}>
                <Details theme={theme} />
            </Box>

            {isMobile ? 
            <Box component={Grid} item xs={12} md={1} display="flex" justifyContent="center">
                <StyledHorizontalDivider sx={{ width:'80%' }} />
             </Box>
            :
            <Box component={Grid} item md={1} display="flex" justifyContent="center">
                <StyledVerticalDivider />
            </Box>
            }

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
                <StyledHorizontalDivider sx={{ width:'80%' }} />
            </Box>
            
            {/* Skills and Experience Component */}
            <Grid container item xs={12} sm={12} md={12} lg={10} xl={8} spacing={3}>
                {/* Skills Component */}
                <Box component={Grid} item xs={12} md={4} >
                    <Skills theme={theme}/>
                </Box>

                {/* Experience Component */}
                <Box component={Grid} item xs={12} md={8}>
                    <Experience theme={theme}/>
                </Box>
            </Grid>
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
